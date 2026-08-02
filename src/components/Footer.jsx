import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <img src="/logo.png" alt="AkovoLabs Snap logo" className="brand-logo" draggable={false} />
              <span>
                AkovoLabs <span className="brand-accent">Snap</span>
              </span>
            </Link>
            <p>
              Capture beyond the screen. Full-page screenshots and AI design extraction for Chrome and Edge.
            </p>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <Link to="/docs">Documentation</Link>
            <Link to="/support">Support</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <Link to="/docs#extract-design">Extract Design (AI)</Link>
            <Link to="/docs#settings">Settings</Link>
            <Link to="/docs#history">History</Link>
            <Link to="/docs#privacy">Permissions</Link>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:support@akovolabs.co.za">
              <Mail size={14} style={{ display: "inline", verticalAlign: "-2px", marginRight: 6 }} />
              support@akovolabs.co.za
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} AkovoLabs. All rights reserved.</span>
          <span className="footer-built">
            Built for Google Chrome &amp; Microsoft Edge
            <span className="footer-version">v1.2.0</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
