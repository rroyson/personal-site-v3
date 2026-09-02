---
name: Rob Royson
description: Spotlight. The two-column developer portfolio canon with real finish, near-black ground, one amber accent, a sticky statement column, and a sparse constellation that warms near the pointer.
colors:
  ground: "#0d1117"
  well: "#131a24"
  ink: "#e6edf3"
  body: "#a3adba"
  mute: "#7b8794"
  amber: "#f0b64a"
  amber-bright: "#ffc85e"
  line: "rgba(255, 255, 255, 0.08)"
  line-strong: "rgba(255, 255, 255, 0.16)"
  lift: "rgba(255, 255, 255, 0.035)"
  amber-tint: "rgba(240, 182, 74, 0.1)"
  backend: "#7fb2ff"
  backend-tint: "rgba(127, 178, 255, 0.12)"
  ai: "#b9a0ff"
  ai-tint: "rgba(185, 160, 255, 0.12)"
typography:
  name:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "2.875rem" # 2.5rem below 768px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
  role:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.75
  title:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1.5
  body:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "1rem" # 15px for stream and project descriptions
    fontWeight: 400
    lineHeight: 1.625
  small:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.16em"
    textTransform: uppercase
  pill:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.2
rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  full: "9999px"
spacing:
  2xs: "8px"
  xs: "12px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  section: "96px"
motion:
  ease-out: "cubic-bezier(0.23, 1, 0.32, 1)"
  fill: "160ms"
  lift: "200ms"
  rule: "250ms"
components:
  button:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ground}"
    rounded: "{rounded.sm}"
    padding: "12px 18px"
  button-hover:
    backgroundColor: "{colors.amber-bright}"
  field:
    backgroundColor: "rgba(255, 255, 255, 0.04)"
    borderColor: "{colors.line}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
  field-focus:
    borderColor: "{colors.amber}"
  pill:
    backgroundColor: "{colors.line}"
    textColor: "{colors.body}"
    rounded: "{rounded.full}"
    padding: "5px 11px"
  pill-backend:
    backgroundColor: "{colors.backend-tint}"
    textColor: "{colors.backend}"
  pill-web:
    backgroundColor: "{colors.amber-tint}"
    textColor: "{colors.amber}"
  pill-ai:
    backgroundColor: "{colors.ai-tint}"
    textColor: "{colors.ai}"
  row:
    rounded: "{rounded.md}"
    padding: "18px 16px"
  row-hover:
    backgroundColor: "{colors.lift}"
    borderColor: "{colors.line}"
  thumb:
    borderColor: "{colors.line}"
    rounded: "{rounded.xs}"
  navlink:
    textColor: "{colors.mute}"
  navlink-active:
    textColor: "{colors.ink}"
---

# Design System: Rob Royson

## Overview

**Creative North Star: "Spotlight"**

The site is the two-column developer portfolio recruiters already trust, built to the level of the best in its category. A sticky statement column on the left (photo, name, role, one line, section nav, socials) faces a scrolling proof column on the right (About, Streams, Projects, Contact). It refuses metaphor: no theme, no costume, no display face. What makes it Rob's is real proof where the category usually puts decoration (captures of the actual sites, a real photo, plain-text inventories) and one authored moment, a sparse constellation drifting behind the page that warms amber near the pointer.

Restraint is a standing preference from the product owner: calm surfaces, lots of air, one expressive moment. Chosen by Rob on 2026-09-01 from three researched mockups after seven metaphor-led directions were rejected. Confirmed rejections: animation libraries, WebGL, scroll timelines, metaphor worlds, busy compositions, invented proof.

**Key Characteristics:**
- One family (Geist), hierarchy from weight and color, never from a second face.
- One action color (amber) and three stream hues that only name things: blue for backend, amber for web, violet for AI, on the hero phrases, the stream labels, and project tags.
- Real captures as proof; abstract thumbnails are a defect.
- Hairlines and a faint lift for depth; no shadows anywhere.
- Section headings exist only on phones; on desktop the aside nav names the section.
- One motion moment (the constellation); everything else is a 160 to 250ms color or transform swap.

## Colors

A near-black ground, three grays of text, one warm accent that acts, and two more hues that name the streams.

