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

const STATS = [
  { value: 1, suffix: "", label: "Click to capture" },
  { value: 16, suffix: "", label: "Pipeline stages" },
  { value: 100, suffix: "%", label: "On-device" },
  { value: 0, suffix: "", label: "Tracking, ever" },
];

const SHOWCASE = [
  {
    src: "/screenshots/home.png",
    title: "Home",
    caption: "One-click full-page screenshots",
  },
  {
    src: "/screenshots/processing.png",
    title: "Extract Design",
    caption: "AI design extraction in progress",
  },
  {
    src: "/screenshots/download.png",
    title: "Extract Design Complete",
    caption: "Your page, rebuilt as code",
  },
  {
    src: "/screenshots/history.png",
    title: "History",
    caption: "Everything, in one place",
  },
  {
    src: "/screenshots/settings.png",
    title: "Settings",
    caption: "Tuned your way",
  },
];

const MARQUEE_ITEMS = [
  "PNG",
  "JPEG",
  "WebP",
  "React",
  "Vite",
  "Plain CSS",
  "Gemini AI",
  "JSZip",
  "IndexedDB",
  "Chrome MV3",
  "Framer Motion",
  "Lucide Icons",
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
      <SpotlightSection className="hero">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <motion.div className="container hero-inner" variants={heroContainer} initial="hidden" animate="show">
          <motion.div variants={heroItem}>
            <span className="badge badge-accent">v1.2.0 · Chrome &amp; Edge</span>
          </motion.div>
          <motion.h1 variants={heroItem}>
            Capture <span className="gradient-text">beyond</span> the screen.
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

          <motion.div variants={heroItem}>
            <div className="frame">
              <div className="frame-bar">
                <div className="frame-dots">
                  <span className="frame-dot" style={{ background: "#cc7832" }} />
                  <span className="frame-dot" style={{ background: "#dbb754" }} />
                  <span className="frame-dot" style={{ background: "#629755" }} />
                </div>
                <div className="frame-url">https://example.com — full-page capture</div>
              </div>
              <div className="frame-body">
                <img src="/screenshots/home.png" alt="AkovoLabs Snap popup home screen" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </SpotlightSection>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="card stats-grid">
              {STATS.map((stat) => (
                <div className="stat" key={stat.label}>
                  <span className="stat-value">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <span key={copy}>
              {MARQUEE_ITEMS.map((item) => (
                <em key={`${copy}-${item}`} style={{ fontStyle: "normal" }}>
                  {item}
                </em>
              ))}
            </span>
          ))}
        </div>
      </section>

      <SpotlightSection className="section" color="rgba(98, 151, 85, 0.10)">
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

      <SpotlightSection className="section">
        <div className="container">
          <div className="split">
            <div className="split-media">
              <Reveal>
                <div className="frame">
                  <div className="frame-bar">
                    <div className="frame-url">Extract Design — pipeline running</div>
                  </div>
                  <img src="/screenshots/processing.png" alt="Extract Design pipeline in progress" />
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="frame">
                  <div className="frame-bar">
                    <div className="frame-url">Extract Design — complete</div>
                  </div>
                  <img src="/screenshots/download.png" alt="Extract Design completion screen" />
                </div>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <span className="badge badge-accent" style={{ marginBottom: 16, display: "inline-flex" }}>
                  <Sparkles size={12} /> Extract Design
                </span>
                <h2 style={{ marginBottom: 16 }}>Any webpage, rebuilt as React code</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  See a design you love? Snap analyzes its structure and design system, then Gemini
                  reconstructs it as a Vite + React project you can download, open, and edit.
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
                  <Button to="/docs#extract-design" variant="secondary" icon={ArrowRight}>
                    Learn how it works
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </SpotlightSection>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              kicker="Screenshots"
              title="A quick look"
              subtitle="A modern glassmorphism interface in a dark theme, built for speed."
            />
          </Reveal>
          <div className="showcase">
            {SHOWCASE.map((item, index) => (
              <Reveal key={item.title} delay={(index % 2) * 0.12}>
                <div className="card showcase-item">
                  <img src={item.src} alt={`${item.title} screenshot`} loading="lazy" />
                  <div className="showcase-caption">
                    <strong>{item.title}</strong>
                    <span>{item.caption}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SpotlightSection className="section" color="rgba(98, 151, 85, 0.16)">
        <div className="container">
          <Reveal>
            <div className="cta-banner">
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
