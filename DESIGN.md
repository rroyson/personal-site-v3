---
name: Rob Royson
description: Single-column developer portfolio. Cool near-black ground, one bright blue accent, Space Grotesk display over Inter body, mono for labels and tech.
colors:
  ground: "#0b0d11"
  surface: "#12151b"
  shot: "#1a1f28"
  ink: "#eef1f5"
  soft: "#cdd3dc"
  body: "#b4bcc8"
  mute: "#8892a0"
  accent: "#4aa8ff"
  accent-bright: "#7bc0ff"
  line: "rgba(238, 241, 245, 0.08)"
  line-strong: "rgba(238, 241, 245, 0.16)"
typography:
  display: Space Grotesk 600, tight tracking
  body: Inter
  mono: JetBrains Mono (eyebrows, tags, tech lists)
---

# Design

Tokens live in `src/app/globals.css` (`@theme`). The accent is the only hue: primary buttons, eyebrows, headline highlights, Live/Featured tags, the AI core skills, links and focus rings.

## Page

Sticky header (logo + Contact; section links from md up) → hero → Work → Skills → About → Contact → footer (copyright + GitHub/LinkedIn).

## Phone rules

- 20px gutters; actions go full width; every tap target is at least 44px.
- Projects become a horizontal scroll-snap rail (cards 86% wide, descriptions clamped to 3 lines).
- Skills become an accordion, first group open; from md up all groups show as columns.
- Form fields use 16px text, autocomplete and the right keyboard.
- Header and footer pad for the safe area.