### Ground
- **Ground** (#0d1117): The page. Also the label color on the amber button.
- **Well** (#131a24): Reserved surface tone. Currently unused on the page.

### Text
- **Ink** (#e6edf3): Name, role, titles, emphasis inside About, form labels, active nav.
- **Body** (#a3adba): Running prose and descriptions.
- **Mute** (#7b8794): Tech lists, inactive nav, stream labels, status, the footer, placeholders. Nudged from #6e7a89 on 2026-09-01 because that value failed AA at 4.33:1; this one clears 5.17:1 on ground.

### Accent
- **Amber** (#f0b64a): The button fill, pill text, hovered titles and arrows, focus rings, text selection, and the warm side of the constellation.
- **Amber bright** (#ffc85e): Button hover only.
- **Amber tint** (10% amber): Pill fill behind amber text.

### Stream hues
- **Backend blue** (#7fb2ff): The backend stream's label, the "Backend that deploys" phrase, and tags for backend technology (Node.js, Docker, Kubernetes). 8.75:1 on ground.
- **Web amber** (#f0b64a): The web stream shares the action color. "web that ships", the WEB label, tags for React, Next.js, TypeScript, HTML, CSS.
- **AI violet** (#b9a0ff): The AI stream's label, "AI built in", and tags for OpenAI, Claude, MCP. 8.59:1 on ground.
- **Tints** (12% of each hue): Tag fills. A technology outside the three streams gets a neutral tag: body text on the 8% hairline fill.

### Hairlines
- **Line** (8% white): Row inset on hover, thumbnail and photo borders, field borders.
- **Line strong** (16% white): The same borders on hover.
- **Lift** (3.5% white): Row fill on hover and focus.

### Named Rules
**The One Action Rule.** Amber is the only color that acts: button, focus, hover, selection. Blue and violet are labels, never controls, never borders that carry state, never fills larger than a tag.
**The Stream Hue Rule.** A hue means a stream and nothing else. Backend is blue, web is amber, AI is violet, in the hero line, the stream labels, and the tags, so a viewer can read a project's range from its tags alone.
**The Contrast Contract.** Every text pairing clears 4.5:1: ink, body, and mute on ground; ground on amber. Ink never sits on amber (1.55:1). Hairlines are decorative and never carry state alone; state is carried by amber (focus) or a color shift (hover).

## Typography

**Family:** Geist (variable, via next/font), Arial fallback. Geist Mono is loaded and unused on the page.

**Character:** One neutral grotesque doing every job. The name is the only large setting (2.875rem, bold, tracked in). Everything else sits between 12 and 20px and separates by weight and gray.

### Hierarchy
- **Name** (700, 2.875rem, 1; 2.5rem below 768px): "Rob Royson", once.
- **Role** (500, 1.25rem): "Software Developer", ink.
- **Title** (500, 17px): Stream titles and project titles, ink.
- **Body** (400, 1rem, 1.625): About paragraphs and the contact lead; 15px for stream and project descriptions.
- **Small** (400, 0.875rem): Tech lists (mute), the one-liner in the aside, socials, form labels (500, ink).
- **Label** (600, 0.75rem, uppercase, 0.16em): Nav links, stream labels, phone-only section heads.
- **Pill** (500, 0.75rem): Project tags.
- **Caption** (0.75rem, mute): Footer, Live/Local status, Source link.

### Named Rules
**The One Family Rule.** No display face, no serif, no mono on the page.
**The Eyebrow Rule.** The uppercase label voice belongs to the nav and the stream labels. Section heads use it only below 768px, as a sticky bar; above that they are visually hidden and remain in the document for assistive tech.

## Layout

A centered 72rem (1152px) container with 24px gutters (40px at 768px), split at 768px into a 12-column grid with a 64px gap: the aside spans 5 columns, main spans 7. The aside is sticky, 100dvh tall (min 640px), padded 88px top and 72px bottom, with the socials pinned to the bottom by flex. Below 768px the aside stacks on top, socials directly under the one-liner, and the nav is hidden.

Sections are 96px apart with no dividers or tints. Stream rows are 40px apart and split into a 120px label column and content at 768px. Project rows are `.row`: 18px by 16px padding with a matching negative margin so text stays on the column edge, and a 160px capture column at 768px; below that the capture spans the row width above the text. The form caps at 36rem and splits name and email at 640px.

## Elevation & Depth

Flat. Rows lift on hover with a 3.5% white fill and a 1px inset hairline; nothing casts a shadow. Thumbnails, the photo, and fields carry 1px hairline borders that brighten from 8% to 16% on hover. The constellation sits fixed behind everything at z-0; the page content is z-10; phone section heads are z-20 with a backdrop blur over 85% ground.

## Shapes

Radii: 4px captures, 6px button and fields, 8px rows and the photo, full pills. Icons are 16px: two brand glyphs (GitHub, LinkedIn) as filled paths and a 2px-stroke arrow. The favicon and OG mark is a three-node constellation in amber on a 7px-radius ground tile.

## Components

### Aside (hero)
Photo (72px, 8px radius, hairline), name, role, one line capped at 34ch, nav, socials. The nav is a list of rule-line links: a 4rem 1px box scaled to half in mute, growing to full in ink for the active section (IntersectionObserver, root margin -30% / -60%) and on hover.

### Section head
`.label` in ink, sticky at the top on phones with `bg-ground/85 backdrop-blur`, `sr-only` from 768px.

### Stream row
Label column (label voice, mute), then title (ink), one-line blurb (body, 15px), and the technology inventory as a comma-separated sentence in mute at 0.875rem. Not a link; no hover.

### Project row (signature)
A `.row` with a 1280x800 capture of the real site (`next/image`, hairline, 4px radius) beside title (ink, with a 16px arrow in mute), description at 60ch, then tags as amber pills with the status and a Source link pushed right. Tags take the hue of the stream their technology belongs to, neutral if it belongs to none. The title link is stretched over the whole row; on hover the row lifts, the title and arrow go amber, the arrow moves 3px up-right, and the capture's border brightens.

### Buttons
Amber fill, ground text, 6px radius, 12px by 18px, 0.9375rem semibold, optional trailing arrow. Hover: amber bright (pointer devices only). Disabled: 0.55 opacity, not-allowed cursor, no hover change. Focus: 2px amber ring offset 3px.

### Fields
Full width, 4% white fill, hairline border, ink text, 6px radius, 12px by 14px. Hover: 16% border. Focus: amber border, no ring. Placeholder in mute. Status message: hairline box with an amber dot (sent) or the stroke X (error); `role="status"` or `role="alert"`.

### Skip link
Hidden above the viewport, drops in on focus as an amber pill at the top-left.

## Motion

Two curves on the whole page: `ease` for color changes, `cubic-bezier(0.23, 1, 0.32, 1)` for movement. Durations: 150ms color, button press 60ms down and 160ms release, 180ms nav rule-line, 200ms arrow, capture reveal, and status rise, 300ms first-paint rise. Hover motion is gated to `(hover: hover) and (pointer: fine)`. Keyboard focus lands instantly. Under `prefers-reduced-motion` every transform is removed, color and opacity transitions stay, smooth scrolling is off, and the canvas draws one frame.

### First paint
The aside's photo, name, role, one-liner, and nav rise 6px over 300ms, 40ms apart; the socials follow at 200ms; the content column fades in on the same 300ms clock so both columns arrive together. The canvas fades in over 600ms once its first frame is drawn. Seen once per visit; nothing animates on scroll.

### Feedback
The submit button scales to 0.97 on press and keeps its width while sending: both labels share one grid cell and crossfade with a 2px blur. The status message rises 4px in with `@starting-style` and stays mounted through the next send.

### Captures
Project thumbnails rest desaturated at 75% opacity on the well surface and return to full color on hover or keyboard focus over 200ms, so the real sites read as part of the page rather than shouting at it.

### Constellation (signature)
A fixed canvas 2D field behind the page: roughly one point per 22,000 square pixels, capped at 140, drifting a few pixels per second and bouncing at the edges, linked by 1px lines under 130px apart. A cursor trails the pointer with exponential smoothing; within 260px of it, points and links warm to amber and grow slightly, and a 640px radial amber glow at 10% is painted on the same canvas, fading in place when the pointer leaves. Base opacities: lines 10% fading with distance, dots 28 to 58% by mass. Height-only resizes keep the field in place. Touch pointers are ignored. Pauses when the tab is hidden. No dependencies.

## Do's and Don'ts

### Do:
- **Do** prove with real captures, a real photo, and real links.
- **Do** keep amber to the button, focus, hover, and the web stream; keep blue and violet to labels and tags.
- **Do** separate sections with air only, 96px.
- **Do** hide desktop section heads and let the nav do the naming.
- **Do** gate hover motion to pointer devices and respect reduced motion.
- **Do** run tastemaker's `anti_slop_scan.py` and `audit_motion.py` on `src` before handoff.

### Don't:
- **Don't** add an animation library, WebGL, a scroll timeline, or a second motion moment; first-paint fades are the one exception.
- **Don't** add a second font family or a display face.
- **Don't** add shadows, gradients on UI, or a light mode.
- **Don't** turn inventories into pill clouds; pills are for a project's few tags.
- **Don't** replace a capture with an illustration or abstract art.
- **Don't** state anything PRODUCT.md does not back: no counts, employers, quotes, or metrics.
