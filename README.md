# Python Backend Portfolio

Portfolio repository for a GitHub Pages site focused on Python backend engineering, AI/LLM integrations, and reliability-oriented development.

Live site: [wojciechbednarz.github.io/my-portfolio](https://wojciechbednarz.github.io/my-portfolio/)

## Positioning

This portfolio highlights:

- FastAPI and async Python backend development
- Practical AI/LLM workflow integration
- CI/CD quality gates and testing discipline
- Cloud-aligned engineering patterns (AWS-oriented workflows)

## Featured projects

- **Habit Tracker**: FastAPI backend with typed contracts, async workflows, and reliability-focused implementation
- **AI Research Assistant**: Retrieval + LLM orchestration with structured outputs and resilient parsing
- **VitaOS**: AI-enabled product prototype (developed with help of Claude Code)
- **Aegis Tactical AI**: Decision-support prototype with backend + geospatial + LLM workflow elements (developed with help of Claude Code)

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- GitHub Pages via GitHub Actions

## Local development

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Deployment is automatic on push to `master`/`main`:

1. GitHub Actions runs install + build
2. `dist/` is uploaded as the Pages artifact
3. GitHub Pages serves the static output

## Content model

- Project cards: `src/data/projects.ts`
- Technology stack: `src/data/stack.ts`
- Experience timeline: `src/data/timeline.ts`

Update these files to keep portfolio content and positioning current.
