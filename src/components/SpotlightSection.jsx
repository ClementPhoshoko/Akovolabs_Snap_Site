import { useRef } from "react";

export default function SpotlightSection({ children, className = "", color = "rgba(74, 139, 207, 0.14)", ...props }) {
  const ref = useRef(null);

  const onMouseMove = (event) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <section
      ref={ref}
      className={`spotlight-section ${className}`}
      onMouseMove={onMouseMove}
      style={{ "--spot-color": color }}
      {...props}
    >
      {children}
    </section>
  );
}
