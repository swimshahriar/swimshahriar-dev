# swimshahriar.dev

Personal site and blog of **S. M. Shahriar**, Senior Software Engineer. Live at [swimshahriar.dev](https://swimshahriar.dev).

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 and MDX.

## Getting started

Requires Node.js 20+ and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

| Script       | What it does              |
| ------------ | ------------------------- |
| `pnpm dev`   | Start the dev server      |
| `pnpm build` | Production build          |
| `pnpm start` | Serve the production build |
| `pnpm lint`  | Run ESLint                |

### Environment variables

Create `.env.local`:

```bash
# Contact form (https://web3forms.com)
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key
```

Everything else works without it; only the contact form needs the key.

## Project structure

```
content/blog/          MDX blog posts
public/                Favicon, touch icon, static assets
src/app/               Routes: home, /blog, /blog/[slug], 404
src/components/
  sections/            Homepage sections (hero, about, experience, …)
  ui/                  shadcn/ui primitives
src/lib/constants/     Site content: profile, experience, skills, projects
src/lib/blog.ts        Reads and parses MDX posts
```

Most content edits happen in `src/lib/constants/`: site details and links (`site.ts`), work history (`experiences.ts`), skills (`skills.ts`) and projects (`projects.ts`).

## Writing a blog post

Add an `.mdx` file to `content/blog/`. The file name becomes the URL slug.

```mdx
---
title: "Post title"
description: "One or two sentences shown in listings and meta tags."
date: "2026-10-15"
tags: ["Go", "Backend"]
published: true # set to false to hide a draft
---

Your content here. GitHub-flavoured Markdown is supported, and code
blocks are syntax-highlighted.
```

## Design system

The site uses the **Graphite + Amber** design system, matching the LinkedIn banner.

- **Fonts:** Space Grotesk (text) and JetBrains Mono (labels, tags, code).
- **Colours:** tokens such as `--bg`, `--surface`, `--text` and `--accent` live in `src/app/globals.css`, with a dark (default) and a light theme switched via `data-theme`. Use the tokens or the Tailwind classes built on them (`bg-surface`, `text-subtle`, `text-accent`, …), never hard-coded hex values.
- **Type scale:** `text-display`, `text-h1`, `text-h2`, `text-h3`, `text-label`, `text-tag`, `text-code`.
- **Shared classes:** `.card`, `.tag` / `.tag-featured`, `.section-label`, `.grid-background`, `.code-block`.
- **Rules:** amber is the only accent colour and is used for highlights, not large areas. Mono is for small technical details only, never body text. All motion respects `prefers-reduced-motion`.

## Deployment

Deployed on [Vercel](https://vercel.com). Pushes to `main` deploy to production, and pull requests get preview deployments. Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in the Vercel project settings.
