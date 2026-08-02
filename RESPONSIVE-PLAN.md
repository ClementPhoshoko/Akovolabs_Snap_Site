# AkovoLabs Snap — Responsive Design Plan

Status: implemented (Phases A–D complete)

> Open decisions resolved: light-theme toggle shipped (persisted to localStorage with FOUC guard); hero scroll-cue shipped.

---

## 1. What the site already does well (keep)

- Fluid type with `clamp()` (`global.css:157-162`) — correct, vw-driven.
- `100svh` hero + showcase sections (`global.css:727`, `1173`) — avoids iOS URL-bar jump.
- Aspect-ratio-locked images (`global.css:1226`) — zero CLS, no layout shift on load.
- Lazy images, WebP, `draggable={false}` — good perf/a11y hygiene.
- Reduced-motion guard + custom cursor disabled on coarse pointers (`Cursor.jsx:9-11`).

## 2. Weaknesses found

| # | Problem | Location |
|---|---------|----------|
| 1 | Only 2 breakpoints (900px, 640px). No handling for ~700px tablets landscape, ~1024px, or XL screens (>1440px). | `global.css:2067-2171` |
| 2 | No `<1024px` check on the navbar. At 641–900px, 4 links + CTA sit beside a hidden hamburger — cramped at ~700px. | `Navbar.jsx:47-57`, `global.css:2149-2160` |
| 3 | Mobile menu has no animation, no scroll-lock, no Escape/outside-close. | `Navbar.jsx:60-72` |
| 4 | Touch targets too small — buttons are 40px tall (`--btn-height-md`), below the 44px mobile comfort floor. | `design-tokens.css:95` |
| 5 | Light theme is fully tokenized but dead — `data-theme="dark"` hard-coded in `index.html:2`; no toggle. | `design-tokens.css:207+` |
| 6 | Showcase sections at `100svh` on mobile create ~5 full-height scrolls on phones; sparse content reads as dead air. | `global.css:1173` |
| 7 | No print styles — Docs/Privacy pages print badly (dark bg, glass cards). | `global.css` (missing) |
| 8 | No explicit touch handling — `:focus-visible` is desktop-focused; mobile Safari needs `:active`/tap-highlight handling. | `global.css:182-185` |
| 9 | Hero CTAs on very small screens (<360px) may overflow because buttons don't shrink. | `global.css:2162-2164` |

## 3. Breakpoint strategy

Replace the 2 old breakpoints with **fluid-first + 4 breakpoints**:

```
Base (mobile-first)  → everything fluid with clamp()
≥640px               → single-column grids tighten, 2-col feature grid
≥900px               → sidebar layout, 3-col features, nav links shown
≥1200px              → current desktop treatment (container hits 1240px)
≥1600px              → widen container to ~1440px, scale hero type up
```

Plus a `@media (hover: none)` block for touch behavior:
- larger touch targets,
- no hover-lift on cards,
- `-webkit-tap-highlight-color: transparent`,
- `:active` feedback.

## 4. Component treatment

- **Navbar** — show hamburger from `≤900px` (not 640px); `AnimatePresence` slide-down; body scroll-lock; close on `Escape` / route change / backdrop tap. Add a compact icon-only `StoreButton` variant under 480px.
- **Hero** — keep `100svh`; add a subtle scroll-cue arrow at the fold.
- **Showcase sections** — on `≤900px` drop `min-height:100svh` (already does) and limit image width (`max-width: 520px`, centered) so it doesn't dominate; tighter gap on mobile, content-before-image.
- **Features** — `3→2→1` is fine; keep equal-height stretch; cap text width.
- **Steps** — `4→2→1` fine; on mobile make the step number a chip instead of top-right absolute so titles don't collide (`step::before` at `global.css:1053`).
- **Docs** — sidebar becomes horizontal chip-scroll at `≤900px` (already); keep `scroll-margin`; ensure `pre` blocks don't clip at 360px.
- **Footer** — `4→2→1` fine; bump mobile link padding for touch.
- **Print** — add `@media print`: light background, hide navbar/CTA/animations, black text.
- **Theme** — optional phase: `ThemeToggle` reading `localStorage`, toggling `data-theme`, plus an inline `<script>` in `index.html` to prevent FOUC. Turns the existing light tokens into a live feature.

## 5. Implementation order

1. **Phase A — Breakpoints & containers** (fixes #1, #6, #9): add ≥640/≥1600 rules, tighten mobile showcase + hero CTA.
2. **Phase B — Navbar UX** (fixes #2, #3): hamburger at ≤900px, scroll-lock, Escape, animation.
3. **Phase C — Touch system** (fixes #4, #8): 44px targets, `hover:none` block, tap-highlight, `:active` feedback.
4. **Phase D — Polish** (fixes #7, #5): print styles, scroll-cue, light-theme toggle (optional), Docs mobile nav.

---

Open decisions:
- Include the **light-theme toggle** or keep the site dark-only?
- Add the hero **scroll-cue** or not?
