# Tasks: GitHub Profile README Cyberpunk

**Input**: Design documents from `/specs/005-github-profile-readme/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/ui-contract.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create project structure per implementation plan in specs/005-github-profile-readme/
- [X] T002 [P] Verify markdown preview tools in editor

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [X] T003 Backup existing README.md content or verify git tracking in README.md

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Apresentação de Perfil Impactante no GitHub (Priority: P1) 🎯 MVP

**Goal**: Criar o visual imersivo de terminal de comando cyberpunk com banner ASCII, saudação e biografia atualizada em fonte monospace.

**Independent Test**: Verificar se o cabeçalho e as informações de status carregam corretamente na pré-visualização Markdown do editor com fundo escuro.

### Implementation for User Story 1

- [X] T004 [US1] Implementar o cabeçalho estilo terminal cyberpunk com ASCII banner e biografia no arquivo README.md
- [X] T005 [US1] Implementar a seção de Status Atual (Camunda, AWS, Golang, Kotlin) no arquivo README.md

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Acesso Rápido a Redes e Links do Gravatar (Priority: P1)

**Goal**: Disponibilizar botões/badges interativos para todas as redes sociais e profissionais de Franclin espelhadas do Gravatar.

**Independent Test**: Clicar em cada badge gerado para confirmar o redirecionamento correto para as páginas externas.

### Implementation for User Story 2

- [X] T006 [P] [US2] Implementar badges interativos para todas as conexões extraídas do Gravatar (LinkedIn, Twitter, Reddit, Telegram, Twitch, StackOverflow, GitLab, YouTube, PayPal) no arquivo README.md

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Exibição de Skills e Estatísticas do GitHub (Priority: P2)

**Goal**: Apresentar a stack de tecnologias com ícones modernos e os cards de estatísticas do GitHub configurados com tema escuro.

**Independent Test**: Confirmar o carregamento das imagens dinâmicas e alinhamento dos ícones no modo escuro.

### Implementation for User Story 3

- [X] T007 [P] [US3] Atualizar e alinhar a matriz de ícones de tecnologia (Java, TypeScript, Kotlin, Go, AWS, Docker, Kubernetes, etc.) no arquivo README.md
- [X] T008 [US3] Configurar os cards dinâmicos de estatísticas do GitHub com tema escuro/cyberpunk no arquivo README.md

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [X] T009 Revisar alinhamento geral, espaçamento e tags HTML no arquivo README.md para garantir renderização perfeita no GitHub
- [X] T010 Executar validação de links e imagens descrita em specs/005-github-profile-readme/quickstart.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - No dependencies on other stories
