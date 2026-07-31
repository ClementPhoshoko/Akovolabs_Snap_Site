import SpotlightSection from "../components/SpotlightSection";
import Reveal from "../components/Reveal";

const SECTIONS = [
  {
    title: "1. Information we handle",
    body: (
      <>
        <h3>Data you provide</h3>
        <ul>
          <li>
            <strong>Gemini API key:</strong> if you use the AI-powered Extract Design feature, you
            enter a Google AI Studio API key in Settings. It is stored locally in your browser&apos;s
            extension storage and used only to authenticate requests to Google&apos;s Gemini API.
          </li>
        </ul>

        <h3>Data collected while you use the Extension</h3>
        <ul>
          <li>
            <strong>Page URL and page title</strong> of the tab you choose to capture or extract.
          </li>
          <li>
            <strong>Page content and screenshots:</strong> when you capture a page, the Extension
            reads the page&apos;s DOM, computed styles, fonts, images, layout, and full-page
            screenshots. When you use Extract Design, this design data is sent to Google&apos;s Gemini
            API so the AI can reconstruct the page as a React project.
          </li>
          <li>
            <strong>Capture history metadata:</strong> thumbnails, page titles, URLs, capture dates,
            and download details for entries you keep in the Extension&apos;s History screen.
          </li>
        </ul>

        <h3>Data stored on your device</h3>
        <ul>
          <li>
            Settings, capture history, and extracted design archives are stored locally in your
            browser using <code>chrome.storage</code> and IndexedDB.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "2. How the information is used",
    body: (
      <>
        <ul>
          <li>
            <strong>Capturing and sharing screenshots:</strong> all processing happens on your
            device. Screenshots are generated and saved or downloaded locally, or copied to your
            clipboard, entirely within your browser.
          </li>
          <li>
            <strong>AI design extraction (Extract Design):</strong> only when you explicitly click
            Extract Design, the Extension sends the page&apos;s design data (structure, styles, fonts,
            layout, and screenshots) to Google&apos;s Gemini API to generate a React project. This does
            not happen automatically or in the background.
          </li>
          <li>
            <strong>History:</strong> capture metadata is stored locally so you can find, search,
            download, copy, share, or delete previous captures.
          </li>
        </ul>
        <p>The Extension does <strong>not</strong>:</p>
        <ul>
          <li>collect personal information such as your name or email,</li>
          <li>track your browsing activity outside of the pages you actively capture,</li>
          <li>sell or rent any data,</li>
          <li>serve advertisements, or</li>
          <li>share data with third parties except as described for Gemini.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Sharing with third parties",
    body: (
      <>
        <ul>
          <li>
            <strong>Google / Gemini API:</strong> when you run Extract Design (or test your AI
            connection in Settings), design data from the page you selected is sent to Google&apos;s
            Gemini API. Your use of that service is also governed by Google&apos;s terms and privacy
            policy.
            <ul>
              <li>
                Google Privacy Policy:{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  https://policies.google.com/privacy
                </a>
              </li>
              <li>
                Google AI terms and data policies:{" "}
                <a href="https://ai.google.dev/gemini-api/terms" target="_blank" rel="noopener noreferrer">
                  https://ai.google.dev/gemini-api/terms
                </a>
              </li>
            </ul>
          </li>
          <li>We do not otherwise share your data.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Data retention and deletion",
    body: (
      <>
        <ul>
          <li>Settings and history are kept only on your device, for as long as you choose to keep them.</li>
          <li>You can delete individual history entries (including stored design archives) at any time from the History screen.</li>
          <li>You can remove your API key by clearing the AI Configuration field in Settings and saving.</li>
          <li>
            To erase all Extension data, remove the Extension from your browser, or clear the site
            data for the Extension from <code>chrome://extensions</code>. Removing the Extension
            deletes all locally stored settings, history, and archives.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Security",
    body: (
      <>
        <ul>
          <li>All communication with Google&apos;s Gemini API is over HTTPS.</li>
          <li>Your API key and history never leave your device except as needed to authenticate Gemini requests.</li>
          <li>
            The Extension uses the minimal permissions required to function and requests access to
            the Gemini API host only when you first use the AI feature.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Children's privacy",
    body: (
      <>
        <p>
          The Extension is not directed to children and does not knowingly collect personal
          information from children.
        </p>
      </>
    ),
  },
  {
    title: "7. Changes to this policy",
    body: (
      <>
        <p>
          We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top of
          this page reflects the most recent version. Material changes will be noted on the store
          listing page.
        </p>
      </>
    ),
  },
  {
    title: "8. Contact",
    body: (
      <>
        <p>For questions about this policy or the Extension, contact:</p>
        <p>
          <strong>Clement Phoshoko</strong>
          <br />
          <a href="mailto:clement.phoshoko@outlook.com">clement.phoshoko@outlook.com</a>
        </p>
      </>
    ),
  },
];

export default function Privacy() {
  return (
    <SpotlightSection className="section" color="rgba(98, 151, 85, 0.1)" style={{ paddingTop: 0, paddingBottom: 0 }}>
      <div className="container">
        <div className="legal">
          <Reveal>
            <h1>Privacy Policy for AkovoLabs Snap</h1>
            <p className="last-updated">Last updated: July 2026</p>

            <p>
              AkovoLabs Snap (&ldquo;the Extension&rdquo;) is a browser extension that captures web pages as
              full-page screenshots and, on your request, analyzes a page&apos;s design and generates a
              downloadable React project using an AI service.
            </p>
            <p>
              This policy explains what information the Extension handles, how it is used, and the
              choices you have. By installing and using the Extension, you agree to the practices
              described here.
            </p>
          </Reveal>

          {SECTIONS.map((section) => (
            <Reveal key={section.title}>
              <section>
                <h2>{section.title}</h2>
                {section.body}
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </SpotlightSection>
  );
}
