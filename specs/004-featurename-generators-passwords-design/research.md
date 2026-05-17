# Research & Decisions: Password Generator Redesign

## 1. Abordagem de Estilização e Design System

- **Decision**: Utilizar as classes utilitárias do Tailwind CSS combinadas com componentes nativos do Nuxt UI (como `UIcon`, botões estilizados e inputs customizados), aproveitando o arquivo de referência `@reference "~/assets/css/main.tw.reference.css"` já configurado no projeto.
- **Rationale**: Manter a consistência visual com o restante do portfólio (modo escuro, cantos arredondados suaves `rounded-2xl`, sombras refinadas `shadow-lg` e tipografia limpa) sem introduzir bibliotecas de componentes externas ou arquivos CSS monolíticos.
- **Alternatives considered**: Escrever CSS puro ou importar uma biblioteca externa de componentes de formulário. Rejeitado por quebrar a padronização do ecossistema Nuxt UI/Tailwind adotado no projeto.

## 2. Layout Responsivo e Ergonomia de Opções

- **Decision**: Refatorar o contêiner principal da senha (`.password-card`) para usar um layout flexível e fluido (`flex flex-col gap-6`), com os controles de opções (tamanho e checkboxes) dispostos em um grid responsivo (`grid grid-cols-1 sm:grid-cols-2 gap-4`).
- **Rationale**: A implementação anterior utilizava larguras fixas em porcentagem (`max-w-[86%]`) e posicionamento absoluto para um menu suspenso (`options-container`), o que causava sobreposições ou quebra de layout em telas menores (mobile). Integrar as opções de forma limpa e expansível diretamente no fluxo do cartão melhora a ergonomia e elimina problemas de z-index.
- **Alternatives considered**: Manter o menu suspenso (dropdown) flutuante com cálculos complexos de posicionamento via JavaScript. Rejeitado por ser desnecessariamente complexo e propenso a falhas em dispositivos móveis.

## 3. Indicador de Força da Senha (Visual Feedback)

- **Decision**: Otimizar a exibição das barras de força (`strength-meter`) utilizando uma grade de 4 segmentos horizontais com transição de cor dinâmica gerada pelo composable existente `usePasswordStrength`.
- **Rationale**: O usuário precisa de um feedback visual imediato e compreensível sobre a segurança da senha configurada. O composable atual já calcula o score (0 a 4) corretamente; a camada visual apenas refletirá esse estado com cores semânticas (vermelho, laranja, amarelo, verde) e rótulos acessíveis.
- **Alternatives considered**: Criar um gráfico circular ou medidor customizado em canvas. Rejeitado por ser excessivo para o propósito de uma ferramenta rápida e limpa.

## 4. Feedback de Cópia (Clipboard)

- **Decision**: Manter a substituição temporária do ícone de cópia (`i-mdi-content-copy`) pelo ícone de sucesso (`i-mdi-check` verde) durante 2 segundos ao clicar, gerenciada pelo estado `showClipboardCheck`.
- **Rationale**: É o padrão de UX mais elegante e reconhecível para ações de cópia na web moderna, evitando alertas intrusivos (popups ou modais) que interrompem o fluxo do usuário.
- **Alternatives considered**: Exibir um componente de Toast/Snackbar na tela. Rejeitado por adicionar complexidade visual desnecessária para uma ação simples e autocontida no cartão.
