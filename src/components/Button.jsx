import { Link } from "react-router-dom";
import { Download } from "lucide-react";

const STORE_URL = "https://chromewebstore.google.com/detail/akovolabs-snap";

export default function Button({ children, to, href, variant = "primary", icon: Icon, className = "", ...props }) {
  const classes = `btn btn-${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {Icon ? <Icon /> : null}
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {Icon ? <Icon /> : null}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {Icon ? <Icon /> : null}
      {children}
    </button>
  );
}

export function StoreButton({ compact = false, ...props }) {
  return (
    <Button
      href={STORE_URL}
      icon={Download}
      {...props}
    >
      Add to Chrome
    </Button>
  );
}
