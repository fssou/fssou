# Technical Research: GitHub Profile README Cyberpunk

## 1. Estética e Tipografia Cyberpunk / Terminal

- **Decision**: Utilizar blocos estilizados com tags HTML inline suportadas pelo GitHub (`<pre>`, `<code>`, `<table>`, `<blockquote>`) combinadas com caracteres e bordas ASCII/Unicode (ex: `╔════════════════════╗`, `╠════════════════════╣`), paleta de cores de fundo escuras/néon (quando aplicável via imagens geradas ou badges) e alinhamentos precisos para simular a interface de um terminal futurista/cyberpunk.
- **Rationale**: O GitHub sanitiza tags `<style>` e CSS externo em arquivos Markdown, permitindo apenas um subconjunto restrito de HTML e atributos de estilo. O uso de tags semânticas de código (`<pre>`, `<code>`) força a renderização em fonte monospace nativa do sistema do usuário (Consolas, Fira Code, JetBrains Mono, Courier New), garantindo a estética de terminal sem depender de fontes externas bloqueadas pelo CSP do GitHub.
- **Alternatives considered**: Tentativa de injeção de `<style>` com fontes do Google Fonts (rejeitado pois o GitHub remove tags `<style>` por segurança).

## 2. Integração de Links do Gravatar

- **Decision**: Mapear os links extraídos diretamente do Gravatar (`x.com/frnclnslvss`, `reddit.com/user/fssou`, `github.com/fssou`, `linkedin.com/in/fssou`, `t.me/fssou`, `twitch.tv/fssou`, `stackoverflow.com/users/8739828/franclin`, `gitlab.com/fssou`, `youtube.com/channel/UCCMAliAVvB9M8rT6aGgVTbQ`, PayPal, e-mail) em botões/badges interativos gerados via Iconify e shields.io.
- **Rationale**: Mantém a consistência e centralização de identidade proposta pelo usuário, oferecendo atalhos visuais elegantes e de rápido acesso para todas as suas redes.
- **Alternatives considered**: Uso de links em texto puro (rejeitado por ter menor impacto visual em um design cyberpunk).

## 3. Badges de Tecnologia e Estatísticas Dinâmicas

- **Decision**: Utilizar ícones do `api.iconify.design` e badges do `shields.io` com estilo `for-the-badge` ou `flat-square` em cores néon/escuras (ex: `#0d1117`, `#00ffcc`, `#ff007f`), e manter/otimizar os cards dinâmicos do GitHub (`github-readme-stats`, `streak-stats`, `profile-trophy`) com o parâmetro `theme=dark` ou paletas customizadas (`bg_color=0d1117`, `title_color=00ffcc`, `text_color=c9d1d9`).
- **Rationale**: Cria uma harmonia visual completa com o tema escuro do GitHub e o estilo cyberpunk de terminal.
- **Alternatives considered**: Criação de imagens estáticas de estatísticas (rejeitado pois estatísticas devem ser dinâmicas e atualizadas em tempo real).
