---
name: Aura Precision Light
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#838484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system embodies a luxury minimalist aesthetic, pivoting from a dark-themed atmosphere to a bright, airy, and hyper-clean environment. The brand personality is precise, exclusive, and effortless. It targets high-end professionals and connoisseurs who value clarity and understated elegance.

The design style is **Minimalism** infused with **Corporate Modern** refinements. It prioritizes expansive white space, razor-sharp typography, and a "less is more" philosophy. By removing heavy visual effects, the UI relies on structural integrity and the interplay between crisp white surfaces and refined accent colors to guide the user. The emotional response should be one of calm, confidence, and absolute precision.

## Colors

The palette is built on a foundation of "High-Contrast Light." Surfaces utilize absolute white (#FFFFFF) to provide a canvas of pure clarity. Secondary containers and background sections use a soft off-white (#F9F9F9) to create subtle structural differentiation without introducing visual noise.

Typography and primary iconography are anchored in a deep Slate Grey (#1A1A1A), ensuring AA/AAA accessibility and a grounded, authoritative feel. The signature Gold (#D4AF37) is reserved strictly for high-priority calls to action, active states, and decorative accents, providing a warm, luxurious glow against the cool, clean backdrop.

### Gold usage (as implemented)

The signature Gold resolves to the token `secondary-container` (#D4AF37, identical in light and dark themes). Two rules govern it:

- **Text and icon accents:** use `text-secondary` (#735C00 in light, #FED65B in dark). Never set #D4AF37 as running text on light surfaces — it fails contrast.
- **Backgrounds and badges:** use `bg-secondary-container` with text always `#1a1c1c` (AA in both themes).

## Typography

This design system utilizes a dual-font strategy to balance character with utility. **Hanken Grotesk** is used for headlines and labels; its sharp, contemporary geometry reinforces the "Precision" aspect of the brand. For labels, an uppercase treatment with slight tracking is applied to evoke a premium, architectural feel.

**Inter** is employed for all body copy and functional text. Its neutral, systematic nature ensures maximum readability at smaller sizes. Type scale is generous, with significant line heights to promote a relaxed reading pace. All text is set in the primary Slate Grey (#1A1A1A) to ensure it pops against the white surfaces.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop, centered on a 1280px max-width container to maintain focus. A 12-column system is used with generous 24px gutters. The spacing rhythm is aggressive in its use of whitespace, particularly in vertical section gaps (120px+), to allow the content to "breathe" and signal luxury.

- **Mobile:** 4-column grid, 16px side margins.
- **Tablet:** 8-column grid, 32px side margins.
- **Desktop:** 12-column grid, 64px side margins or auto-centered.

Component internal padding should favor "Large" variants (e.g., 16px/24px) to avoid a cramped, utilitarian appearance.

## Elevation & Depth

Depth is achieved through **Tonal Layers** and **Ambient Shadows** rather than transparency or blur. Surfaces are primarily flat, with elevation indicated by a shift from #FFFFFF (top layer) to #F9F9F9 (underlying canvas).

Where physical separation is required (e.g., floating cards or dropdowns), use "Air" shadows:
- **Shadow-SM:** 0px 2px 4px rgba(0, 0, 0, 0.04)
- **Shadow-MD:** 0px 12px 24px rgba(0, 0, 0, 0.06)
- **Shadow-LG:** 0px 24px 48px rgba(0, 0, 0, 0.08)

Shadows should be neutral, never tinted, and extremely diffused to maintain the "clean" feel. Avoid heavy borders; instead, use 1px strokes in a very light grey (#EEEEEE) for UI boundaries that require definition.

## Shapes

The shape language is **Soft** and intentional. A base radius of 4px (0.25rem) is used for standard components like buttons and input fields, providing a disciplined, professional look. Larger containers like cards use an 8px (0.5rem) radius to soften the overall composition.

Sharp corners (0px) should be avoided to prevent the UI from feeling too "Brutalist," while overly rounded or pill-shapes should be avoided to maintain the sophisticated, high-precision aesthetic. The goal is a subtle "tailored" appearance.

## Motion

Scroll-reveal is intentionally **static**: every `.reveal-up` element ships with the `active` class, so content is always visible even if JS fails. The hidden state and its long transition are scoped to `.reveal-up:not(.active)` in `app.css`, letting Tailwind hover transitions govern visible elements deterministically. Planta hotspot pulses are staggered via `animation-delay` (200ms steps; no ping). All motion honors `prefers-reduced-motion`.

## Components

### Buttons
- **Primary:** Gold (#D4AF37) background with #FFFFFF text. No shadow, flat or very subtle gradient.
- **Secondary:** White (#FFFFFF) background with #1A1A1A border (1px) and text.
- **Ghost:** No background, #1A1A1A text, Gold icon accent on hover.

### Input Fields
- White background with a 1px #EEEEEE border. 
- Focus state: Border changes to #D4AF37 with a soft gold outer glow.
- Labels are always Hanken Grotesk, 12px, Uppercase.

### Cards
- White background with a "Shadow-MD" elevation.
- 8px corner radius.
- Internal padding of 32px to emphasize the minimalist whitespace.

### Section Headers (eyebrow)
Every section header follows a single editorial pattern, always left-aligned: gold kicker (`font-label-md text-label-md uppercase tracking-widest text-secondary`) → H2 benefit headline → factual subtitle (`font-body-lg text-on-surface-variant`, max-w-3xl).

### Stat Badges
Proof points (e.g. "+57,4%") use `bg-secondary-container` with #1a1c1c text and DEFAULT radius. At most one gold badge per card — it must never compete with the price display.

### Chips & Tags
- Soft grey (#F9F9F9) background with #1A1A1A text. 
- Rectangular with 4px radius (matches buttons).

### Lists
- Separated by thin 1px #F1F1F1 dividers. 
- Ample vertical padding (16px - 20px) per item.

### Icons
- Use thin-stroke (Light or Regular weight) icons in #1A1A1A. 
- Interactive icons can transition to #D4AF37 on hover.