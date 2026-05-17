# UI Contract: Password Generator Redesign

Este contrato estabelece a estrutura de layout, componentes visuais e classes utilitárias do Tailwind CSS e Nuxt UI para a refatoração da página `pages/generators/passwords.vue`.

## Estrutura do Componente

O componente é dividido em três áreas visuais principais dentro de um contêiner centralizado (`.password-card`):

1. **Display e Ações Principais (Header)**: Exibe a senha gerada, alternador de visibilidade (texto/oculto), botão de regeneração, botão de cópia e botão de alternância do painel de opções.
2. **Medidor de Força (Strength Meter)**: Barra de progresso visual de 4 segmentos indicando o nível de segurança da senha.
3. **Painel de Opções Responsivo (Configuration Panel)**: Controle deslizante de comprimento (slider) e grade de opções de caracteres (checkboxes).

## Contrato de Classes e Estilização (Tailwind CSS)

As seguintes classes e regras de composição devem ser aplicadas para garantir o alinhamento com o design system do portfólio:

```html
<!-- Contêiner Principal -->
<div class="container mx-auto px-4 py-8 max-w-4xl">
    <div class="password-card bg-neutral-200 dark:bg-zinc-800/90 border border-neutral-300 dark:border-zinc-700/50 rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-sm transition-all duration-300 flex flex-col gap-6">
        
        <!-- Área de Display e Ações -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 bg-neutral-100 dark:bg-zinc-900/50 rounded-xl border border-neutral-300 dark:border-zinc-700/50">
            <input class="w-full text-xl md:text-2xl font-mono font-medium text-center sm:text-left bg-transparent border-none focus:ring-0 text-neutral-800 dark:text-neutral-100 overflow-hidden text-ellipsis" />
            
            <div class="flex items-center justify-center sm:justify-end gap-2 self-center w-full sm:w-auto">
                <!-- Botões de Ação (UIcon) -->
                <button class="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-200 dark:bg-zinc-800 hover:bg-neutral-300 dark:hover:bg-zinc-700 text-neutral-700 dark:text-neutral-300 transition-colors duration-200">
                    <UIcon name="..." class="text-xl" />
                </button>
            </div>
        </div>

        <!-- Medidor de Força -->
        <div class="flex flex-col gap-2">
            <div class="flex items-center justify-between text-sm font-medium">
                <span class="text-neutral-600 dark:text-neutral-400">Força da Senha</span>
                <span class="strength-label font-semibold uppercase tracking-wider text-xs">...</span>
            </div>
            <div class="flex h-2 w-full gap-1 overflow-hidden rounded-full bg-neutral-300 dark:bg-zinc-700">
                <!-- Segmentos dinâmicos -->
                <div class="h-full flex-1 transition-all duration-300"></div>
            </div>
        </div>

        <!-- Painel de Opções (Expansível/Integrado) -->
        <div class="options-panel flex flex-col gap-6 pt-4 border-t border-neutral-300 dark:border-zinc-700/50 transition-all duration-300">
            <!-- Slider de Comprimento -->
            <div class="flex flex-col gap-2">
                <div class="flex justify-between items-center text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    <span>Comprimento</span>
                    <span class="font-mono bg-neutral-300 dark:bg-zinc-700 px-2 py-0.5 rounded text-xs">12</span>
                </div>
                <input type="range" class="w-full h-2 bg-neutral-300 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-primary-500" />
            </div>

            <!-- Grade de Checkboxes -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label class="flex items-center gap-3 p-3 rounded-lg bg-neutral-100 dark:bg-zinc-900/40 border border-neutral-300 dark:border-zinc-700/50 cursor-pointer hover:border-primary-500/50 transition-colors">
                    <input type="checkbox" class="rounded border-neutral-400 dark:border-neutral-600 text-primary-500 focus:ring-primary-500 dark:bg-zinc-800" />
                    <span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">Letras Maiúsculas (A-Z)</span>
                </label>
            </div>
        </div>

    </div>
</div>
```

## Regras de Transição e Animação

- **Animação de Geração (`animatePasswordGeneration`)**: Durante a geração da senha, o display exibe caracteres aleatórios trocando rapidamente por 64 iterações (~1 segundo). O texto deve manter a fonte monoespaçada (`font-mono`) para evitar saltos visuais de largura durante a animação.
- **Feedback de Cópia**: O botão de cópia substitui seu ícone por `i-mdi-check` com a classe `text-green-500 dark:text-green-400` durante 2000ms.
- **Alternância do Painel de Opções**: Quando o botão de engrenagem (`i-mdi-cog`) é acionado, o contêiner `.options-panel` alterna sua visibilidade de forma suave no fluxo da página (`v-show` com transição ou expansão de altura).
