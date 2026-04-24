# Backend Portfolio (React + Vite)

Modern SaaS-style portfolio website for backend, SDET, and TestOps engineering work.

Live site: https://wojciechbednarz.github.io/my-portfolio/

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- GitHub Pages via GitHub Actions

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deployment

The repository deploys automatically on push to `master`/`main`.
GitHub Actions builds the app and publishes `dist/` to GitHub Pages.

## Content model

- Project data: `src/data/projects.ts`
- Stack data: `src/data/stack.ts`
- Timeline data: `src/data/timeline.ts`

Update those files to keep portfolio content current.