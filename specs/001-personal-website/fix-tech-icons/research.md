# Research & Decisions: Correção da Apresentação de Competências e Tecnologias

## 1. Identificação e Renderização de Ícones (TypeScript e Kubernetes)

- **Decision**: Utilizar os identificadores oficiais do pacote `@iconify/json` para o conjunto Devicon (`i-devicon-typescript` e `i-devicon-kubernetes`), garantindo que o componente `UIcon` do Nuxt UI consiga localizá-os e renderizá-los corretamente.
- **Rationale**: O Nuxt UI integra nativamente o Iconify através do Tailwind/UnoCSS. Garantir a nomenclatura exata e a presença do pacote de ícones resolve o problema de ícones ausentes sem necessidade de importar SVGs externos ou bibliotecas pesadas.
- **Alternatives considered**: Importar arquivos SVG estáticos diretamente para a pasta `public/icons/`. Rejeitado por aumentar a complexidade de manutenção e quebrar a padronização do uso de `UIcon` no restante do projeto.

## 2. Implementação de Tooltips Interativos

- **Decision**: Envolver o contêiner de cada ícone de tecnologia com o componente `UTooltip` nativo do Nuxt UI (`<UTooltip :text="skill.name"> ... </UTooltip>`).
- **Rationale**: O usuário solicitou a remoção dos rótulos de texto visíveis para obter um visual mais limpo, mas exigiu um mecanismo de auxílio para quem não conhece os logotipos. O `UTooltip` oferece uma experiência elegante, nativa do design system e com animações suaves de transição.
- **Alternatives considered**: Criar um componente de tooltip customizado do zero usando CSS puro ou diretivas do Vue. Rejeitado por reinventar a roda e potencialmente introduzir inconsistências visuais ou problemas de z-index.

## 3. Acessibilidade e Atributos de Auxílio (Screen Readers)

- **Decision**: Adicionar o atributo `aria-label="skill.name"` e `role="img"` no contêiner do ícone (`<div class="about__skill" :aria-label="skill.name" role="img">`).
- **Rationale**: Sem o texto visível na tela, usuários que dependem de leitores de tela (screen readers) perderiam completamente a informação sobre quais tecnologias o profissional domina. A inclusão de `aria-label` garante que a acessibilidade seja mantida e aprimorada.
- **Alternatives considered**: Manter um elemento `<span>` com a classe `sr-only` (screen-reader only) dentro do contêiner. Ambas as abordagens são válidas, mas o uso de `aria-label` no contêiner interativo do tooltip é mais limpo e direto no template Vue.

## 4. Padronização e Responsividade da Grade de Ícones

- **Decision**: Ajustar as classes CSS do contêiner `.about__skill` para atuar como um quadrado com proporções fixas (`aspect-square`, `flex items-center justify-center`, `p-4`), removendo o espaçamento horizontal anterior que era destinado ao texto.
- **Rationale**: Em telas menores, a presença de texto de tamanhos variados e ícones com larguras desiguais (como o wordmark da AWS) causava quebra de layout e tamanho irregular. Forçar uma caixa delimitadora quadrada e centralizada garante harmonia visual perfeita em qualquer dispositivo.
- **Alternatives considered**: Usar consultas de mídia (`@media`) complexas para ajustar o padding de cada ícone individualmente. Rejeitado por ser frágil e difícil de escalar caso novas tecnologias sejam adicionadas no futuro.
