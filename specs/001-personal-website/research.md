# Research Report: Personal Website Portfolio

## Decision: Testing Framework
- **Chosen**: Vitest + @nuxt/test-utils
- **Rationale**: Standard testing stack for Nuxt 3. Provides fast unit testing and easy integration with Vue components.
- **Alternatives considered**: Jest (requires more configuration for Nuxt 3), Playwright (excellent for E2E but Vitest is better for initial unit/component testing).

## Decision: Content Management
- **Chosen**: @nuxt/content
- **Rationale**: Allows managing projects and blog articles as Markdown files in a `content/` directory. Provides a powerful query API and built-in components for rendering Markdown.
- **Alternatives considered**: Headless CMS (Strapi, Contentful) - rejected due to complexity and the goal of simple GitHub Pages deployment.

## Decision: Deployment Strategy
- **Chosen**: Nuxt Static Generation (SSG) via GitHub Actions
- **Rationale**: Best for SEO and performance. `nuxi generate` creates a static version of the site that can be hosted on GitHub Pages for free.
- **Alternatives considered**: SSR on Vercel/Netlify - rejected because user explicitly mentioned "Deploy simples github pages".

## Decision: State Management
- **Chosen**: Pinia
- **Rationale**: Already present in `package.json` and is the official state management library for Vue/Nuxt.
- **Alternatives considered**: Vue composition API refs (good for simple state, but Pinia provides better debugging and structure).

## Decision: UI Framework
- **Chosen**: Nuxt UI v3
- **Rationale**: Already integrated in the project. Provides a solid set of accessible components styled with Tailwind CSS, including built-in dark mode support.
- **Alternatives considered**: Vuetify, PrimeVue - rejected to maintain current project direction.
