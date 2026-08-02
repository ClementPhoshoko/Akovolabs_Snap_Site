import { Link } from "react-router-dom";
import { Download } from "lucide-react";

const STORE_URL = "https://chromewebstore.google.com/detail/akovolabs-snap";

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  size,
  icon: Icon,
  iconAfter = false,
  className = "",
  ...props
}) {
  const classes = [
    "btn",
    `btn-${variant}`,
    size ? `btn-${size}` : "",
    iconAfter ? "btn-icon-after" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {Icon && !iconAfter ? <Icon aria-hidden="true" /> : null}
      {children}
      {Icon && iconAfter ? <Icon aria-hidden="true" /> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {inner}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {inner}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {inner}
    </button>
  );
}

export function StoreButton({ size = "lg", compact = false, ...props }) {
  return (
    <Button
      href={STORE_URL}
      icon={Download}
      size={size}
      className={compact ? "btn-compact" : ""}
      {...props}
    >
      <span className="btn-label">Add to Chrome</span>
    </Button>
  );
}
