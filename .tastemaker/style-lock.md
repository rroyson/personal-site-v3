# Style lock — Rob Royson portfolio (personal-site-v3)

Established: 2026-09-01. Source: user-specified direction ("Spotlight", chosen by Rob from three researched mockups) with tokens hand-set in `src/app/globals.css`; verified with `check_contrast.py --matrix` on 2026-09-01.

## Palette
- Background: #0d1117 (`--color-ground`, page)
- Surface: #131a24 (`--color-well`, reserved; currently unused on the page)
- Primary: #f0b64a (`--color-amber`, the one accent: button fill, pills, hover titles, focus rings, selection)
- Accent: same as Primary. Amber is the only color that acts.
- Stream hues (information, never action): backend #7fb2ff (`--color-backend`, 8.75:1 on ground, 8.09:1 on well); web = amber; ai #b9a0ff (`--color-ai`, 8.59:1 on ground, 7.94:1 on well). Each has a 12% tint for tag fills; the hue on its own tint composite clears 7:1. Added 2026-09-01 when Rob asked for a splash of color; they appear only on the three hero phrases, the three stream labels, and project tags by stream. Tags for a technology outside the three streams are neutral: body text on the 8% hairline fill (6.86:1).
- Text primary: #e6edf3 (`--color-ink`) — 16.02:1 on ground, pass
- Text body: #a3adba (`--color-body`) — 8.3:1 on ground, pass
- Text muted: #7b8794 (`--color-mute`) — 5.17:1 on ground, 4.78:1 on surface, pass. Nudged from #6e7a89 (4.33:1, fail) on 2026-09-01.
- Button label color: ground (#0d1117) on amber — 10.36:1, pass
- Hairlines: rgba(255,255,255,0.08) rest, 0.16 hover (`--color-line`, `--color-line-strong`), decorative only
- Lift: rgba(255,255,255,0.035) (`--color-lift`), row hover fill
- Amber tint: rgba(240,182,74,0.1) (`--color-amber-tint`), pill fill behind amber text
- Dark mode: single locked dark mode, `color-scheme: dark`. No light mode, no toggle (PRODUCT.md).

## Color contract
Matrix run 2026-09-01 with text=#e6edf3 bg=#0d1117 surface=#131a24 primary=#f0b64a accent=#f0b64a border=#20242a on-primary=#0d1117.
- Text-safe (>=4.5): ink/ground, ink/well, body/ground (8.3), body/well (7.7), mute/ground (5.17), mute/well (4.78), amber/ground (10.36), amber/well (9.57), ground-on-amber (10.36)
- UI-safe (>=3.0 and <4.5): none needed
- Decorative (<3.0): every hairline and lift pairing; amber-tint behind amber text (the text is read against ground through the tint, 9.6:1 measured on the composite)
- Rule: ink text never sits on amber (1.55:1). Buttons use ground text on amber. Stream hues are text and tint only; they never fill a button, a border that carries state, or a large area. Matrix re-run 2026-09-01 with the two hues as accent/border roles: both text-safe on ground and well.

## Typography
- Display/heading font: Geist (next/font, `--font-geist-sans`). No second family. Geist Mono is loaded but unused on the page.
- Body font: Geist
- Scale: name 2.875rem/700/-0.025em (2.5rem below 768px); role 1.25rem/500; About 1rem/1.625; titles 17px/500; descriptions 15px/1.625; tech lists and socials 0.875rem; label 0.75rem/600/uppercase/0.16em; pills 0.75rem/500; footer 0.75rem.

## Shape language
- Corner radius: 4px thumbnails, 6px buttons and fields, 8px rows and the photo, full pills
- Shadow depth: none. Rows lift with a faint fill and a 1px inset hairline.
- Border usage: 1px hairlines at 8% white; 16% on hover.

## Density & spacing
- Base unit: 4px (Tailwind)
- Section gap: 96px (`mb-24`) between the four sections; one consistent mechanism, whitespace only, no dividers or tints
- Row internal padding: 18px vertical, 16px horizontal, with a matching negative margin so text stays on the column edge
- Stream rows: 40px apart; project rows: 8px apart (their padding carries the rest)
- Overall density: calm, airy, skimmable in a minute
- Section separation: fixed padding, no tint or divider

## Structure
- Macrostructure: Split Diptych (sticky statement column beside a scrolling content column)
- Narrative arc: hook (aside: photo, name, role, one line) -> about (two short paragraphs) -> range (three streams with plain-text tech lists) -> proof (three projects with real captures) -> close (form, then GitHub and LinkedIn)
- Shared chrome: aside nav with rule-lines; one-line footer
- Section heads: sticky uppercase labels on phones only; `sr-only` at 768px and up because the aside nav names the section
- Build stamp / log: stamp at the top of `src/app/globals.css`; `.tastemaker/log.json`

## Reference intelligence
- Reference board: `.tastemaker/reference-board.md`, viewed sources
- Design read: single-page developer portfolio for hiring managers, mode Persuade, contemporary developer-portfolio canon
- Dials: variance 4, motion 3, density 4, art direction 5
- Foundation: existing repo stack (Next 15, React 19, Tailwind v4, Geist). No registries, no UI kit, no motion library; Rob asked for light and fast.
- Quality bar: brittanychiang.com (the frame), emilkowal.ski and rauchg.com (restraint)
- Direction contract: see reference board
- Anti-references: decoration-as-proof, accent tag clouds, eyebrow on every section, metaphor costume

## Taste memory
- Profile priors used: none existed before this session; `~/.tastemaker/profile.md` created 2026-09-01 from Rob's resolved decisions
- Decision log: `.tastemaker/decisions.log`
- Last resolved decisions: Spotlight chosen over Statement and Editorial (2026-09-01); busy directions rejected (2026-09-01); metaphor directions rejected (2026-09-01); copy reframed from Kafka/Kubernetes-in-production to CI/CD and deployment (2026-09-01); a splash of color requested (2026-09-01)
- Pending review: real project captures, plain-text tech lists, photo in the aside, desktop section heads hidden, constellation visibility, favicon mark. All logged 2026-09-01.
- Memory precedence note: Rob's "no animation libraries" overrides tastemaker's GSAP default. Motion stays CSS transitions plus one canvas.

## Mood descriptors
calm, serious, finished, warm at one point

## Assets
- Anchor asset: `public/profile.jpeg` (460x460, real photo), shown at 72px in the aside
- Project captures: `public/projects/*.jpg`, 1280x800 browser captures of the real sites at 1280px, JPEG q80. Naba captured from nabaflow.io (2026-09-01, replaced Key Drums). Spotify generator captured from a local run of the repo because the preview URL was behind SSO at the time.
- Asset style: real captures only, shown desaturated at rest and in color on hover (they were too loud against the palette in full color); no illustration, no stock photography, no icon set beyond the two brand glyphs and the arrow drawn in `icons.tsx`
- Illustration vs. photography split: none. Nothing on this page is conceptual enough to need illustration.
- Logo: `src/app/icon.svg`, a three-node constellation in amber on ground, constructed 2026-09-01 (no prior mark existed; the previous favicon was the create-next-app default). `src/app/apple-icon.png` rendered from it. OG card `public/og.png` uses the same mark.

## Motion
- Feel: quick and restrained
- Curves: `ease` for every color change; `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` for every movement. Two curves on the page, no third.
- Durations: 150ms color and button opacity, button press 60ms down / 160ms release (`scale(0.97)` on `:active`), 180ms nav rule-line, 200ms arrow and capture reveal (border, opacity, filter on one clock), 200ms status message rise on `--ease-out` for both properties, 300ms first-paint rise; `main` fades in on the same 300ms clock
- Entrance: first paint only. The aside's children rise 6px over 300ms, 40ms apart, socials last at 200ms; the canvas fades in over 600ms once its first frame is drawn. Nothing animates on scroll.
- Feedback: the submit button scales to 0.97 on press and crossfades its two labels (opacity + 2px blur) in one grid cell so its width never changes; the status message rises 4px in with `@starting-style` and stays mounted through the next send so it never vanishes without a transition
- Captures: project thumbnails rest at `grayscale(1)`, 75% opacity on the well surface, and return to color on hover or focus-within over 200ms
- Screen tracks: one screen. The constellation (`Constellation.tsx`) is the single authored moment: canvas 2D points drifting behind the page, linked under 130px, warmed amber within 260px of a cursor that trails the pointer (`k = 1 - e^(-8dt)`), with the 640px spotlight painted on the same canvas and faded in place by a heat value. Points capped at 140. Height-only resizes keep the field. Touch pointers are ignored. Paused when the tab is hidden.
- Frequency rules: hover motion gated to `(hover: hover) and (pointer: fine)`; keyboard focus lands instantly (no transition on `.field:focus-visible`); nothing animates on phones except color and the first-paint fade
- Reduced motion: every transform drops (press, arrow, rule-line, rise becomes a plain fade, status becomes opacity only); color and opacity transitions stay; smooth scroll off; canvas draws once and still fades in
- Verified by: `audit_motion.py src` and a browser pass on 2026-09-01 (Emil design-engineering review applied in full)

## Do not
- No animation libraries, WebGL, or scroll-driven timelines (Rob, 2026-09-01)
- No metaphor world or costume (Rob rejected seven, 2026-09-01)
- No busy surfaces; one authored moment per page (Rob, 2026-09-01)
- No invented stats, employer names, testimonials, or project counts (PRODUCT.md)
- No second action color: stream hues name streams and never fill a button or carry state. No gradients on UI, no shadows
- No pill clouds for inventories; pills are for a project's three to five tags only, colored by stream
- No leading with Kafka or Kubernetes-in-production in copy; the backend stream is framed as CI/CD and deployment (Rob, 2026-09-01)
