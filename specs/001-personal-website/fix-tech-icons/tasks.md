---
description: "Task list for feature implementation: Correção da Apresentação de Competências e Tecnologias"
---

# Tasks: Correção da Apresentação de Competências e Tecnologias

**Input**: Design documents from `specs/002-fix-tech-icons/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/ui-contract.md, quickstart.md

**Tests**: Testes formais automatizados não foram solicitados na especificação. A validação seguirá o roteiro de testes visuais, interativos e de acessibilidade definidos no quickstart.md.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

## Path Conventions

- **Single project / Nuxt 3 Web App**: `components/`, `package.json` at repository root

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure verification

- [x] T001 Verify Nuxt 3 project environment and @iconify/json dependency in package.json

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure and component inspection that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T002 Inspect components/AboutSection.vue to confirm current skills array structure and styling classes

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Visualização Consistente de Ícones em Dispositivos Móveis (Priority: P1) 🎯 MVP

**Goal**: Garantir que a grade de competências tenha formato quadrado perfeito (`aspect-square`), centralização e proporções uniformes em qualquer dispositivo, removendo os rótulos de texto visíveis na grade.

**Independent Test**: Redimensionar a janela do navegador para larguras mobile (ex: 320px, 375px) e verificar se os cartões mantêm o formato quadrado sem distorção e sem texto visível na grade.

### Implementation for User Story 1

- [x] T003 [US1] Update components/AboutSection.vue template to remove text labels (`<span class="about__skill-name">`) from the skills grid
- [x] T004 [US1] Update components/AboutSection.vue styles to configure `.about__skill` with `aspect-square`, `w-16 h-16`, `flex items-center justify-center`, and `p-4`

**Checkpoint**: At this point, User Story 1 should be fully functional e a grade de ícones deve ser exibida de forma limpa e quadrada.

---

## Phase 4: User Story 2 - Exibição Completa do Catálogo de Competências (Priority: P1)

**Goal**: Adicionar ícones corretos para TypeScript e Kubernetes, envolver cada cartão com `UTooltip` para discoverability limpa e implementar os atributos de acessibilidade (`aria-label` e `role`).

**Independent Test**: Verificar via hover se o tooltip exibe o nome correto para TypeScript e Kubernetes, e inspecionar o DOM para confirmar a presença de `aria-label` e `role="img"`.

### Implementation for User Story 2

- [x] T005 [US2] Update components/AboutSection.vue skills array to ensure TypeScript uses `i-devicon-typescript` and Kubernetes uses `i-devicon-kubernetes`
- [x] T006 [US2] Update components/AboutSection.vue template to wrap the skill card div in `<UTooltip :text="skill.name">`
- [x] T007 [US2] Update components/AboutSection.vue template to add `:aria-label="skill.name"` and `role="img"` attributes to the `.about__skill` div

**Checkpoint**: At this point, User Stories 1 AND 2 should both work de forma combinada e independente em termos de validação.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Improvements and final validations that affect the entire feature

- [x] T008 Run quickstart.md validation steps in browser preview to confirm flawless visual presentation, tooltips, and accessibility

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - Executadas sequencialmente neste caso devido à alteração no mesmo arquivo (`AboutSection.vue`)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after User Story 1 (US1) para evitar conflitos de edição no mesmo template Vue

### Within Each User Story

- Alteração na estrutura de dados (array de skills) antes da alteração no template
- Alteração no template antes da estilização CSS
- Validação interativa após a conclusão de cada história

### Parallel Opportunities

- N/A para as User Stories, pois todas as tarefas modificam o mesmo arquivo de componente (`components/AboutSection.vue`). A execução sequencial garante integridade e previne conflitos de código.

---

## Parallel Example: User Story 1

```bash
# Como as tarefas de US1 editam o mesmo arquivo (template e style de AboutSection.vue),
# a execução recomendada é sequencial para manter a estabilidade do arquivo:
Task: "Update components/AboutSection.vue template to remove text labels..."
Task: "Update components/AboutSection.vue styles to configure .about__skill..."
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently (MVP da limpeza visual)
3. Add User Story 2 → Test independently (Ícones ausentes, tooltips e acessibilidade)
4. Validação final de polimento (Phase 5)

---

## Notes

- `[Story]` label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
