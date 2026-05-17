# Content Contract: Markdown Schemas

This contract defines the structure and metadata requirements for all content files managed via @nuxt/content.

## Project Content Schema (`content/projects/*.md`)

```yaml
---
title: "Project Name"
description: "A short description of what this project does."
stack: ["Vue.js", "Nuxt", "Tailwind CSS"]
repository: "https://github.com/fssou/..."
demo: "https://demo.francl.in"
featured: true
image: "/images/projects/thumbnail.png"
---

Detailed project content goes here in Markdown format.
```

## Article Content Schema (`content/blog/*.md`)

```yaml
---
title: "Article Title"
description: "A compelling summary of the article."
date: "2026-05-15"
category: "AI"
tags: ["Deep Learning", "LLM"]
published: true
---

Article content goes here in Markdown format.
```

## UI Component Contracts

### Social Link Component
- **Props**:
  - `name`: string (e.g., 'github', 'linkedin')
  - `url`: string
- **Behavior**: Renders an icon and a link that opens in a new tab.

### Project Card Component
- **Props**:
  - `project`: Project (Entity)
- **Behavior**: Displays project summary, stack badges, and action links.
