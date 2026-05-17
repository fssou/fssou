# Feature Specification: GitHub Profile README Cyberpunk

**Feature Branch**: `005-github-profile-readme`

**Created**: 2026-05-17

**Status**: Draft

**Input**: User description: "readme github profile. Ajustar readme.md que é apresentado no meu perfil do github. Pode usar o gravatar.com/fssou pra pegar os links que tenho hoje. utiliza uma fonte monospace, quero que siga uma estilo cyberpunk. Execute automatimente todos os passos até implementação"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Apresentação de Perfil Impactante no GitHub (Priority: P1)

Como um visitante do perfil do GitHub de Franclin (fssou) ou recrutador/desenvolvedor da comunidade, quero visualizar um README de perfil com design estético cyberpunk, tipografia monospace e informações estruturadas de forma imersiva, para compreender rapidamente sua experiência, stack tecnológica e áreas de interesse em um formato único e memorável.

**Why this priority**: O perfil do GitHub é o cartão de visitas principal de um Engenheiro de Software. Uma apresentação visual de alto impacto (estilo cyberpunk/terminal) destaca o perfil entre milhares de outros e transmite paixão por tecnologia e atenção aos detalhes.

**Independent Test**: Pode ser totalmente testado visualizando a renderização do arquivo `README.md` no GitHub (ou em um visualizador Markdown compatível com HTML/CSS inline) para garantir que a formatação, badges, ícones e alinhamentos funcionam perfeitamente em modo escuro.

**Acceptance Scenarios**:

1. **Given** que um visitante acessa o perfil `github.com/fssou`, **When** a página carrega o `README.md`, **Then** o visitante visualiza um cabeçalho imersivo estilo terminal cyberpunk com saudação ("Olá Universo!"), biografia resumida e destaques de carreira (desde 2012).
2. **Given** a seção de biografia e status atual, **When** o visitante lê as informações, **Then** identifica claramente o foco atual em Camunda Platform, AWS, Event Driven Architecture, Golang, Kotlin e contatos diretos.

---

### User Story 2 - Acesso Rápido a Redes e Links do Gravatar (Priority: P1)

Como um visitante ou colaborador em potencial, quero encontrar facilmente todos os links sociais e profissionais atualizados (LinkedIn, X/Twitter, Reddit, Telegram, Twitch, StackOverflow, GitLab, YouTube, etc.) espelhados a partir do perfil Gravatar, para me conectar com Franclin nas diversas plataformas.

**Why this priority**: A facilidade de conexão e networking é fundamental para colaboração em comunidades Tech e oportunidades profissionais.

**Independent Test**: Pode ser testado clicando em cada um dos links e ícones apresentados na seção de contato/redes do README para verificar se direcionam corretamente para as URLs extraídas do Gravatar.

**Acceptance Scenarios**:

1. **Given** a seção de conexões no README, **When** o visitante clica no ícone/link do LinkedIn, Twitter, Telegram ou YouTube, **Then** é redirecionado corretamente para a respectiva página externa do Franclin.
2. **Given** a seção de suporte/doações, **When** o visitante clica em PayPal, BuyMeACoffee ou Ko-fi, **Then** a respectiva página de suporte é aberta corretamente.

---

### User Story 3 - Exibição de Skills e Estatísticas do GitHub (Priority: P2)

Como um avaliador técnico ou entusiasta, quero visualizar as linguagens de programação, ferramentas e estatísticas de uso do GitHub de Franclin (top languages, streak, troféus), para avaliar seu nível de atividade e proficiência técnica.

**Why this priority**: Fornece prova social e métricas quantitativas do envolvimento contínuo com desenvolvimento de software e código aberto.

**Independent Test**: Pode ser testado verificando se as imagens de estatísticas do `github-readme-stats`, `streak-stats` e `profile-trophy` carregam corretamente com o tema escuro/cyberpunk adequado.

**Acceptance Scenarios**:

1. **Given** a seção de Skills e Estatísticas, **When** o README é renderizado, **Then** exibe os ícones das tecnologias (Java, TypeScript, Kotlin, Go, AWS, Docker, Kubernetes, etc.) e os cards dinâmicos do GitHub configurados com tema escuro (`theme=dark` ou customizado para combinar com o estilo cyberpunk).

