# UI Contract: Exibição de Competências e Tecnologias

Este contrato define a estrutura da interface de usuário (UI) e os requisitos de acessibilidade para a grade de competências no componente `AboutSection.vue`.

## Estrutura do Contêiner da Grade

A grade de tecnologias deve ser organizada em um layout flexível e responsivo, garantindo que os itens mantenham proporções exatas e alinhamento centralizado.

```html
<!-- Estrutura Contratual de UI para cada Competência -->
<div class="about__skills-grid">
    <!-- O UTooltip envolve o item para fornecer discoverability sem poluir a tela -->
    <UTooltip
        v-for="skill in skills"
        :key="skill.name"
        :text="skill.name"
    >
        <!-- O contêiner do ícone implementa os atributos de acessibilidade (aria-label e role) -->
        <div
            class="about__skill"
            :aria-label="skill.name"
            role="img"
        >
            <UIcon :name="skill.icon" class="about__skill-icon" />
        </div>
    </UTooltip>
</div>
```

## Especificação de Estilos e Comportamento (Tailwind / UnoCSS)

### Contêiner do Item (`.about__skill`)

- **Dimensões e Proporção**: Deve utilizar `aspect-square`, `w-16 h-16` (ou similar) para garantir que o cartão seja um quadrado perfeito.
- **Alinhamento Interno**: Deve utilizar `flex items-center justify-center` para centralizar o ícone vertical e horizontalmente.
- **Interação (Hover)**: Transição suave de borda e leve elevação (`transition-all duration-200 hover:border-indigo-200 hover:-translate-y-0.5`).
- **Acessibilidade**: Elemento focado via navegação por teclado (`tabindex="0"`) deve ativar o tooltip e ser legível por leitores de tela.

### Ícone (`.about__skill-icon`)

- **Tamanho**: Deve utilizar `text-3xl` ou `text-4xl` para garantir visibilidade e nitidez em qualquer resolução.

## Comportamento Esperado do UTooltip

- **Posicionamento**: Padrão do Nuxt UI (geralmente superior ou inferior ao elemento focado, ajustando-se automaticamente para não cortar na borda da tela).
- **Gatilho**: Ativado por eventos de `mouseenter` (mouse hover) e `focus` (navegação por teclado).
