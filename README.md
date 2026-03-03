# moonsault.fi

Website for Moonsault Software Oy. Built with Vue 3 + Vite, hosted on GitHub Pages.

## Development

```sh
npm install
npm run dev
```

## Build

Builds to the `docs/` folder for GitHub Pages:

```sh
npm run build
npm run preview  # preview the built site locally
```

## Adding Blog Posts

Create a new `.md` file in `src/posts/` with YAML frontmatter:

```markdown
---
title: My New Post
date: 2026-03-03
excerpt: A short summary shown on the blog listing page.
tags:
  - topic
---

Your markdown content here.
```

The filename becomes the URL slug (e.g., `my-new-post.md` maps to `/#/blog/my-new-post`).

## Deployment

A GitHub Action automatically builds and commits the `docs/` folder on every push to `main`. GitHub Pages serves from the `docs/` folder.
