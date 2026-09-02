# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** hiring managers and recruiters evaluating Rob Royson for a full-time software engineering role. They arrive from a resume, LinkedIn, or a GitHub profile, spend a minute or two, and decide whether to reach out.

**Secondary:** freelance and contract clients (small businesses, founders) deciding whether to hire Rob for a build, in the mold of the Charleston Wedding Band site.

Roles come first. Client work is welcome but never displaces the hiring audience.

## Product Purpose

Rob Royson's personal portfolio site. It answers three questions fast: who is this person, what have they shipped, how do I reach them.

Success is qualified inbound contact: a contact-form submission, or a click through to LinkedIn or GitHub, from someone who could hire Rob.

## Positioning

Ten years delivering scalable software in fast-paced environments, from startups to enterprise corporations. The combination a neighboring portfolio cannot truthfully copy: the same engineer has run production backends at enterprise scale (Java, Kafka, Kubernetes, AWS, Jenkins) **and** ships complete AI-integrated products end to end (Next.js, Node, TypeScript, OpenAI, Claude, MCP servers).

Confirmed real strengths, all four, in rough lead order:

1. Full-stack web: React, Next.js, Node, TypeScript, PostgreSQL, MongoDB.
2. AI-integrated apps: OpenAI, Claude, MCP servers, agentic tooling. Building with LLMs, not just using them.
3. Enterprise backend: Java, Kafka, Kubernetes, AWS, Docker, Jenkins, GitHub Actions.
4. Small-business sites: fast, polished marketing sites with contact and email plumbing.

## Operating Context

- Single-page site: Hero, About, Projects, Contact, Footer. Anchor nav.
- Content lives in code: `src/data/projects.ts` and `src/data/skills.ts`.
- Contact form posts to `/api/contact`, which sends email through Resend. Requires `RESEND_API_KEY`; optional `FROM_EMAIL`, `TO_EMAIL`. Without the key the API returns 503 and the UI tells the visitor to use the social links instead.
- Deployed on Vercel (Next.js, `.vercel` ignored). Repo: github.com/rroyson/personal-site-v3. Feature branches off `development`, PRs into `development`.
- Dark, single theme since the 2026-09-01 redesign (`color-scheme: dark`): the Spotlight world Rob chose from three researched mockups. No light mode.

## Capabilities and Constraints

- Stack: Next.js 15 App Router, React 19, TypeScript, Tailwind CSS v4, Geist Sans and Geist Mono via `next/font`, Resend for email.
- Single route. No CMS, no blog, no auth, no analytics confirmed.
- Project status vocabulary: `Live` (has a public demo URL) and `Local` (GitHub only).
- **Undecided:** canonical domain. The email route defaults `FROM_EMAIL` to `contact@roboyson.dev`, which looks like a typo for `robroyson.dev`. Confirm before any work that states the domain.
- **Undecided:** whether a downloadable resume or employer names will ever appear on the site.
- The current hero and About copy is create-next-app-era template prose ("Building the Future, One App at a Time", "passionate software developer") and is not binding. Rewrite freely against the facts in this file.

## Brand Commitments

- Name: **Rob Royson**. Title in use: **Software Developer**.
- Profile photo: `public/profile.jpeg` (exists, currently unused on the page).
- Links: linkedin.com/in/rroyson, github.com/rroyson.
- No confirmed voice, logo, palette, or typography commitment. The existing look is incumbent evidence, not a brand rule.
- **Restraint (standing preference, 2026-09-01):** Rob rejected a hand of directions as "very busy" and asked to simplify. Surfaces stay calm and uncluttered; expression lives in one authored moment, not many.
- **Delivery over infrastructure (standing preference, 2026-09-01):** copy frames the backend stream around CI/CD and deployment (Docker, Kubernetes, GitHub Actions, Jenkins, AWS), not around running Kafka and Kubernetes in production. Kafka stays in the skills list; it does not lead.
- **No costume (standing preference, 2026-09-01):** after seven metaphor-led directions (stream notation, record, azulejo, mezzotint, and others) Rob asked for research into prominent developer sites instead. The site should sit alongside the best contemporary developer portfolios: a modern software engineer's site with real finish, not a themed artifact. Convention is the commitment; the craft bar is the best of that category.

## Evidence on Hand

- **Experience:** 10 years, confirmed by Rob. State it as "10 years" or "a decade", not "5+".
- **Project count:** Rob cannot name a number. Do not state one. The current "20+ Projects Completed" stat must go.
- **Projects (3):**
  - Naba. Live at nabaflow.io, iOS app on the App Store (apps.apple.com/us/app/nabaflow/id6761624940, listed under seller Zachary Bedell; the listing's seller URL is nabaflow.io and the bundle id is com.nabaflow.app). Gig and band management for working musicians. Stack per the naba-sec skill: Next.js UI, Express/TypeScript APIs with Prisma on Postgres, Auth0, SwiftUI iOS app, deployed on Fly. Closed source apart from naba-events-api; no Source link shown.
  - AI Spotify Playlist Generator. Live on Vercel (spotify-playlist-generator-rob-roysons-projects.vercel.app). Next.js, Node, TypeScript, OpenAI, Spotify API. Public repo.
  - The Charleston Wedding Band. Live at thecharlestonweddingband.com. Next.js, Resend, TypeScript. Public repo.
  - Key Drums was removed from the page on 2026-09-01 at Rob's request; the repo still exists.
- **Skills list:** `src/data/skills.ts`, grouped into three streams (backend, web, ai): Java, Node, Express, Kafka, Postgres, Mongo, Maven, Docker, Kubernetes, AWS, Jenkins, GitHub Actions, Git; React, Next.js, TypeScript, JavaScript, Tailwind, HTML, CSS; OpenAI, Claude, MCP, Cursor.
- **Absent, do not fabricate:** employer names, testimonials, client quotes, case-study metrics, download counts, press, certifications, a resume file.

## Product Principles

1. **Every claim traceable.** Nothing on the page that this file does not back. Template prose and invented stats are defects.
2. **Range is the story.** Startup speed, enterprise scale, and hands-on AI tooling in one engineer. Lead with that, not with a generic "full-stack developer".
3. **Projects carry the proof.** Real repos, real demos, honest status labels. The projects section does the persuading that stats cannot.
4. **Reaching Rob is never blocked.** The form must degrade to LinkedIn and GitHub links, never to a dead end.
5. **Roles first, clients welcome.** Copy and calls to action speak to a hiring manager first and stay open to a client without splitting into two sites.
