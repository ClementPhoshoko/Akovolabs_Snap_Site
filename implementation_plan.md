# Redesign AkovoLabs Snap Site — Cursor-Inspired Premium Typography & Layout

Transform the marketing site from its current dark-theme extension-popup-focused design into a premium, high-standard product website with bold typography, generous whitespace, and full-width HD image showcases — inspired by Cursor's design philosophy but maintaining the existing design token system and brand identity.

## Design Philosophy (Cursor-Inspired, Not AI-Looking)

The key principles from Cursor's website that we'll apply:

1. **Massive, confident typography** — Hero headings at `clamp(3.5rem, 7vw, 5.5rem)`, section headings at `clamp(2.2rem, 5vw, 3.5rem)`. Text that commands the page.
2. **Generous whitespace** — Sections breathe with `clamp(120px, 14vw, 220px)` padding. No cramming.
3. **Left-aligned hero** (optional) or centered — but with dramatically larger text than current.
4. **Full-width image showcases** — The HD images you have are phenomenal. They deserve full-width display, not small thumbnails.
5. **Subtle, intentional animations** — Not flashy. Smooth, earned reveals.
6. **Readable body text** — 18-20px body, 1.6-1.7 line-height, secondary text at comfortable opacity.

## User Review Required

> [!IMPORTANT]
> **HD Images as Hero Showcases**: Your HD images (`home.png`, `processing.png`, `download.png`, `history.png`, `settings.png`) are beautifully composed with their own headlines and illustrations on the left side, plus the extension popup on the right. I plan to use these as **full-width hero-style showcase sections** where each image gets its own dedicated screen-sized section — similar to how Apple or Cursor showcase product features in full-bleed sections. This replaces the current small screenshot grid.

> [!IMPORTANT]
> **Dark theme stays**: Your brand is dark-themed (IntelliJ Darcula). I'll keep the dark background but dramatically improve typography scale, spacing, and image presentation. The HD images are light-themed, which creates a beautiful contrast when displayed on the dark site.

## Open Questions

> [!NOTE]
> **Hero Layout**: Cursor uses left-aligned hero text. Your current site is center-aligned. I'll keep center-aligned for the hero since it fits an extension/product landing better, but I'll make the text dramatically larger and more impactful. Let me know if you prefer left-aligned.

## Proposed Changes

### Typography & Design Token Overhaul

#### [MODIFY] [design-tokens.css](file:///c:/Users/User/Desktop/Dev/Akovolabs_Snap_Site/src/styles/design-tokens.css)
- No changes needed — extension tokens stay frozen as they are.

#### [MODIFY] [global.css](file:///c:/Users/User/Desktop/Dev/Akovolabs_Snap_Site/src/styles/global.css)
Major typography and layout upgrades:

- **Site-level font size overrides**:
  - `--font-size-md`: `16px` → `18px` (body text needs to be bigger and more readable)
  - `--font-size-lg`: `18px` → `20px`
  - `--font-size-xl`: `22px` → `26px`
  - `--font-size-2xl`: `28px` → `36px`
  - Add `--font-size-3xl: 48px` and `--font-size-hero: clamp(3.5rem, 7vw, 5.5rem)`

- **Hero section CSS**:
  - `h1` size: current `clamp(2.75rem, 6.5vw, 4.5rem)` → `clamp(3.5rem, 7.5vw, 5.5rem)`
  - Hero sub text: `18px` → `clamp(1.125rem, 2vw, 1.375rem)` with better line-height
  - More vertical padding: `clamp(96px, 10vw, 148px)` → `clamp(120px, 14vw, 200px)`
  - Wider hero inner: `860px` → `1000px`

- **Section spacing**:
  - Section padding: `clamp(88px, 10vw, 160px)` → `clamp(120px, 14vw, 220px)`
  - Wider container: `1160px` → `1240px`

- **Section headers**: 
  - `h2` size: `clamp(1.9rem, 4vw, 2.75rem)` → `clamp(2.2rem, 5vw, 3.5rem)`
  - Subtitle text: `18px` → `20px` with better max-width

