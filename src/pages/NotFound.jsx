import { Link } from "react-router-dom";
import { Bug } from "lucide-react";
import SpotlightSection from "../components/SpotlightSection";
import Reveal from "../components/Reveal";

function Action({ to, children }) {
  return (
    <Link to={to} className="nf-action">
      <code>
        <span className="nf-tag">&lt;</span>
        {children}
        <span className="nf-tag"> /&gt;</span>
      </code>
    </Link>
  );
}

export default function NotFound() {
  return (
    <SpotlightSection className="section nf">
      <div className="container">
        <div className="nf-inner">
          <Reveal>
            <span className="badge badge-accent nf-badge">
              <Bug size={12} /> <code>&lt;Error status={"{404}"} /&gt;</code>
            </span>
            <div className="nf-image">
              <img
                src="/Panicked_Robot_v2.webp"
                alt="A panicked robot at the computer, lost on a 404 page"
                width="558"
                height="447"
                draggable={false}
                fetchPriority="high"
              />
            </div>
            <h1>404 — page not found</h1>
            <p className="nf-advisory">
              Even the robot is panicking, that page doesn&apos;t exist. Deep breath.
              Try one of the routes below; they actually compile.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="nf-actions">
              <Action to="/">Home</Action>
              <Action to="/support">Support</Action>
              <Action to="/docs">Docs</Action>
              <Action to="/privacy">Privacy</Action>
            </div>
          </Reveal>
        </div>
      </div>
    </SpotlightSection>
  );
}
