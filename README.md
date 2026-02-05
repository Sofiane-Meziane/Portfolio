# Sofiane Meziane - Portfolio (Astro)

Static portfolio for AI, software, and data projects. Supports English and French.

Quick start
1. npm install
2. npm run dev

Languages
- English: /en
- French: /fr

Add a project
1. Create a new .md file in src/content/projects/en and src/content/projects/fr.
2. Fill the frontmatter using the schema in src/content/config.ts.
3. Write Markdown sections for summary, approach, results, and visuals.

Frontmatter example
```yaml
---
title: "Image Classification with CNNs"
date: "2024-06-01"
summary: "Short summary of the project."
tags: ["Deep Learning", "CNN"]
dataset: "CIFAR-10"
repo: "https://github.com/..."
demo: "https://..."
featured: true
---
```

Deploy
1. GitHub Pages: set `site` in astro.config.mjs and run `npm run build`.
2. Netlify or Vercel: build command `npm run build`, publish directory `dist`.