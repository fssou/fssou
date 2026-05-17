# Data Model: Personal Website Portfolio

This document describes the structure of the data managed by the portfolio website, primarily stored as Markdown files with frontmatter.

## Entity: Project
Represents a technical project in the portfolio.
Stored in: `content/projects/*.md`

| Field | Type | Description | Validation |
|-------|------|-------------|------------|
| `title` | String | Name of the project | Required |
| `description` | String | Short summary of the project | Required |
| `stack` | Array<String> | Technologies used (e.g., Vue, Go) | Required |
| `repository` | String (URL) | Link to source code | Optional |
| `demo` | String (URL) | Link to live demonstration | Optional |
| `featured` | Boolean | Whether to show on the home page | Default: false |
| `image` | String (Path) | Path to thumbnail image | Optional |

## Entity: Article
Represents a blog post or technical article.
Stored in: `content/blog/*.md`

| Field | Type | Description | Validation |
|-------|------|-------------|------------|
| `title` | String | Title of the article | Required |
| `description` | String | Short summary for list views | Required |
| `date` | Date | Publication date | Required |
| `category` | String | Main topic (AI, Architecture, etc.) | Required |
| `tags` | Array<String> | Specific tags for filtering | Optional |
| `published` | Boolean | Visibility status | Default: true |

## Entity: User Profile
Basic information about Franclin.
Managed in: `app.config.ts` or `nuxt.config.ts` (public config)

| Field | Type | Description |
|-------|------|-------------|
| `name` | String | Full name |
| `headline` | String | Professional title/bio summary |
| `socials` | Object | Map of platform names to URLs (GitHub, LinkedIn) |
| `contact` | Object | Map of contact methods (Email, Telegram) |
