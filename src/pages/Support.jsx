import { Mail, Plus, MessageSquare, Camera, Sparkles, History } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import SpotlightSection from "../components/SpotlightSection";
import Reveal from "../components/Reveal";

const FAQS = [
  {
    icon: Camera,
    question: "Why does my full-page screenshot cut off mid-page?",
    answer:
      "Extremely tall or high-resolution pages can exceed safe browser canvas limits. Snap stops with an error instead of producing a corrupted image. For the most predictable result, wait for the page to finish loading before capturing, and try again with a lower quality setting.",
  },
  {
    icon: Camera,
    question: "Some pages cannot be captured as full pages. Why?",
    answer:
      "Browser-internal pages (like chrome://extensions), PDF viewers, and pages that block script injection cannot be captured as full pages. Open a regular http(s) webpage and try again.",
  },
  {
    icon: Sparkles,
    question: "Extract Design says my Gemini API key is not working. What should I do?",
    answer:
      "Check that you pasted the key in Settings → AI Configuration and that billing is enabled for the API key. Snap uses a curated set of active Gemini models and falls back automatically — a message about unavailable models usually means the key has billing restrictions. Create a fresh key at aistudio.google.com/apikey.",
  },
  {
    icon: Sparkles,
    question: "Why does Extract Design keep some long text as skeleton placeholders?",
    answer:
      "Snap transcribes short UI text — headings, buttons, links, and labels — exactly. Long body copy becomes a skeleton placeholder that matches the original block height. This keeps extraction fast and cheap without losing the visual design.",
  },
  {
    icon: History,
    question: "Where are my captures and extracted projects stored?",
    answer:
      "Everything is stored locally on your device using chrome.storage and IndexedDB. You can re-download any extracted project from the History screen at any time. Removing the extension erases all of it.",
  },
  {
    icon: History,
    question: "How do I delete my capture history?",
    answer:
      "Open the History screen and delete individual entries (including stored design archives) any time. To erase everything, remove the extension from chrome://extensions.",
  },
  {
    icon: Sparkles,
    question: "Does Snap send my browsing data anywhere?",
    answer:
      "No. Capture processing happens entirely in your browser. The only time data leaves your device is when you explicitly click Extract Design — then the selected page's design data is sent to Google's Gemini API to generate the project. See the Privacy Policy for details.",
  },
];

export default function Support() {
  return (
    <SpotlightSection className="section" color="rgba(74, 139, 207, 0.12)">
      <div className="container">
        <Reveal>
          <SectionHeader
            as="h1"
            kicker="Support"
            title="How can we help?"
            subtitle="Browse the answers below, or reach out directly — we are happy to help."
          />
        </Reveal>

        <div className="faq">
          {FAQS.map((faq, index) => (
            <Reveal key={faq.question} delay={(index % 3) * 0.08}>
              <div className="card faq-item">
                <details>
                  <summary>
                    <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <faq.icon size={18} style={{ color: "var(--text-accent)" }} />
                      {faq.question}
                    </span>
                    <Plus />
                  </summary>
                  <div className="faq-answer">{faq.answer}</div>
                </details>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="card contact-card">
            <span className="feature-icon" style={{ margin: "0 auto 16px" }}>
              <MessageSquare />
            </span>
            <h3>Still stuck?</h3>
            <p>
              Send us an email with a description of the issue and your browser version. Include a
              screenshot if you can — Snap makes that easy.
            </p>
            <a href="mailto:clement.phoshoko@outlook.com" className="btn btn-primary">
              <Mail size={18} />
              clement.phoshoko@outlook.com
            </a>
          </div>
        </Reveal>
      </div>
    </SpotlightSection>
  );
}
