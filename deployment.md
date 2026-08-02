# Deployment Guide — AkovoLabs Snap (static site, no Docker)

## Prerequisites

- RackNerd VPS (or similar) with Ubuntu 22.04+, user `ubuntu`
- Domain `snap.akovolabs.co.za` with an **A record** pointing to your VPS IP
- GitHub repo: `https://github.com/ClementPhoshoko/Akovolabs_Snap_Site.git`
- Caddy already installed and running (used for the other sites)
- Active branch for deploys: `refinements` (change in the workflow if you later merge to `main`)

This is a **static site** (Vite build output in `dist/`). There is no backend, no
port to proxy — Caddy just serves the files and handles the SPA fallback + HTTPS.

---

## 1. Install Node.js on the VM

Vite 6 needs Node 18+, so install Node 20 LTS via NodeSource (Ubuntu's default
`nodejs` package is too old):

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

node --version   # should print v20.x
```

---

## 2. Clone & build

```bash
sudo mkdir -p /var/www
sudo chown ubuntu:ubuntu /var/www

git clone https://github.com/ClementPhoshoko/Akovolabs_Snap_Site.git /var/www/akovolabs-snap
cd /var/www/akovolabs-snap
git checkout refinements   # the active branch

npm ci
npm run build
```

The build outputs the site to `/var/www/akovolabs-snap/dist`.

> If the checkout already exists (redeploy), just `cd /var/www/akovolabs-snap && git pull && npm ci && npm run build`.

---

## 3. Caddy (static file server + SPA fallback)

Append this site to the existing Caddyfile. The `try_files {path} /index.html`
line is what makes `/docs`, `/support`, and `/privacy` work on a hard refresh
(the site is a client-side router).

```bash
sudo tee -a /etc/caddy/Caddyfile <<'EOF'

snap.akovolabs.co.za {
	root * /var/www/akovolabs-snap/dist
	try_files {path} /index.html
	encode gzip zstd
	file_server
}
EOF

sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy   # reload (not restart) picks up config without downtime
```

---

## 4. DNS

Add an A record for `snap` in your `akovolabs.co.za` DNS:
`snap  A  <your-vps-ip>`

Caddy provisions and renews the SSL certificate automatically. Once DNS
propagates (a few minutes), `https://snap.akovolabs.co.za` works — no manual
certbot steps.

---

## 5. Verify

```bash
curl -sI https://snap.akovolabs.co.za       # expect HTTP/2 200
curl -sI https://snap.akovolabs.co.za/docs  # expect 200 (SPA fallback works)
curl -s  https://snap.akovolabs.co.za/robots.txt
curl -s  https://snap.akovolabs.co.za/sitemap.xml
```

Open the site, toggle dark/light, and refresh `/docs` to confirm the fallback.

---

## 6. Auto-Deploy (GitHub Actions)

On every push to `refinements` (or `main`), GitHub SSHes into the VM and
rebuilds the site. Caddy serves files straight from disk, so **no Caddy reload
is required** after a rebuild.

### Step 1 — Generate an SSH deploy key (on your local machine)

```bash
ssh-keygen -t ed25519 -C "github-deploy-snap" -f ~/.ssh/snap_deploy
cat ~/.ssh/snap_deploy.pub
```

