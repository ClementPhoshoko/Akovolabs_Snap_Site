# AkovoLabs Snap — SEO Plan

Status: **implemented (P0 + P1 core)** — see §5 for the one remaining manual step (Search Console).

Hosting-ready today: clean static build (`dist/`), WebP images, semantic HTML,
lazy-loaded images, no crawl-blocking issues. SEO-ready: no.

---

## 0. Current state (audit)

### Already good
- Single static `index.html` with `<title>`, `description`, Open Graph, and
  Twitter card meta (`index.html:7-31`).
- `lang="en"`, semantic tags (`header`, `nav`, `main`, `section`, `article`,
  `aside`, `footer`), one `<h1>` on Home / Docs / Privacy.
- WebP images with descriptive `alt` + lazy loading.
- Good copy with real keywords (full-page screenshots, AI design extraction,
  React, privacy-first).
- Theme `color-scheme` / `theme-color` set.

### Gaps
| # | Gap | Impact |
|---|-----|--------|
| 1 | SPA (client routing) — **one** title/description serves all 4 pages | Crawlers see the same title everywhere; poor CTR, no per-page ranking |
| 2 | No `<link rel="canonical">` | Duplicate-content ambiguity on `?`/trailing-slash/`#` variants |
| 3 | No `robots.txt` | Can't control crawl budget or point to sitemap |
| 4 | No `sitemap.xml` | Slower discovery of /docs /privacy /support |
| 5 | No structured data (JSON-LD) | No rich results / SERP enrichment |
| 6 | Support page has **no `<h1>`** (SectionHeader renders `h2`) | Broken heading outline |
| 7 | OG/Twitter lack `og:url`, `og:site_name`, per-page images; no `twitter:title/description` | Weak social link previews |
| 8 | No 404 page (wildcard routes to Home) | Soft-404s for old/mistyped URLs |
| 9 | One 419 kB JS bundle (132 kB gzip) | Slower first load on mobile → worse Core Web Vitals |

---

## 1. P0 — before launch (required)

### 1.1 Per-page `<title>` + meta description
Since this is a React SPA, use a tiny `usePageMeta()` hook that sets
`document.title`, `meta[name=description]`, canonical, and per-page OG/Twitter
on route change. Content:

| Route | Title | Description |
|-------|-------|-------------|
| `/` | AkovoLabs Snap — Full-page screenshots & AI design extraction | One-click full-page screenshots and AI that turns any webpage into a ready-to-run React project. Free, privacy-first Chrome extension. |
| `/docs` | Documentation — AkovoLabs Snap | Guides for capturing full pages, Extract Design (AI), settings, history, permissions, and limits. |
| `/privacy` | Privacy Policy — AkovoLabs Snap | How AkovoLabs Snap handles data: everything stays on-device, Gemini only when you opt in. |
| `/support` | Support & FAQ — AkovoLabs Snap | Answers for capture issues, AI extraction, history, and privacy. |

### 1.2 Canonical + OG/Twitter completeness (`index.html`)
- Add `<link rel="canonical" href="https://DOMAIN/">` (per-page, via the hook).
- Add `og:url`, `og:site_name`, `og:locale`, and `twitter:title`,
  `twitter:description`. Per-page `og:image`/`twitter:image` ideally.

### 1.3 `public/robots.txt`
```
User-agent: *
Allow: /
Sitemap: https://DOMAIN/sitemap.xml
```

### 1.4 `public/sitemap.xml`
Static file with the 4 URLs + lastmod. Regenerate on content change.
```
https://DOMAIN/
https://DOMAIN/docs
https://DOMAIN/privacy
https://DOMAIN/support
```

### 1.5 JSON-LD structured data (in `index.html` head)
- **`WebSite`**: name, url, potentialAction SearchAction.
- **`SoftwareApplication`** (best for an extension landing page):
  `name`, `applicationCategory: "BrowserExtension"`, `operatingSystem: "Chrome, Edge"`,
  `offers` (price `0`), `aggregateRating` (only if real reviews exist),
  `url`, `image`.
- Optional `FAQPage` on `/support` from the existing FAQ data.

### 1.6 Fix the Support page `<h1>`
Make `SectionHeader` accept an optional `as`/`level` prop (default `h2`) and
render the Support title as `<h1>` (or add a visible `<h1>` in `Support.jsx`).

