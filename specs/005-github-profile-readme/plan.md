# Implementation Plan: GitHub Profile README Cyberpunk

**Branch**: `005-github-profile-readme` | **Date**: 2026-05-17 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/005-github-profile-readme/spec.md`

## Summary

Reformulação completa do arquivo `README.md` do perfil do GitHub de Franclin (`fssou`), adotando uma estética cyberpunk imersiva estilo terminal de linha de comando com tipografia monospace (`<pre>`, `<code>`), incorporando e espelhando todos os links atualizados do Gravatar e otimizando os cards dinâmicos de estatísticas para o modo escuro.

## Technical Context

**Language/Version**: Markdown, HTML5 (subconjunto suportado pelo GitHub Markdown CSP)

**Primary Dependencies**: api.iconify.design, shields.io, github-readme-stats, github-readme-streak-stats, github-profile-trophy

**Storage**: N/A (Arquivo estático no repositório)

**Testing**: Validação de renderização visual e verificação de links de redirecionamento

**Target Platform**: GitHub Web Profile (Desktop e Mobile)

**Project Type**: GitHub Profile README

**Performance Goals**: Carregamento instantâneo de ícones e badges

**Constraints**: Restrições de segurança do GitHub (CSP bloqueia tags `<style>`, `<script>`, fontes externas e iframes)

**Scale/Scope**: Único arquivo `README.md` na raiz do repositório `fssou/fssou`

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Simplicity**: O design utiliza HTML limpo e tags semânticas nativas (`<pre>`, `<code>`, `<p>`, `<table>`) sem hacks complexos que possam quebrar em futuras atualizações do GitHub.
- **Observability**: Todos os links e badges possuem URLs explícitas e fáceis de auditar e verificar.
- **Testability**: Cada link e imagem de estatística pode ser verificado e testado independentemente.

## Project Structure

### Documentation (this feature)

```text
specs/005-github-profile-readme/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output (/speckit-plan command)
├── data-model.md        # Phase 1 output (/speckit-plan command)
├── quickstart.md        # Phase 1 output (/speckit-plan command)
├── contracts/           # Phase 1 output (/speckit-plan command)
│   └── ui-contract.md
└── tasks.md             # Phase 2 output (/speckit-tasks command)
```

### Source Code (repository root)

```text
/
└── README.md            # Arquivo alvo da reformulação
```

**Structure Decision**: Modificação direta do arquivo `README.md` existente na raiz do repositório.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

Nenhuma violação identificada. A abordagem mantém a simplicidade e total conformidade com as diretrizes do projeto.
