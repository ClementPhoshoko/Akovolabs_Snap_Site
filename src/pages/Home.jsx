import { motion } from "framer-motion";
import {
  Camera,
  Sparkles,
  Clipboard,
  Download,
  History,
  Shield,
  Layout,
  Palette,
  Package,
  ArrowRight,
  Check,
  MousePointerClick,
  Layers,
  Cpu,
  EyeOff,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import FeatureCard from "../components/FeatureCard";
import StepCard from "../components/StepCard";
import SpotlightSection from "../components/SpotlightSection";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";
import Button, { StoreButton } from "../components/Button";

const FEATURES = [
  {
    icon: Camera,
    title: "Full-page screenshots",
    description:
      "One click captures an entire webpage — auto-scrolled, seamlessly stitched, no missing content. Or grab just the visible viewport.",
  },
  {
    icon: Sparkles,
    title: "Extract Design (AI)",
    description:
      "Turn any page into a ready-to-run React project. Gemini rebuilds the real layout, colors, spacing, and fonts as code you can download.",
  },
  {
    icon: Clipboard,
    title: "Copy to clipboard",
    description:
      "Paste a full-page capture straight into Slack, Figma, Notion, or a bug report. No file juggling needed.",
  },
  {
    icon: Download,
    title: "One-click download",
    description:
      "Export as PNG, JPEG, or WebP with configurable filenames. Extracted projects come down as a ZIP, ready for npm install.",
  },
  {
    icon: History,
    title: "Capture history",
    description:
      "Every capture is saved locally with a thumbnail, title, and URL. Search, group by time, and re-download anytime.",
  },
  {
    icon: Shield,
    title: "Privacy-first",
    description:
      "Runs locally. Settings, history, and archives stay on your device. AI extraction only sends data when you explicitly trigger it.",
  },
];

const STEPS = [
  {
    icon: Camera,
    title: "Capture",
    description: "Open any page and click Capture. Snap measures the page and captures every viewport.",
  },
  {
    icon: Layout,
    title: "Analyze",
    description: "DOM structure, styles, design tokens, fonts, images, icons, and layout are collected automatically.",
  },
  {
    icon: Sparkles,
    title: "Reconstruct",
    description: "Gemini AI rebuilds the page as a Vite + React project, scored for visual similarity.",
  },
  {
    icon: Package,
    title: "Download",
    description: "Grab the ZIP, unzip it, and run npm install && npm run dev. Your extracted project is ready.",
  },
];

const EXTRACT_CHECKS = [
  "Extracts DOM structure, computed styles, CSS variables, typography, images, SVGs, icons, layout, and spacing.",
  "Captures multiple full-page screenshots as visual references for the AI.",
  "Visual verification scores the result and an auto-improve loop closes the gaps.",
  "Smart text policy: headings and labels stay exact, long body copy becomes skeleton placeholders.",
  "Model cascade with dual-endpoint fallback keeps extraction reliable.",
];

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <SpotlightSection className="hero">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="hero-glow-orb" />
        <div className="hero-beam" />
        <div className="hero-beam" />
        <motion.div className="container hero-inner" variants={heroContainer} initial="hidden" animate="show">
          <motion.div variants={heroItem}>
            <span className="badge badge-accent">v1.2.0 · Chrome &amp; Edge</span>
          </motion.div>
          <motion.h1 variants={heroItem}>
            Capture{" "}
            <span className="gradient-text">beyond the screen.</span>
          </motion.h1>
          <motion.p className="hero-sub" variants={heroItem}>
            Full-page screenshots with one click — and AI that turns any webpage into a
            ready-to-run React project.
          </motion.p>
          <motion.div className="hero-actions" variants={heroItem}>
            <StoreButton />
            <Button to="/docs" variant="secondary">
              Read the docs
            </Button>
          </motion.div>
          <motion.p className="hero-meta" variants={heroItem}>
            Free · No account · Everything stays on your device
          </motion.p>

          {/* Floating browser mockup */}
          <motion.div
            variants={heroItem}
            className="frame"
          >
            <div className="frame-bar">
              <div className="frame-dots">
                <span className="frame-dot" style={{ background: "#ff5f57" }} />
                <span className="frame-dot" style={{ background: "#febc2e" }} />
                <span className="frame-dot" style={{ background: "#28c840" }} />
              </div>
              <div className="frame-url">chrome-extension://snap/popup.html</div>
            </div>
            <div className="frame-body">
              <img
                src="/extension_images_hd/home.png"
                alt="AkovoLabs Snap extension interface"
                loading="eager"
              />
            </div>
          </motion.div>
        </motion.div>
      </SpotlightSection>

      {/* 2. Stats Section — Bento Grid Style */}
      <section className="section stats-bento-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="stats-bento-grid">
            
            {/* Card 1: 1 Click to Capture */}
            <Reveal className="bento-card span-7 capture-bento" delay={0.05}>
              <div className="bento-card-beam" />
              <div className="bento-content">
                <span className="bento-badge">
                  <MousePointerClick size={12} /> Capture
                </span>
                <div className="bento-info">
                  <h3 className="bento-title">
                    <CountUp to={1} /> Click to Capture
                  </h3>
                  <p className="bento-desc">One click catches the full scrollable page. Seamless screenshot stitching at full viewport resolution.</p>
                </div>
              </div>
              <div className="bento-visual capture-visual">
                <div className="mock-window">
                  <div className="mock-window-bar">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <div className="mock-window-body">
                    <div className="mock-browser-contents">
                      <div className="mock-element header" />
                      <div className="mock-element card-grid">
                        <span className="mock-element block" />
                        <span className="mock-element block" />
                      </div>
                      <div className="mock-element text-line" />
                      <div className="mock-element text-line short" />
                    </div>
                    <div className="mock-extension-popup">
                      <div className="popup-header">
                        <span className="logo-dot" />
                        Snap Popup
                      </div>
                      <button className="popup-btn">
                        <Camera size={10} />
                        <span>Capture Page</span>
                      </button>
                    </div>
                    <div className="camera-flash" />
                  </div>
                </div>
                <div className="mock-cursor" />
              </div>
            </Reveal>

            {/* Card 2: 16 Pipeline Stages */}
            <Reveal className="bento-card span-5 pipeline-bento" delay={0.1}>
              <div className="bento-card-beam" />
              <div className="bento-content">
                <span className="bento-badge">
                  <Layers size={12} /> Ingestion
                </span>
                <div className="bento-info">
                  <h3 className="bento-title">
                    <CountUp to={16} /> Pipeline Stages
                  </h3>
                  <p className="bento-desc">A highly optimized multi-stage processing pipeline transforming DOM state to custom React code components.</p>
                </div>
              </div>
              <div className="bento-visual pipeline-visual">
                <div className="pipeline-nodes">
                  <div className="node n1">DOM</div>
                  <div className="connector c1" />
                  <div className="node n2">CSS</div>
                  <div className="connector c2" />
                  <div className="node n3">AI</div>
                  <div className="connector c3" />
                  <div className="node n4">ZIP</div>
                </div>
              </div>
            </Reveal>

            {/* Card 3: 100% On-Device */}
            <Reveal className="bento-card span-5 device-bento" delay={0.15}>
              <div className="bento-card-beam" />
              <div className="bento-content">
                <span className="bento-badge">
                  <Cpu size={12} /> Execution
                </span>
                <div className="bento-info">
                  <h3 className="bento-title">
                    <CountUp to={100} suffix="%" /> On-Device
                  </h3>
                  <p className="bento-desc">Runs strictly on local CPU. All settings, histories, and databases remain completely offline.</p>
                </div>
              </div>
              <div className="bento-visual cpu-visual">
                <div className="cpu-core">
                  <Cpu size={32} />
                  <span className="pulse ring-1" />
                  <span className="pulse ring-2" />
                  <span className="pulse ring-3" />
                </div>
              </div>
            </Reveal>

            {/* Card 4: 0 Tracking */}
            <Reveal className="bento-card span-7 privacy-bento" delay={0.2}>
              <div className="bento-card-beam" />
              <div className="bento-content">
                <span className="bento-badge">
                  <EyeOff size={12} /> Privacy
                </span>
                <div className="bento-info">
                  <h3 className="bento-title">
                    <CountUp to={0} /> Tracking, Ever
                  </h3>
                  <p className="bento-desc">Zero telemetry, tracking scripts, cookies, or remote analytics calls. Sandbox-isolated execution.</p>
                </div>
              </div>
              <div className="bento-visual terminal-visual">
                <div className="terminal-header">
                  <span className="dot" />
                  <span className="title">Network Activity</span>
                </div>
                <div className="terminal-body">
                  <div className="terminal-line block">&gt; telemetry-endpoint: BLOCKED</div>
                  <div className="terminal-line block">&gt; thirdparty-analytics: BLOCKED</div>
                  <div className="terminal-line success">&gt; local IndexedDB: SECURED</div>
                  <div className="terminal-line success">&gt; offline capture status: OK</div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 3. HD Showcase: Home */}
      <SpotlightSection className="section showcase-section" color="rgba(74, 139, 207, 0.12)">
        <div className="container">
          <div className="showcase-grid">
            <div className="showcase-content">
              <Reveal>
                <span className="badge badge-accent">Extension Interface</span>
                <h2>A powerful extension in a simple popup</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Capture any viewport or full scrollable webpage with one click. Clean, fast,
                  and runs entirely on your device with offline support.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="hero-actions" style={{ justifyContent: "flex-start" }}>
                  <Button to="/docs" variant="secondary" icon={ArrowRight} iconAfter>
                    View capture guide
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <div className="showcase-img-container">
                <img src="/extension_images_hd/home.png" alt="AkovoLabs Snap popup interface" />
              </div>
            </Reveal>
          </div>
        </div>
      </SpotlightSection>

      {/* 4. Features Grid */}
      <SpotlightSection className="section" color="rgba(98, 151, 85, 0.08)">
        <div className="container">
          <Reveal>
            <SectionHeader
              kicker="Features"
              title="Everything you need to capture the web"
              subtitle="From seamless full-page screenshots to AI-powered design extraction — Snap fits into the way you already work."
            />
          </Reveal>
          <div className="feature-grid">
            {FEATURES.map((feature, index) => (
              <Reveal key={feature.title} delay={(index % 3) * 0.1}>
                <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </SpotlightSection>

      {/* 5. HD Showcase: Processing + Download */}
      <SpotlightSection className="section showcase-section" color="rgba(204, 120, 50, 0.1)">
        <div className="container">
          <div className="showcase-grid reverse">
            <Reveal delay={0.15}>
              <div className="showcase-img-container">
                <img src="/extension_images_hd/processing.png" alt="AI design extraction in progress" />
              </div>
            </Reveal>
            <div className="showcase-content">
              <Reveal>
                <span className="badge badge-accent" style={{ background: "rgba(204, 120, 50, 0.15)", color: "var(--brand-accent)", border: "1px solid rgba(204, 120, 50, 0.3)" }}>
                  <Sparkles size={12} style={{ marginRight: 6, verticalAlign: "middle" }} /> AI Design Extraction
                </span>
                <h2>Gemini-powered layout reconstruction</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Snap parses the live page DOM structure, computed CSS styles, design tokens,
                  typography definitions, and image assets. It builds a structured semantic context
                  to feed into Gemini AI for a precise code rebuild.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </SpotlightSection>

      <SpotlightSection className="section showcase-section" color="rgba(98, 151, 85, 0.1)">
        <div className="container">
          <div className="showcase-grid">
            <div className="showcase-content">
              <Reveal>
                <span className="badge badge-accent" style={{ background: "rgba(98, 151, 85, 0.15)", color: "var(--brand-secondary-light)", border: "1px solid rgba(98, 151, 85, 0.3)" }}>
                  Production Code
                </span>
                <h2>Ready-to-run React codebase</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Download the reconstruction as a complete Vite + React project ZIP file.
                  Unzip, run npm install, and open your code editor. The output is modular, cleanly structured,
                  and preserves the original site's responsive aesthetics.
                </p>
              </Reveal>
              <ul className="check-list" style={{ marginTop: 16 }}>
                {EXTRACT_CHECKS.map((item, index) => (
                  <Reveal key={item} delay={0.05 * index} as="li">
                    <Check />
                    {item}
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={0.2}>
                <div className="hero-actions" style={{ justifyContent: "flex-start" }}>
                  <Button to="/docs#extract-design" variant="secondary" icon={ArrowRight} iconAfter>
                    Learn about reconstruction
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <div className="showcase-img-container">
                <img src="/extension_images_hd/download.png" alt="Extracted design ZIP download page" />
              </div>
            </Reveal>
          </div>
        </div>
      </SpotlightSection>

      {/* 6. How It Works */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              kicker="How it works"
              title="From page to project in four steps"
              subtitle="Snap automates the busywork so you get a clean capture or a working codebase in seconds."
            />
          </Reveal>
          <div className="steps">
            {STEPS.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.1}>
                <StepCard icon={step.icon} title={step.title} description={step.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HD Showcase: History + Settings */}
      <SpotlightSection className="section showcase-section" color="rgba(74, 139, 207, 0.1)">
        <div className="container">
          <div className="showcase-grid reverse">
            <Reveal delay={0.15}>
              <div className="showcase-img-container">
                <img src="/extension_images_hd/history.png" alt="Local capture history panel" />
              </div>
            </Reveal>
            <div className="showcase-content">
              <Reveal>
                <span className="badge badge-accent">Offline Library</span>
                <h2>Manage your library locally</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Every screenshot and reconstructed codebase is preserved locally in your browser's IndexedDB.
                  Quickly search by domain, review prior extraction visual scores, copy pages directly
                  to clipboard, or clean up your catalog.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </SpotlightSection>

      <SpotlightSection className="section showcase-section" color="rgba(204, 120, 50, 0.08)">
        <div className="container">
          <div className="showcase-grid">
            <div className="showcase-content">
              <Reveal>
                <span className="badge badge-accent" style={{ background: "rgba(204, 120, 50, 0.15)", color: "var(--brand-accent)", border: "1px solid rgba(204, 120, 50, 0.3)" }}>
                  Configuration
                </span>
                <h2>Tuned for your development workflow</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Configure dynamic page scroll delays, preferred screenshot file formats (PNG, JPEG, WebP),
                  local archive sizes, and custom API endpoints. Shape the extension behavior to match
                  your product design and styling guidelines.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <div className="showcase-img-container">
                <img src="/extension_images_hd/settings.png" alt="Extension developer configuration screen" />
              </div>
            </Reveal>
          </div>
        </div>
      </SpotlightSection>

      {/* 8. CTA Banner */}
      <SpotlightSection className="section" color="rgba(98, 151, 85, 0.16)">
        <div className="container">
          <Reveal>
            <div className="cta-banner">
              <div className="cta-banner-beam" />
              <span className="badge badge-accent" style={{ marginBottom: 16 }}>
                <Palette size={12} /> Free forever
              </span>
              <h2>Start capturing beyond the screen</h2>
              <p>Install AkovoLabs Snap, open a page, and capture it — or turn it into React code.</p>
              <div className="hero-actions">
                <StoreButton />
                <Button to="/support" variant="ghost">
                  Get help
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </SpotlightSection>
    </>
  );
}
