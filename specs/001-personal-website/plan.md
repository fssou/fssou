# Implementation Plan: Personal Website Portfolio

**Branch**: `001-personal-website` | **Date**: 2026-05-15 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/001-personal-website/spec.md`

## Summary

Implement a modern personal portfolio website for Franclin using Nuxt 3. The site will feature a home page with bio and social links, a projects showcase, a technical blog, an about page, and contact options. It will support dark mode, be SEO-friendly, and deploy to GitHub Pages as a static site.

## Technical Context

**Language/Version**: TypeScript / Nuxt 3

**Primary Dependencies**: Nuxt 3, Nuxt UI, Pinia, VueUse, Nuxt Image

**Storage**: Local Markdown files (likely using Nuxt Content)

**Testing**: [NEEDS CLARIFICATION: No testing framework currently configured in package.json. Proposing Vitest for unit tests.]

**Target Platform**: GitHub Pages (Static Site Generation)

**Project Type**: Web application

**Performance Goals**: < 2s load time on 4G, Lighthouse SEO score > 90

**Constraints**: Must be deployable as a static site to GitHub Pages.

**Scale/Scope**: Personal portfolio website with ~5 main sections.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] Modern Stack: Using Nuxt 3 as preferred.
- [x] Static Deployment: Compatible with GitHub Pages.
- [x] Responsive Design: Using Nuxt UI (Tailwind CSS).

## Project Structure

### Documentation (this feature)

```text
specs/001-personal-website/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output (generated later)
```

### Source Code (repository root)

```text
# Nuxt 3 Project Structure
assets/                  # Styles, images, fonts
components/              # Vue components
content/                 # Markdown files for Blog and Projects (proposed)
composables/             # Shared logic
layouts/                 # Page layouts
middleware/              # Route middleware
pages/                   # Application routes
public/                  # Static assets
server/                  # Server-side logic (not used for static generation)
utils/                   # Utility functions
app.vue                  # Main entry point
nuxt.config.ts           # Nuxt configuration
```

**Structure Decision**: Standard Nuxt 3 directory structure. Content will likely be managed via `content/` directory if Nuxt Content is adopted during research.

## Complexity Tracking

*No violations detected.*