- **Feature cards**: Larger titles, bigger icon containers, more padding
- **Stats section**: Bigger stat values, more impactful
- **New full-width image showcase** section: Large borderless images with soft shadow + subtle parallax hint
- **CTA banner**: Bigger text, more breathing room
- **Buttons**: Slightly larger default size for more presence

---

### Home Page — Content & Layout Restructure

#### [MODIFY] [Home.jsx](file:///c:/Users/User/Desktop/Dev/Akovolabs_Snap_Site/src/pages/Home.jsx)

**Hero Section Enhancement**:
- Keep same structure but update copy for more impact
- Badge stays, headline gets more weight
- Hero sub-text: slightly larger, more readable
- Hero image frame removed — replaced with a direct, full-width HD image showcase below

**HD Image Feature Sections** (replaces old showcase grid):
- 5 new full-bleed image sections using the HD images from `/extension_images_hd/`
- Each image is displayed in a large rounded container with subtle shadow
- Uses the existing `SpotlightSection` component for mouse-follow spotlight effect
- Images alternate layout (image left/right) for visual rhythm
- Each section has a short heading + description that complements (not duplicates) the text already in the HD image
- The HD images already have their own bold headlines ("One-click full-page screenshots", "AI design extraction in progress", etc.) so the section text will be contextual/supporting copy

**Reorganized page flow**:
1. **Hero** — Big headline, badge, CTAs
2. **Stats strip** — Social proof numbers
3. **HD Showcase: Home** — Full-width HD image showing the main extension popup
4. **Features grid** — 6 feature cards (kept, but styled bigger)
5. **HD Showcase: Processing + Download** — AI extraction pipeline showcase
6. **How it works** — 4 step cards (kept, styled bigger)
7. **HD Showcase: History + Settings** — Remaining features
8. **CTA banner** — Final call to action

**Remove**: 
- Old browser frame mockup in hero (replaced by HD images)
- Old small screenshot showcase grid
- Marquee (feels generic — removes the "AI-generated" feeling you mentioned)

---

### Component Updates

#### [MODIFY] [SectionHeader.jsx](file:///c:/Users/User/Desktop/Dev/Akovolabs_Snap_Site/src/components/SectionHeader.jsx)
- No structural changes needed — CSS handles sizing

#### [MODIFY] [FeatureCard.jsx](file:///c:/Users/User/Desktop/Dev/Akovolabs_Snap_Site/src/components/FeatureCard.jsx)
- No structural changes needed — CSS handles sizing

#### [MODIFY] [Navbar.jsx](file:///c:/Users/User/Desktop/Dev/Akovolabs_Snap_Site/src/components/Navbar.jsx)
- No structural changes needed

#### [MODIFY] [Footer.jsx](file:///c:/Users/User/Desktop/Dev/Akovolabs_Snap_Site/src/components/Footer.jsx)
- No structural changes needed — CSS handles sizing

---

### Summary of Key Visual Differences

| Aspect | Current | Proposed |
|--------|---------|----------|
| Hero heading | `clamp(2.75rem, 6.5vw, 4.5rem)` | `clamp(3.5rem, 7.5vw, 5.5rem)` |
| Section headings | `clamp(1.9rem, 4vw, 2.75rem)` | `clamp(2.2rem, 5vw, 3.5rem)` |
| Body text | 16px | 18px |
| Section padding | `clamp(88px, 10vw, 160px)` | `clamp(120px, 14vw, 220px)` |
| Container width | 1160px | 1240px |
| Image presentation | Small thumbnails in grid | Full-width HD showcase sections |
| Browser frame mockup | In hero | Removed (HD images are the showcase) |
| Marquee | Present | Removed (feels AI-generated) |
| Feature card padding | 24px | 32px |
| Stat values | `clamp(2.1rem, 4.5vw, 3rem)` | `clamp(2.5rem, 5vw, 3.8rem)` |

## Verification Plan

### Manual Verification
- Run `npm run dev` and visually inspect every section of the homepage
- Verify typography hierarchy looks intentional and premium (not generic)
- Check all 5 HD images display correctly at full width
- Test responsive behavior at 640px, 900px, and 1440px breakpoints
- Verify all existing page routes (Docs, Privacy, Support) still work
- Confirm the site feels handcrafted, not AI-generated
