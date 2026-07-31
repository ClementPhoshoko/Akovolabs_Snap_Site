import { useEffect } from "react";
import SpotlightSection from "../components/SpotlightSection";
import Reveal from "../components/Reveal";

const DOCS = [
  {
    id: "getting-started",
    title: "Getting started",
    content: (
      <>
        <p className="docs-lead">
          AkovoLabs Snap is a Chrome and Edge extension for full-page screenshots and AI-powered
          design extraction. Here is everything you need to get up and running.
        </p>

        <h2 id="getting-started-install">Installation</h2>
        <p>
          Install AkovoLabs Snap from the Chrome Web Store or Edge Add-ons, then pin it to your
          toolbar. Snap works in any Chromium browser — Chrome 120+, Edge, Brave, Opera GX, and
          similar.
        </p>

        <h2 id="getting-started-load-unpacked">Loading from source</h2>
        <ol>
          <li>Build the extension from source with <code>npm run build</code>.</li>
          <li>Open <code>chrome://extensions</code> in your browser.</li>
          <li>Enable <strong>Developer mode</strong>.</li>
          <li>Click <strong>Load unpacked</strong> and select the project&apos;s <code>dist/</code> folder.</li>
          <li>Pin <strong>AkovoLabs Snap</strong> to the toolbar.</li>
        </ol>
      </>
    ),
  },
  {
    id: "capture",
    title: "Capturing a screenshot",
    content: (
      <>
        <p className="docs-lead">
          Capture an entire webpage or just the visible viewport — then download or copy it.
        </p>

        <h2 id="capture-modes">Capture modes</h2>
        <ol>
          <li>Open any webpage.</li>
          <li>Click the <strong>AkovoLabs Snap</strong> extension icon.</li>
          <li>Choose a capture mode:
            <ul>
              <li><strong>Capture Full Page</strong> — the entire scrollable page.</li>
              <li><strong>Capture Visible Screen</strong> — just the current viewport.</li>
            </ul>
          </li>
          <li>Snap measures the page, captures each viewport, and stitches a seamless image.</li>
          <li><strong>Download</strong> the result or <strong>copy it to the clipboard</strong>.</li>
        </ol>

        <h2 id="capture-floating-nav">Floating navigation</h2>
        <p>
          Full-page screenshots keep the navigation visible in the first viewport, then hide
          detected repeated floating bars in subsequent viewports. The image reads like a document
          instead of repeating the same header or footer.
        </p>
        <p>Choose <strong>Settings → Floating Navigation</strong>:</p>
        <ul>
          <li><strong>Smart (top/bottom bars)</strong> — recommended; detects wide edge-anchored navigation layers.</li>
          <li><strong>Keep floating UI</strong> — captures the page exactly as displayed.</li>
          <li><strong>Hide all floating UI</strong> — more aggressive fixed/sticky removal.</li>
        </ul>
        <p>
          Elements marked with <code>data-snap-keep</code> are never hidden. Some browser-owned UI,
          closed shadow roots, and cross-origin frames cannot be modified by an extension.
        </p>

        <h2 id="capture-restore">Page restoration</h2>
        <p>
          Your original scroll position and page styles are restored automatically after every
          capture. Videos are paused, animations are settled, and a tail-retry loop ensures the last
          bit of the page is captured.
        </p>
      </>
    ),
  },
  {
    id: "extract-design",
    title: "Extract Design (AI)",
    content: (
      <>
        <p className="docs-lead">
          The flagship feature: turn any webpage into a ready-to-run React project with Gemini AI.
        </p>

        <h2 id="extract-design-usage">Using Extract Design</h2>
        <ol>
          <li>Open the page whose design you want.</li>
          <li>Click the extension icon, then <strong>Extract Design</strong>.</li>
          <li>Watch the 16-stage pipeline: capturing, analyzing DOM/styles/fonts/layout, then AI generation.</li>
          <li>Review the <strong>similarity score</strong> and download the <strong>ZIP</strong> (or copy it).</li>
          <li>Unzip, then run <code>npm install</code> and <code>npm run dev</code>.</li>
        </ol>

        <h2 id="extract-design-setup">One-time setup</h2>
        <ol>
          <li>Go to <strong>Settings → AI Configuration</strong>.</li>
          <li>Paste your <strong>Gemini API key</strong> from Google AI Studio.</li>
          <li>Click <strong>Test Connection</strong> to verify the key and available models.</li>
        </ol>
        <p>
          Snap works with a curated set of active Gemini models and automatically falls back across
          them. Pricing is pay-as-you-go and typically fractions of a cent per extraction.
        </p>

        <h2 id="extract-design-zip">What is inside the ZIP</h2>
        <pre>{`extracted-design/
├── package.json          # Vite + React dependencies and scripts
├── index.html            # Loads /index.jsx
├── index.jsx             # Mounts <App />
├── App.jsx               # The reconstructed page
├── App.css               # Plain CSS with the page's design
├── public/               # Extracted image assets
├── source-screenshots/   # Full-page captures used as references
└── EXTRACTION_REPORT.json`}</pre>
        <p>
          The exporter normalizes common AI output automatically (for example{" "}
          <code>App.module.css</code> → <code>App.css</code>, <code>className={"{styles.foo}"}</code> →{" "}
          <code>className="foo"</code>), so the ZIP always builds out of the box.
        </p>

        <h2 id="extract-design-reliability">Reliability</h2>
        <ul>
          <li><strong>Model cascade</strong> — tries your primary model, then falls back across backups.</li>
          <li><strong>Deprecated-model filtering</strong> — never wastes requests on retired models.</li>
          <li><strong>Dual endpoint fallback</strong> — switches between the Gemini Interactions API and generateContent.</li>
          <li><strong>Timeouts</strong> on every AI call so the popup never hangs.</li>
          <li><strong>Token budgeting</strong> — compressed screenshots and capped payloads keep costs low.</li>
          <li><strong>Archived locally</strong> — every extraction can be re-downloaded from History.</li>
        </ul>
      </>
    ),
  },
  {
    id: "settings",
    title: "Settings",
    content: (
      <>
        <p className="docs-lead">
          Tune capture quality, filenames, themes, and your AI configuration.
        </p>

        <h2 id="settings-capture">Capture options</h2>
        <ul>
          <li><strong>Quality</strong> — high, medium, or low.</li>
          <li><strong>Format</strong> — PNG, JPEG, or WebP.</li>
          <li><strong>Capture delay</strong> — wait 2–10 seconds for animations or lazy content to settle.</li>
          <li><strong>Floating navigation</strong> — Smart, Keep floating UI, or Hide all floating UI.</li>
          <li><strong>Auto-download</strong> — save captures immediately after finishing.</li>
          <li><strong>Filenames</strong> — templates like <code>Snap_title-date-time</code>, with an optional save-as prompt.</li>
        </ul>

        <h2 id="settings-ai">AI Configuration</h2>
        <p>
          Add your Gemini API key from Google AI Studio and pick a primary model. Use{" "}
          <strong>Test Connection</strong> to verify the key before your first extraction. The key is
          stored locally and only used for requests you start.
        </p>

        <h2 id="settings-theme">Theme and accents</h2>
        <p>
          Switch between dark and light themes and pick an accent color. Your preferences are
          persisted locally.
        </p>
      </>
    ),
  },
  {
    id: "history",
    title: "History",
    content: (
      <>
        <p className="docs-lead">
          Every capture is saved locally — searchable, grouped by time, and easy to manage.
        </p>

        <h2 id="history-browsing">Browsing and searching</h2>
        <ul>
          <li>Thumbnails with page title, favicon, and URL for every capture.</li>
          <li>Time-grouped views: Today, Yesterday, This Week, This Month, This Year.</li>
          <li>Search across titles and domains.</li>
        </ul>

        <h2 id="history-actions">Actions</h2>
        <p>
          Each entry supports <strong>download, copy, share, open, and delete</strong>. Design
          extracts are archived too, so you can re-download any AI-generated ZIP later.
        </p>

        <h2 id="history-delete">Deleting data</h2>
        <p>
          Delete individual entries (including stored design archives) any time. Removing the
          extension erases all locally stored settings, history, and archives.
        </p>
      </>
    ),
  },
  {
    id: "permissions",
    title: "Permissions & privacy",
    content: (
      <>
        <p className="docs-lead">
          Snap uses minimal, user-invoked permissions. Everything stays on your device unless you
          explicitly run an AI extraction.
        </p>

        <h2 id="permissions-table">Permissions</h2>
        <table>
          <thead>
            <tr>
              <th>Permission</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>activeTab</code></td>
              <td>Access the tab you are currently on.</td>
            </tr>
            <tr>
              <td><code>scripting</code></td>
              <td>Inject the capture and analysis content script.</td>
            </tr>
            <tr>
              <td><code>storage</code></td>
              <td>Save your settings and capture history locally.</td>
            </tr>
            <tr>
              <td><code>downloads</code></td>
              <td>Save screenshots and extracted project ZIPs.</td>
            </tr>
            <tr>
              <td>Gemini API host <em>(optional)</em></td>
              <td>Send design data to Gemini only when you run Extract Design — requested on first use.</td>
            </tr>
          </tbody>
        </table>

        <h2 id="permissions-data">Data handling</h2>
        <ul>
          <li>Settings, history, and design archives live only on your device.</li>
          <li>Capture processing happens entirely in your browser.</li>
          <li>AI extraction is opt-in: page data goes to Google&apos;s Gemini API only when you click <strong>Extract Design</strong>.</li>
          <li>Your API key is stored locally and used only for your requests.</li>
          <li>No personal information, no tracking, no advertising.</li>
        </ul>
      </>
    ),
  },
  {
    id: "limits",
    title: "Capture limits",
    content: (
      <>
        <p className="docs-lead">
          Snap is designed for desktop Chromium browsers and ordinary web pages.
        </p>

        <h2 id="limits-known">Known limits</h2>
        <ul>
          <li>Browser-internal pages, PDF viewers, and pages that block script injection cannot be captured as full pages.</li>
          <li>Extremely tall or high-resolution pages may exceed safe browser canvas limits; Snap stops with an error instead of producing a corrupted image.</li>
          <li>Dynamic, infinite-scroll pages can change while being captured — wait for the page to finish loading first.</li>
        </ul>
      </>
    ),
  },
  {
    id: "stack",
    title: "Technology stack",
    content: (
      <>
        <p className="docs-lead">
          Fast, lightweight, and built on modern web standards.
        </p>

        <h2 id="stack-table">Built with</h2>
        <table>
          <thead>
            <tr>
              <th>Technology</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>React</td><td>Popup interface</td></tr>
            <tr><td>JavaScript (ES6+)</td><td>Application logic</td></tr>
            <tr><td>Vite</td><td>Development and build tool</td></tr>
            <tr><td>CSS / CSS Modules</td><td>User interface styling</td></tr>
            <tr><td>Chrome MV3 APIs</td><td>Browser integration</td></tr>
            <tr><td>HTML5 Canvas</td><td>Image stitching</td></tr>
            <tr><td>Gemini API</td><td>AI design extraction</td></tr>
            <tr><td>IndexedDB</td><td>Design archive storage</td></tr>
            <tr><td>JSZip</td><td>Project ZIP export</td></tr>
            <tr><td>Framer Motion</td><td>Animated UI</td></tr>
            <tr><td>Lucide Icons</td><td>UI iconography</td></tr>
          </tbody>
        </table>
      </>
    ),
  },
];

export default function Docs() {
  useEffect(() => {
    const sections = DOCS.map((section) => document.getElementById(section.id)).filter(Boolean);
    const links = DOCS.map((section) =>
      document.querySelector(`.docs-sidebar a[href="#${section.id}"]`)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const current = visible[0] || entries[entries.length - 1];
        if (!current) return;
        links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${current.target.id}`));
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <SpotlightSection className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
      <div className="container">
        <div className="docs-layout">
          <aside className="docs-sidebar" aria-label="Documentation">
            <span className="docs-sidebar-label">Documentation</span>
            {DOCS.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.title}
              </a>
            ))}
          </aside>

          <article className="docs-content">
            <Reveal>
              <h1>Documentation</h1>
              <p className="docs-lead" style={{ marginBottom: 8 }}>
                Everything you need to capture and extract with AkovoLabs Snap.
              </p>
            </Reveal>
            {DOCS.map((section) => (
              <Reveal key={section.id}>
                <section id={section.id}>{section.content}</section>
              </Reveal>
            ))}
          </article>
        </div>
      </div>
    </SpotlightSection>
  );
}
