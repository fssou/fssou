# Tasks: Personal Website Portfolio

**Input**: Design documents from `/specs/001-personal-website/`
**Prerequisites**: plan.md, spec.md, data-model.md, contracts/content-schema.md, research.md

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure.

- [ ] T001 Verify project structure and Nuxt 3 initialization in repository root.
- [ ] T002 Install testing dependencies (Vitest and @nuxt/test-utils) via `npm install -D vitest @vue/test-utils happy-dom @nuxt/test-utils`.
- [ ] T003 Configure `vitest.config.ts` for Nuxt 3 environment.
- [ ] T004 Install `@nuxt/content` via `npm install @nuxt/content`.
- [ ] T005 Update `nuxt.config.ts` to include `@nuxt/content` in the `modules` array.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented.

- [ ] T006 Define User Profile configuration (`name`, `headline`, `socials`, `contact`) in `app.config.ts`.
- [ ] T007 Create base `default.vue` layout in `layouts/default.vue` providing a common header/navigation and a `NuxtPage` slot.
- [ ] T008 [P] Implement `SocialLink` component in `components/SocialLink.vue` conforming to the UI contract (receives `name`, `url` props).

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Portfolio Overview & Contact (Priority: P1) 🎯 MVP

**Goal**: As a recruiter or developer, I want to quickly see the profile, headline, and contact options so that I can understand the person's expertise and reach out.

**Independent Test**: Access the home page and verify that the bio, headline, and direct contact options (Email, Telegram) are present and functional.

### Tests for User Story 1
- [ ] T009 [P] [US1] Create unit test for index page in `tests/pages/index.spec.ts` to verify presence of profile data and social links.

### Implementation for User Story 1
- [ ] T010 [US1] Implement `pages/index.vue` to fetch data from `app.config.ts` and display headline and bio.
- [ ] T011 [US1] Integrate `SocialLink` component in `pages/index.vue` to iterate over social and contact links from configuration.

**Checkpoint**: At this point, User Story 1 (Home Page Overview) should be fully functional and testable independently.

---

## Phase 4: User Story 2 - Project Showcase (Priority: P1)

**Goal**: As a recruiter, I want to browse a list of technical projects with descriptions and used technologies so that I can evaluate technical experience.

**Independent Test**: Navigate to the projects section and confirm that at least one project is listed with its description, technology stack, and relevant links.

### Tests for User Story 2
- [ ] T012 [P] [US2] Create unit test for ProjectCard component in `tests/components/ProjectCard.spec.ts`.
- [ ] T013 [P] [US2] Create unit test for projects page in `tests/pages/projects.spec.ts`.

### Implementation for User Story 2
- [ ] T014 [US2] Implement `ProjectCard` component in `components/ProjectCard.vue` to display project data based on the entity contract.
- [ ] T015 [US2] Create placeholder Markdown files in `content/projects/` based on `Project Content Schema`.
- [ ] T016 [US2] Implement `pages/projects.vue` using `@nuxt/content` to query and list projects, rendering them with `ProjectCard`.

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently.

---

## Phase 5: User Story 3 - Professional Background & Personal Interests (Priority: P2)

**Goal**: As an interested peer or recruiter, I want to read about the professional history and personal interests to get a better sense of personality and career path.

**Independent Test**: Access the "About" section and verify that both professional history and personal interests are described.

### Tests for User Story 3
- [ ] T017 [P] [US3] Create unit test for about page in `tests/pages/about.spec.ts`.

### Implementation for User Story 3
- [ ] T018 [US3] Implement `pages/about.vue` to display professional history.
- [ ] T019 [US3] Add a section within `pages/about.vue` for personal interests (e.g., astronomy, music).
- [x] T020 [US3] Fix technology icons in `components/AboutSection.vue`: removed text labels, added UTooltip for discoverability, added aria-label/role="img" for accessibility, applied aspect-square layout with consistent sizing. Details in `fix-tech-icons/` subdirectory.

**Checkpoint**: The About page is now functional.

---

## Phase 6: User Story 4 - Blog/Articles Access (Priority: P3)

**Goal**: As a developer interested in technology, I want to read articles about AI and architecture so that I can learn from shared insights.

**Independent Test**: Navigate to the blog section, select an article, and verify that it can be read completely.

### Tests for User Story 4
- [ ] T021 [P] [US4] Create unit tests for blog listing in `tests/pages/blog/index.spec.ts`.

### Implementation for User Story 4
- [ ] T022 [US4] Create placeholder Markdown files in `content/blog/` based on `Article Content Schema`.
- [ ] T023 [US4] Implement `pages/blog/index.vue` to query and list articles using `@nuxt/content`.
- [ ] T024 [US4] Implement dynamic route `pages/blog/[...slug].vue` to render individual Markdown articles using `<ContentDoc>`.

**Checkpoint**: The Blog section is now fully functional.

---

## Phase 7: User Story 5 - Theme Preference (Priority: P3)

**Goal**: As a user who prefers specific visual settings, I want the website to support dark mode so that I can view the content comfortably.

**Independent Test**: Toggle the theme or change system settings and verify the website UI adjusts accordingly.

### Tests for User Story 5
- [ ] T025 [P] [US5] Create unit test for ThemeToggle component in `tests/components/ThemeToggle.spec.ts`.

### Implementation for User Story 5
- [ ] T026 [US5] Implement `ThemeToggle` component in `components/ThemeToggle.vue` using VueUse's `useDark` or Nuxt UI's built-in color mode functionality.
- [ ] T027 [US5] Integrate `ThemeToggle` component into the common header in `layouts/default.vue`.

**Checkpoint**: Dark mode support is now enabled across the website.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories.

- [ ] T028 [P] Optimize images and static assets in the `public/` directory for faster load times.
- [ ] T029 Audit all pages and components for SEO-friendly HTML tags (title, description meta tags) using Nuxt's `useHead`.
- [ ] T030 Review and refine responsive design across mobile, tablet, and desktop breakpoints.
- [ ] T031 Ensure "Coming soon" fallback messages are displayed when no projects or articles are available.
- [ ] T032 Perform a final build validation (`nuxi generate`) to ensure static generation completes without errors.

---

## Dependencies & Execution Order

### Phase Dependencies
- **Setup (Phase 1)**: Can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion.
- **User Stories (Phase 3-7)**: All depend on Foundational phase completion.
- **Polish (Phase 8)**: Depends on all user stories being complete.

### Parallel Opportunities
- Task T008 (SocialLink) can be implemented in parallel with the layout in Phase 2.
- Testing tasks (T009, T012, T013, T017, T021, T025) can be written simultaneously before their respective implementations.
- Component implementations (T014, T026) can be handled independently from page layouts.
- Content creation (T015, T022) can happen concurrently with any other tasks.
