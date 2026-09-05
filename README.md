# Uttam Chaudhary — Portfolio v0.1

Premium single-page portfolio for **Uttam Chaudhary — AI & Software Developer**.

## v0.1 scope
- Responsive single-page experience
- Hero / Why I Build / Selected Work / Stack / Perso / Contact
- Warm editorial + technical visual language
- Scroll-driven arc system and reveal animations
- Command-style navigation overlay
- Live project + GitHub + LinkedIn + email connections
- Perso clearly marked **IN DEVELOPMENT**
- No backend and no API dependency

## Tech stack
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- CSS custom properties for the visual system

### Why this stack
Next.js gives the portfolio a production-ready React foundation and deployment path. TypeScript keeps the component/content layer safer. Tailwind handles responsive layout and utility styling. Framer Motion powers the restrained cinematic interactions. Lucide provides lightweight interface icons.

## Run locally
Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open http://localhost:3000

Production check:

```bash
npm run typecheck
npm run check
npm run build
npm start
```

## Validation performed for this archive
`npm run check` is dependency-free and verifies the source contains all required internal anchors and external project/contact links. The environment used to assemble this archive could not complete an npm registry install, so a real `next build` could not be executed here. The project is therefore shipped as complete Next.js source, with dependency versions pinned by `package.json` and a deterministic link-integrity check.

## Content notes
- EMPLO Salary: 100K synthetic records and 95% stated prediction accuracy are included exactly as the current project brief.
- Face Recognition: ~97% accuracy, real-time + liveness, no custom training dataset.
- SubGen and Diagnomind intentionally avoid invented performance metrics.
- Perso is not presented as finished functionality.
- FundMates is intentionally excluded.
