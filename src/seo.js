// Production domain — replace with the real deployed domain before launch.
export const SITE_URL = "https://snap.akovolabs.co.za";

export const DEFAULT_IMAGE = "/extension_images_hd/home.webp";

export const ROUTE_META = {
  "/": {
    title: "AkovoLabs Snap — Capture beyond the screen",
    description:
      "Capture full-page screenshots and extract any webpage into a ready-to-run React project with AI. A fast, privacy-first Chrome extension.",
  },
  "/docs": {
    title: "Documentation — AkovoLabs Snap",
    description:
      "Guides for full-page screenshots, Extract Design (AI), settings, history, permissions, and limits.",
  },
  "/privacy": {
    title: "Privacy Policy — AkovoLabs Snap",
    description:
      "How AkovoLabs Snap handles data: everything stays on-device, and Gemini AI only when you explicitly opt in.",
  },
  "/support": {
    title: "Support & FAQ — AkovoLabs Snap",
    description:
      "Answers for capture issues, AI extraction, history, and privacy. Contact us if you are still stuck.",
  },
  "*": {
    title: "Page not found — AkovoLabs Snap",
    description:
      "That page does not exist. Head back home, or browse the docs, support, and privacy pages.",
  },
};