### 1.7 Real 404
Replace the `*` wildcard route with a `NotFound` page: `<h1>404</h1>`, links
home, `status` handled by hosting (see §3). Remove soft-404.

### 1.8 Verify rendering
- Test in Google's Rich Results Test + URL Inspection (Search Console) that the
  SPA content renders (Googlebot executes JS; the current single-bundle build
  is fine, but confirm after deploys).

---

## 2. P1 — important after launch

### 2.1 Route-level code splitting
Replace eager imports in `App.jsx` with `React.lazy(() => import(...))` +
`<Suspense>` → separate chunks per page, smaller initial bundle (addresses #9).

### 2.2 Above-the-fold asset hints
- `rel="preload"` the hero screen (`home.webp`) in `index.html`.
- Consider `fetchpriority="high"` on the hero image.

### 2.3 Heading & structure polish
- One `<h1>` per page, logical `h2 → h3` order (audit Docs/Privacy subsections).
- Ensure the FAQ `summary` text isn't the only heading level in its card.

### 2.4 Link hygiene
- Internal links all relative (already true). No orphaned/privacy-doc links.
- Add `rel="noopener noreferrer"` on all external links (already present).

### 2.5 Social share images
Generate one 1200×630 OG image per page (reuse the existing WebP screenshots or
design template) so links shared in Slack/X look intentional.

### 2.6 Performance budget
Track Core Web Vitals in Search Console. Targets:
- LCP < 2.5 s (hero image is preloaded WebP ~50 kB — should pass)
- CLS ≈ 0 (aspect-ratio locked images — already good)
- INP < 200 ms (remove reliance on heavy layout animations on low-end phones)

---

## 3. Hosting requirements (any static host)

- Static file server with **SPA fallback** (`/*` → `/index.html`) so /docs,
  /privacy, /support deep links work on refresh.
- HTTPS + custom domain, `www` → apex redirect (or canonicalize one).
- Brotli/gzip compression (most hosts default on; verify for `assets/*`).
- Long cache for hashed assets in `dist/assets/` (immutable), short for
  `index.html`.
- Serve `robots.txt` and `sitemap.xml` from root.
- Optional but recommended: CDN + edge caching (Cloudflare Pages, Netlify,
  Vercel all give this free).

---

## 4. P2 — later / optional

- **Prerender / SSG**: `vite-react-ssg` or a prerender script to emit static
  HTML per route — best-in-class for a 4-page marketing site; removes reliance
  on JS rendering entirely.
- **Web app manifest** + favicon variants (48/96/180, maskable) — cosmetic.
- **Breadcrumbs** on Docs.
- **404 monitoring** via Search Console coverage report.
- **Backlinks / listings**: Chrome Web Store listing, GitHub, dev.to posts —
  the biggest lever for a new product; add the store URL to the sitemap.

---

## 5. Definition of done (P0+P1)

- [x] `usePageMeta` hook wired into App/Layout with per-route titles/descriptions
      (`src/seo.js` + `src/components/Seo.jsx`, mounted in `Layout.jsx`)
- [x] canonical + full OG/Twitter meta in place (static in `index.html`, per-route via `Seo`)
- [x] `robots.txt` + `sitemap.xml` at root (`public/`)
- [x] JSON-LD `WebSite` + `SoftwareApplication` in head (`index.html`)
- [x] Support page has an `<h1>` (`SectionHeader` now accepts `as`; Support passes `as="h1"`)
- [x] Real 404 page (no soft-404) — `src/pages/NotFound.jsx`, `*` route in `App.jsx`
- [x] Route code-splitting shipped (`React.lazy` for Docs/Privacy/Support + Suspense fallback)
- [x] `npm run build` passes; Rich Results Test shows SoftwareApplication (run after deploy)
- [ ] **Search Console:** verify the site, submit `sitemap.xml`, confirm no coverage errors

### Before launch — required manual edits
- [x] `SITE_URL` / all `https://akovolabs-snap.com` occurrences replaced with the
      real domain `https://snap.akovolabs.co.za` (index.html, `src/seo.js`,
      `public/robots.txt`, `public/sitemap.xml`)
- [x] Google site-verification HTML dropped into `public/`
      (`public/google3625309ebccc8318.html`, copied into `dist/` at build time)
