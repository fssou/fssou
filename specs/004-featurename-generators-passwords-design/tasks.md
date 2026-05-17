# Tasks: Password Generator Redesign

**Input**: Design documents from `/specs/004-featurename-generators-passwords-design/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/ui-contract.md

**Tests**: Tests are OPTIONAL - this feature focuses on UI/UX redesign of an existing component. No new automated unit tests were requested in the specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `pages/generators/passwords.vue`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Verify project state and ensure Nuxt 3 development server is running correctly without errors.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T002 Backup existing implementation of `pages/generators/passwords.vue` to a temporary scratch file or ensure clean git working tree before major refactoring.
- [x] T003 Inspect existing composables (`usePasswordGenerator`, `usePasswordStrength`) in `pages/generators/passwords.vue` to guarantee their logic remains intact during template/style modifications.

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Premium & Intuitive Generation Interface (Priority: P1) 🎯 MVP

**Goal**: As a user looking for a secure password, I want an intuitive, aesthetically pleasing, and highly responsive interface so that I can easily configure, generate, and copy strong passwords without confusion or visual clutter.

**Independent Test**: Navigate to `/generators/passwords` and verify that the card layout is clean, options are easily configurable (slider for length, toggles for character sets), the strength meter provides clear visual feedback, and the generated password can be copied seamlessly.

### Implementation for User Story 1

- [x] T004 [US1] Refactor main container in `pages/generators/passwords.vue` to implement the premium card wrapper matching `ui-contract.md` (`bg-neutral-200 dark:bg-zinc-800/90`, `rounded-2xl`, `shadow-xl`, `flex flex-col gap-6`).
- [x] T005 [US1] Refactor password display header in `pages/generators/passwords.vue` to use clean flex layout (`flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4`), ensuring the password input uses `font-mono text-xl md:text-2xl font-medium bg-transparent border-none`.
- [x] T006 [US1] Update action buttons (Visibility, Refresh, Copy, Cog) in `pages/generators/passwords.vue` to leverage Nuxt UI `UIcon` components with standardized dimensions (`w-10 h-10 rounded-lg bg-neutral-200 dark:bg-zinc-800 hover:bg-neutral-300 dark:hover:bg-zinc-700`).
- [x] T007 [US1] Refactor password strength meter in `pages/generators/passwords.vue` to display 4 horizontal segments (`flex h-2 w-full gap-1 overflow-hidden rounded-full`) with dynamic background colors driven by `strengthScore`.
- [x] T008 [US1] Verify copy-to-clipboard feedback logic in `pages/generators/passwords.vue` correctly shows `i-mdi-check` (`text-green-500 dark:text-green-400`) for 2000ms upon successful copy.

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently.

---

## Phase 4: User Story 2 - Enhanced Options Discoverability & Mobile Experience (Priority: P2)

**Goal**: As a mobile or desktop user, I want the password configuration options (length, uppercase, lowercase, numbers, symbols) to be presented clearly and accessibly, adapting perfectly to my screen size.

**Independent Test**: Resize the browser viewport from 320px (mobile) to 1920px (desktop) and verify that the generator card, option controls, and action buttons maintain proper alignment, spacing, and readability.

### Implementation for User Story 2

- [x] T009 [US2] Refactor options container (`.options-panel`) in `pages/generators/passwords.vue` to integrate directly into the main card flow (`flex flex-col gap-6 pt-4 border-t border-neutral-300 dark:border-zinc-700/50`), replacing absolute positioning and eliminating z-index overflow issues.
- [x] T010 [US2] Implement length slider control in `pages/generators/passwords.vue` with accessible label, range input (`min="8" max="64"`), and clear badge displaying current length (`font-mono bg-neutral-300 dark:bg-zinc-700 px-2 py-0.5 rounded text-xs`).
- [x] T011 [US2] Implement character set checkboxes (A-Z, a-z, 0-9, symbols) in `pages/generators/passwords.vue` using responsive grid layout (`grid grid-cols-1 sm:grid-cols-2 gap-4`) with styled wrappers (`p-3 rounded-lg bg-neutral-100 dark:bg-zinc-900/40 border`).
- [x] T012 [US2] Implement validation warning message in `pages/generators/passwords.vue` that appears in red when `!isValidOptions` (all checkboxes unchecked), ensuring the generate button is correctly disabled.
- [x] T013 [US2] Connect options toggle button (`i-mdi-cog`) in `pages/generators/passwords.vue` to smoothly show/hide the `.options-panel` via `v-show` or dynamic class toggling.

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently across all viewports.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T014 Review and clean up unused CSS styles or legacy classes in `<style scoped>` of `pages/generators/passwords.vue`.
- [x] T015 Perform manual validation following the steps defined in `quickstart.md` across Desktop, Tablet (768px), and Mobile (375px/320px) viewports.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories.
- **User Stories (Phase 3+)**: All depend on Foundational phase completion.
- **Polish (Final Phase)**: Depends on all desired user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories.
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Integrates smoothly into US1 card structure.

### Parallel Opportunities

- Tasks T004, T005, T006, and T007 within User Story 1 can be implemented in parallel or sequentially within `pages/generators/passwords.vue`.
- Tasks T010, T011, and T012 within User Story 2 can be developed concurrently.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Each story adds value without breaking previous stories
