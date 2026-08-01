import { motion, useReducedMotion } from "framer-motion";

const VARIANTS = {
  up: { x: 0, y: 28, scale: 1 },
  down: { x: 0, y: -28, scale: 1 },
  left: { x: -44, y: 0, scale: 1 },
  right: { x: 44, y: 0, scale: 1 },
  zoom: { x: 0, y: 0, scale: 0.9 },
};

export default function Reveal({ children, delay = 0, direction = "up", className = "", as = "div", ...props }) {
  const Component = motion[as];
  const reduce = useReducedMotion();
  const base = VARIANTS[direction] ?? VARIANTS.up;
  const hidden = reduce ? { opacity: 0 } : { opacity: 0, ...base };
  return (
    <Component
      className={className}
      initial={hidden}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Component>
  );
}