When asked for a passphrase, press **Enter** twice (leave it empty — GitHub
Actions can't enter a passphrase).

> **Windows / PowerShell note:** the old `-N ""` flag fails on Windows
> PowerShell 5.1 (it strips empty-string arguments, giving
> `option requires an argument -- N`). Omitting `-N` and pressing Enter twice
> avoids it. If `cat ~/.ssh/snap_deploy.pub` says the file does not exist, the
> key was never created — re-run the `ssh-keygen` line.

> **Windows `cmd` note:** `cmd` does not expand `~`, and `.ssh` often doesn't
> exist yet. Use the full path and create the folder first:

```cmd
mkdir C:\Users\User\.ssh
ssh-keygen -t ed25519 -C "github-deploy-snap" -f C:\Users\User\.ssh\snap_deploy
type C:\Users\User\.ssh\snap_deploy.pub
```

This creates:
- `~/.ssh/snap_deploy` (private key — goes to GitHub as a secret)
- `~/.ssh/snap_deploy.pub` (public key — goes to the VPS)

The last `cat` prints the public key — you'll paste it into the VM in the next step.

### Step 2 — Add the public key to the VM

SSH into the VM as `ubuntu`, then paste the `.pub` line from Step 1:

```bash
# On the VPS:
mkdir -p ~/.ssh
echo "<paste the .pub line here>" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

> This appends to `~/.ssh/authorized_keys`, so your existing keys (and any other
> deploy keys) stay intact.

### Step 3 — Test the SSH connection

From your local machine — should connect without a password prompt:

```bash
ssh -i ~/.ssh/snap_deploy ubuntu@<your-vps-ip>
```

On Windows `cmd`/PowerShell, use the full path:

```cmd
ssh -i C:\Users\User\.ssh\snap_deploy ubuntu@<your-vps-ip>
```

### Step 4 — Add GitHub Secrets

Repo: `ClementPhoshoko/Akovolabs_Snap_Site`. Either way works:

**Option A — `gh` CLI (quickest):**

```bash
gh secret set VPS_HOST     --repo ClementPhoshoko/Akovolabs_Snap_Site --body "<your-vps-ip>"
gh secret set VPS_USER     --repo ClementPhoshoko/Akovolabs_Snap_Site --body "ubuntu"
gh secret set VPS_SSH_KEY  --repo ClementPhoshoko/Akovolabs_Snap_Site --body "$(cat ~/.ssh/snap_deploy)"
```

**Option B — web UI:**

Repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**:

| Secret | Value |
|---|---|
| `VPS_HOST` | Your VPS IP (e.g. `123.45.67.89`) |
| `VPS_USER` | `ubuntu` |
| `VPS_SSH_KEY` | The **entire** private key: `cat ~/.ssh/snap_deploy` |

For `VPS_SSH_KEY`, include the `-----BEGIN OPENSSH PRIVATE KEY-----` /
`-----END OPENSSH PRIVATE KEY-----` lines. A multiline paste is fine — paste it
exactly as printed.

### Step 5 — Commit the workflow file and push

The workflow already exists in the repo at `.github/workflows/deploy.yml` (see
below). Commit it and push to trigger the first deploy:

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: add auto-deploy workflow"
git push origin refinements
```

The workflow triggers on push to `refinements` or `main` (and manually via the
Actions tab → "Deploy" → Run workflow). Go to the **Actions** tab to watch the
first run.

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main, refinements]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1.2.0
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USER }}
          key: ${{ secrets.VPS_SSH_KEY }}
          script: |
            cd /var/www/akovolabs-snap
            git pull --ff-only
            npm ci
            npm run build
```

---

## Updating Manually

```bash
cd /var/www/akovolabs-snap
git pull
npm ci
npm run build
```

---

## If you prefer Nginx instead

Caddy is the default (auto-SSL + zero config). If you'd rather use Nginx, add a
server block with the SPA fallback and let Certbot handle SSL:

```nginx
server {
    listen 80;
    server_name snap.akovolabs.co.za;
    root /var/www/akovolabs-snap/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

```bash
sudo certbot --nginx -d snap.akovolabs.co.za
```

---

## Notes / gotchas

- `dist/` is gitignored, so it never exists until `npm run build` on the VM.
- The deploy workflow uses `npm ci`, which requires the committed
  `package-lock.json` (it is committed).
- Never run `npm run dev` on the VPS — production is the built `dist/` served by Caddy.
- If you change the Caddyfile later, run `sudo caddy validate` then
  `sudo systemctl reload caddy`.