### Edge Cases

- O que acontece quando o GitHub faz cache agressivo das imagens de estatísticas? (Os cards usam parâmetros padrão da API que lidam com cache ou atualizam periodicamente).
- Como o sistema lida com a visualização em dispositivos móveis? (O uso de tabelas, parágrafos e flexbox/alinhamentos em HTML/Markdown deve ser responsivo e não quebrar o layout horizontalmente).
- O que acontece se o visualizador do GitHub bloquear certos estilos CSS inline? (O design deve utilizar tags HTML suportadas pelo GitHub Markdown, como `<p>`, `<code>`, `<pre>`, `<h1>`, `<img>`, `<table>`, `<b>`, `<i>`, garantindo compatibilidade total).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O arquivo `README.md` MUST utilizar uma estética inspirada na cultura cyberpunk e terminais de linha de comando, com blocos de texto estilizados e tipografia monospace (`<code>`, `<pre>` ou fontes nativas de código do GitHub).
- **FR-002**: O arquivo MUST apresentar a biografia atualizada de Franclin (Frank / Ragnar, nascido em 1995, programando desde 2012, Engenheiro de Software).
- **FR-003**: O arquivo MUST incluir a lista de links consolidados obtidos do Gravatar (`x.com/frnclnslvss`, `reddit.com/user/fssou`, `github.com/fssou`, `linkedin.com/in/fssou`, `t.me/fssou`, `twitch.tv/fssou`, `stackoverflow.com/users/8739828/franclin`, `gitlab.com/fssou`, `youtube.com/channel/UCCMAliAVvB9M8rT6aGgVTbQ`, PayPal, email `f@francl.in`).
- **FR-004**: O arquivo MUST exibir badges ou ícones limpos e modernos para as linguagens e tecnologias (Java, TypeScript, Kotlin, Scala, Go, JavaScript, Bash, Python, Spring, Ktor, Node, AWS, Docker, Kubernetes, Kafka, Linux, Bancos de Dados, etc.).
- **FR-005**: O arquivo MUST integrar os cards dinâmicos de estatísticas do GitHub (`github-readme-stats`, `streak-stats`, `github-profile-trophy`) configurados com temas escuros compatíveis com a paleta cyberpunk.

### Key Entities *(include if feature involves data)*

- **Perfil (Profile)**: Dados biográficos, status atual (trabalhando com Camunda, aprendendo AWS/Go/Kotlin), informações de contato.
- **Conexões (Connections)**: URLs e handles de redes sociais e plataformas de desenvolvedor.
- **Skills (Tecnologias)**: Lista categorizada de linguagens, frameworks, devops e ferramentas.
- **Métricas (Metrics)**: Cards de estatísticas dinâmicas gerados por serviços externos.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: O arquivo `README.md` é renderizado sem erros de sintaxe Markdown ou HTML quebrado no visualizador do GitHub.
- **SC-002**: 100% dos links sociais e de contato extraídos do Gravatar estão funcionais e apontam para as URLs corretas.
- **SC-003**: O design apresenta uma identidade visual coesa no estilo cyberpunk/terminal, utilizando fontes monospace e paleta escura, diferenciando-se claramente de um README genérico.
- **SC-004**: Todos os badges de tecnologia e cards de estatísticas carregam corretamente com alta legibilidade em modo escuro.

## Assumptions

- Assumimos que o GitHub suporta as tags HTML básicas utilizadas para alinhamento e formatação (`<p>`, `<h1-6>`, `<img>`, `<a>`, `<code>`, `<pre>`, `<table>`, `<tr>`, `<td>`, `<b>`, `<br>`).
- Assumimos que os serviços externos (`api.iconify.design`, `github-readme-stats.vercel.app`, `github-readme-streak-stats.herokuapp.com`, `github-profile-trophy.vercel.app`) estarão operacionais para fornecer as imagens dinâmicas.
- Assumimos que o arquivo alvo da alteração é o `README.md` na raiz do repositório `fssou/fssou`.
