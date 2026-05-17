# Quickstart: Personal Website Portfolio

This guide explains how to set up and run the personal website project locally.

## Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

## Installation

```bash
# Install dependencies
npm install

# Generate Nuxt stub files
npm run postinstall
```

## Development

```bash
# Start the development server
npm run dev
```

The site will be available at `http://localhost:3000`.

## Adding Content

### New Project
1. Create a new file in `content/projects/my-project.md`.
2. Follow the frontmatter schema defined in `specs/001-personal-website/contracts/content-schema.md`.

### New Blog Post
1. Create a new file in `content/blog/my-article.md`.
2. Follow the frontmatter schema defined in `specs/001-personal-website/contracts/content-schema.md`.

## Building for Production

```bash
# Generate static site
npm run generate
```

The output will be in the `.output/public` directory, ready for deployment to GitHub Pages.
