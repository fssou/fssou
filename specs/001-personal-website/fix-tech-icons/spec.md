# Feature Specification: Correção da Apresentação de Competências e Tecnologias

**Feature Branch**: `002-fix-tech-icons`

**Created**: 2026-05-17

**Status**: Draft

**Input**: User description: "corrigir card de skill/tecnologias que apresenta anomalias na apresentação dos icones como tamanho irregular em telas menores e não apresenta icone para TypeScript e Kubernetes"

## Clarifications

### Session 2026-05-17

- Q: Como os itens da grade de tecnologias devem ser exibidos visualmente e identificados pelos usuários? → A: Retirar os nomes visuais das tecnologias, mantendo apenas os ícones para identificação limpa. Para auxiliar no reconhecimento e acessibilidade, adicionar um tooltip interativo e o atributo alt/aria-label em cada item.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Visualização Consistente de Ícones em Dispositivos Móveis (Priority: P1)

Como um visitante do portfólio acessando via smartphone ou tablet, quero visualizar os ícones das tecnologias com tamanho e alinhamento consistentes, para que a interface transmita profissionalismo e seja fácil de navegar.

**Why this priority**: A responsividade e a consistência visual são fundamentais para a primeira impressão do usuário, especialmente porque grande parte dos acessos ocorre via dispositivos móveis.

**Independent Test**: Pode ser testado redimensionando a janela do navegador para larguras de tela de dispositivos móveis (ex: 320px, 375px, 425px) e verificando se nenhum ícone sofre distorção, achatamento ou variação desproporcional de tamanho em relação aos demais.

**Acceptance Scenarios**:

1. **Given** que o usuário acessa a seção de sobre/tecnologias em uma tela de 375px de largura, **When** visualiza a grade de competências, **Then** todos os ícones devem apresentar as mesmas dimensões visuais (ex: proporção 1:1) sem transbordar o contorno do cartão.
2. **Given** que o usuário alterna a orientação do dispositivo de retrato para paisagem, **When** a grade se reorganiza, **Then** o espaçamento entre os ícones na grade deve permanecer uniforme e alinhado.

---

### User Story 2 - Exibição Completa do Catálogo de Competências (Priority: P1)

Como um recrutador ou líder técnico analisando o perfil, quero identificar prontamente que o profissional domina TypeScript e Kubernetes através de seus respectivos logotipos ou ícones oficiais, para que eu possa avaliar a aderência do candidato aos requisitos da vaga.

**Why this priority**: A ausência de representação visual para tecnologias-chave pode levar o avaliador a ignorar competências críticas do perfil do profissional.

**Independent Test**: Pode ser testado inspecionando visualmente a seção de tecnologias e confirmando a presença de ícones reconhecíveis e renderizados corretamente para as competências de TypeScript e Kubernetes.

**Acceptance Scenarios**:

1. **Given** que o cartão de tecnologias está carregado na tela, **When** o usuário posiciona o cursor (hover) ou foca no ícone de "TypeScript", **Then** um tooltip contendo o nome "TypeScript" deve ser exibido e o atributo de acessibilidade (alt/aria-label) deve estar presente.
2. **Given** que o cartão de tecnologias está carregado na tela, **When** o usuário posiciona o cursor (hover) ou foca no ícone de "Kubernetes", **Then** um tooltip contendo o nome "Kubernetes" deve ser exibido e o atributo de acessibilidade (alt/aria-label) deve estar presente.

### Edge Cases

- O que acontece quando um ícone específico falha ao carregar ou não é encontrado no repositório de recursos visuais? (O sistema deve exibir um ícone de fallback genérico ou manter o alinhamento adequado apenas com o texto, sem quebrar o layout da grade).
- Como o sistema se comporta em resoluções de tela extremamente pequenas, abaixo de 320px? (Os cartões devem ajustar a disposição da grade e manter os ícones escalados proporcionalmente sem sobreposição).
- Como o sistema lida com o modo de alto contraste ou temas escuros/claros em relação às cores dos ícones? (Os ícones devem manter legibilidade e contraste adequado em qualquer tema ativo).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O sistema MUST exibir uma grade de competências contendo exclusivamente representações visuais (ícones) para cada item listado, sem rótulos de texto visíveis na grade de forma permanente.
- **FR-002**: O sistema MUST garantir que todos os ícones exibidos na grade de competências tenham proporções de aspecto fixas e uniformes (ex: 1:1), prevenindo distorções visuais em qualquer resolução de tela.
- **FR-003**: O sistema MUST incluir representações visuais devidamente renderizadas e reconhecíveis para as tecnologias "TypeScript" e "Kubernetes".
- **FR-004**: O sistema MUST implementar um mecanismo de contenção e alinhamento flexível que preserve o espaçamento interno dos itens da grade em dispositivos móveis.
- **FR-005**: O sistema MUST fornecer um comportamento de fallback visual elegante caso a fonte primária de um ícone fique indisponível.
- **FR-006**: O sistema MUST fornecer um tooltip interativo (acionado por hover ou foco) para cada ícone da grade, exibindo o nome descritivo da tecnologia.
- **FR-007**: O sistema MUST incluir atributos de acessibilidade (como alt ou aria-label) em cada item da grade, garantindo que leitores de tela identifiquem corretamente o nome da tecnologia.

### Key Entities

- **Competência Tecnológica (Skill)**: Representa uma ferramenta ou linguagem dominada pelo profissional, contendo atributos como nome, identificador do recurso visual (ícone) e cor de destaque.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% das tecnologias listadas no cartão de competências (incluindo TypeScript e Kubernetes) apresentam seus respectivos ícones renderizados corretamente em todos os navegadores modernos.
- **SC-002**: Nenhuma variação ou distorção de tamanho de ícone excede o limite de 0% (todos os ícones mantêm a exata mesma caixa de delimitação e proporção de aspecto) em resoluções entre 320px e 2560px.
- **SC-003**: O tempo de carregamento e renderização dos ícones não adiciona atraso perceptível à exibição da página (carregamento inicial da seção inferior a 500ms).
- **SC-004**: 100% dos ícones da grade de tecnologias possuem tooltips funcionais e atributos de acessibilidade (alt/aria-label) configurados com o respectivo nome da competência.

## Assumptions

- Presume-se que o catálogo de tecnologias base permanecerá o mesmo da versão atual, com foco na correção da exibição dos itens já existentes.
- Presume-se que o design system existente suporta a padronização de dimensões e classes utilitárias necessárias para a correção do layout.
- Presume-se que os recursos visuais ou fontes de ícones necessários estão disponíveis ou podem ser referenciados na arquitetura atual do projeto.
