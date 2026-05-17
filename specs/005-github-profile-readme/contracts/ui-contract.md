# UI & Layout Contract: GitHub Profile README Cyberpunk

Este contrato define a estrutura visual, a hierarquia de seções e os elementos estilísticos do arquivo `README.md` para garantir a estética de terminal cyberpunk.

## 1. Estrutura Geral e Layout

O documento é estruturado sequencialmente em blocos temáticos, utilizando separadores visuais ASCII/Unicode e blocos de código/monospace para imersão no tema de terminal de comando.

```text
+───────────────────────────────────────────────────────────────────────────+
│                       [ CABEÇALHO / BANNER ASCII ]                        │
│   >_ SYSTEM: FRANCLIN (FRANK/RAGNAR) // EST: 1995 // DEV SINCE: 2012      │
+───────────────────────────────────────────────────────────────────────────+
│                                                                           │
│   [ STATUS & RUNTIME INFO ]                                               │
│   ├── 🔭 Current Process: Camunda Platform                                │
│   ├── 🌱 Learning Buffer: AWS, Event Driven Arch, Golang, Kotlin          │
│   ├── 💬 Ping: Spring Boot, Java                                          │
│   └── 📫 Broadcast: f@francl.in                                           │
│                                                                           │
+───────────────────────────────────────────────────────────────────────────+
│                                                                           │
│   [ LINGUAGENS & STACK TECNOLÓGICA ]                                      │
│   ( Matriz de ícones Iconify alinhados e estilizados em modo escuro )     │
│                                                                           │
+───────────────────────────────────────────────────────────────────────────+
│                                                                           │
│   [ CONEXÕES & PROTOCOLOS DE COMUNICAÇÃO (Gravatar Links) ]               │
│   ( Badges interativos: LinkedIn | X | Reddit | Telegram | YouTube ... )  │
│                                                                           │
+───────────────────────────────────────────────────────────────────────────+
│                                                                           │
│   [ TELEMETRIA E ESTATÍSTICAS DO GITHUB ]                                 │
│   ( Cards dinâmicos com tema escuro/cyberpunk )                           │
│                                                                           │
+───────────────────────────────────────────────────────────────────────────+
```

## 2. Padrões de Estilização e HTML Inline

Para alcançar a estética cyberpunk sem violar as regras de segurança (CSP) do GitHub Markdown, o layout utiliza as seguintes construções:

### Cabeçalhos e Títulos Monospace
```html
<h3><code>&gt;_ SYSTEM_INFO // FRANCLIN</code></h3>
```

### Blocos de Texto e Biografia
Uso de `<pre>` ou `<code>` para forçar a renderização com fonte monospace e fundo escuro contrastante.

### Matriz de Ícones (Skills)
Agrupamento em parágrafos `<p align="center">` com ícones do `api.iconify.design` configurados com `width="40" height="40"`.

### Badges de Conexão
Uso de badges gerados via `shields.io` com estilo `for-the-badge` e cores personalizadas (ex: preto `#0d1117`, ciano `#00ffcc`, magenta `#ff007f`).
