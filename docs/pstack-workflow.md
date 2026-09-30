# pstack Workflow (resumo)

Plugin do Cursor criado por poteto (Lauren Tan). Transforma o agente em um fluxo de engenharia com playbooks, skills e princípios.

## Instalação

1. `/add-plugin pstack`
2. `/setup-pstack` — escolhe reasoning budget e modelos
3. `/poteto-mode` — ativa o roteador

## Fluxo resumido (playbook de feature)

1. **how** — entende o subsistema afetado
2. **architect** — explora designs em paralelo
3. **Throughput checkpoint** — define o que bloqueia, o que paraleliza, o que serializa
4. **Delegação** — subagente implementa com escopo e critérios definidos; usa **arena** se houver alternativas de design
5. **Verificação** — testa no fluxo real, não no build verde
6. **Commits** — pequenos, ordenados, cada um buildado e verificado
7. **interrogate** — se o design for contestado, revisão multi-modelo
8. **Opening a PR** — abre o PR com conventional commit e briefing

## Modelos (default)

- Código → grok
- Julgamento e prosa → opus
- Painel padrão: opus / sol / grok

## Observação

Dobra tempo e custo de tokens vs. fluxo simples. Vale pra first issue e tarefas que exigem correção.

---

Criado em 30/09/2026 via Eve (Grok).