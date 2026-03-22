# Backend Portfolio Website

This repository contains my personal portfolio website.

It presents my backend and AI engineering work, learning process, and coding principles.
My **main project** is [Habit Tracker](https://github.com/wojciechbednarz/habit-tracker), and this site is the public showcase of that work plus additional portfolio projects over time.

## What this repo includes

- Static portfolio website (`index.html`, `styles.css`, `script.js`)
- Social preview image (`og-preview.svg`)
- GitHub Pages deployment workflow (`.github/workflows/deploy-pages.yml`)
- No-build deployment setup (`.nojekyll`)

## Main project highlighted on the site

- Habit Tracker (FastAPI, async Python, AI integration, AWS workflow, testing and CI quality gates)

## Deploy with GitHub Pages

This repo is configured for deployment through **GitHub Actions**.

1. Push this repository to GitHub.
2. In the repository settings, open `Settings -> Pages`.
3. Set `Build and deployment -> Source` to `GitHub Actions`.
4. Each push to `master` or `main` triggers auto-deployment.

## Configure metadata after first deploy

After your first successful deployment, update these values in `index.html`:

- `og:url` to your real website URL
- `og:image` to your real website URL + `/og-preview.svg`

Example:

- `https://<your-username>.github.io/<repo>/`
- `https://<your-username>.github.io/<repo>/og-preview.svg`