<script setup lang="ts">
interface ColorRole {
    name: string;
    description: string;
    value: string;
    textColor?: string;
}

const surfaceColors: ColorRole[] = [
    {
        name: 'Primary',
        description: 'Container principal',
        value: 'var(--md-sys-color-surface)',
        textColor: 'var(--md-sys-color-on-surface)'
    },
    {
        name: 'Surface Dim',
        description: 'Superfície com menor ênfase',
        value: 'var(--md-sys-color-surface-dim)',
        textColor: 'var(--md-sys-color-on-surface)'
    },
    {
        name: 'Surface Bright',
        description: 'Superfície com maior ênfase',
        value: 'var(--md-sys-color-surface-bright)',
        textColor: 'var(--md-sys-color-on-surface)'
    },
    {
        name: 'Surface Container Lowest',
        description: 'Contêiner de superfície com menor elevação',
        value: 'var(--md-sys-color-surface-container-lowest)',
        textColor: 'var(--md-sys-color-on-surface)'
    },
    {
        name: 'Surface Container Low',
        description: 'Contêiner de superfície com baixa elevação',
        value: 'var(--md-sys-color-surface-container-low)',
        textColor: 'var(--md-sys-color-on-surface)'
    },
    {
        name: 'Surface Container',
        description: 'Contêiner de superfície padrão',
        value: 'var(--md-sys-color-surface-container)',
        textColor: 'var(--md-sys-color-on-surface)'
    },
    {
        name: 'Surface Container High',
        description: 'Contêiner de superfície com alta elevação',
        value: 'var(--md-sys-color-surface-container-high)',
        textColor: 'var(--md-sys-color-on-surface)'
    },
    {
        name: 'Surface Container Highest',
        description: 'Contêiner de superfície com maior elevação',
        value: 'var(--md-sys-color-surface-container-highest)',
        textColor: 'var(--md-sys-color-on-surface)'
    }
];

const textColors: ColorRole[] = [
    {
        name: 'On Surface',
        description: 'Texto primário em superfícies',
        value: 'var(--md-sys-color-on-surface)',
        textColor: 'var(--md-sys-color-surface)'
    },
    {
        name: 'On Surface Variant',
        description: 'Texto secundário em superfícies',
        value: 'var(--md-sys-color-on-surface-variant)',
        textColor: 'var(--md-sys-color-surface)'
    },
    {
        name: 'Primary',
        description: 'Texto com cor primária',
        value: 'var(--md-sys-color-primary)',
        textColor: 'var(--md-sys-color-on-primary)'
    },
    {
        name: 'Secondary',
        description: 'Texto com cor secundária',
        value: 'var(--md-sys-color-secondary)',
        textColor: 'var(--md-sys-color-on-secondary)'
    }
];

const stateColors: ColorRole[] = [
    {
        name: 'Primary Container',
        description: 'Contêiner com cor primária',
        value: 'var(--md-sys-color-primary-container)',
        textColor: 'var(--md-sys-color-on-primary-container)'
    },
    {
        name: 'Secondary Container',
        description: 'Contêiner com cor secundária',
        value: 'var(--md-sys-color-secondary-container)',
        textColor: 'var(--md-sys-color-on-secondary-container)'
    },
    {
        name: 'Tertiary Container',
        description: 'Contêiner com cor terciária',
        value: 'var(--md-sys-color-tertiary-container)',
        textColor: 'var(--md-sys-color-on-tertiary-container)'
    },
    {
        name: 'Error',
        description: 'Cor para erros',
        value: 'var(--md-sys-color-error)',
        textColor: 'var(--md-sys-color-on-error)'
    },
    {
        name: 'Error Container',
        description: 'Contêiner para erros',
        value: 'var(--md-sys-color-error-container)',
        textColor: 'var(--md-sys-color-on-error-container)'
    }
];

const accentColors: ColorRole[] = [
    {name: 'Primary', description: 'Cor primária do tema', value: 'var(--md-sys-color-primary)', textColor: 'var(--md-sys-color-on-primary)'},
    {
        name: 'Secondary',
        description: 'Cor secundária do tema',
        value: 'var(--md-sys-color-secondary)',
        textColor: 'var(--md-sys-color-on-secondary)'
    },
    {
        name: 'Tertiary',
        description: 'Cor terciária do tema',
        value: 'var(--md-sys-color-tertiary)',
        textColor: 'var(--md-sys-color-on-tertiary)'
    }
];
</script>

<template>
    <div class="color-roles-container">
        <h1>Papéis de Cores (Color Roles)</h1>
        <p class="description">
            Cores do sistema Material Design 3 e seus papéis na interface do usuário.
            Essas cores são usadas para criar uma experiência coesa e hierárquica.
        </p>

        <section>
            <h2>Cores de Superfície</h2>
            <p>Cores usadas para diferentes níveis de superfícies na interface</p>
            <div class="color-grid">
                <div
                    v-for="color in surfaceColors"
                    :key="color.name"
                    class="color-card"
                    :style="{ backgroundColor: color.value, color: color.textColor }"
                >
                    <div class="color-info">
                        <span class="color-name">{{ color.name }}</span>
                        <span class="color-description">{{ color.description }}</span>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <h2>Cores de Texto</h2>
            <p>Cores usadas para textos em diferentes contextos</p>
            <div class="color-grid">
                <div
                    v-for="color in textColors"
                    :key="color.name"
                    class="color-card"
                    :style="{ backgroundColor: color.value, color: color.textColor }"
                >
                    <div class="color-info">
                        <span class="color-name">{{ color.name }}</span>
                        <span class="color-description">{{ color.description }}</span>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <h2>Cores de Estado</h2>
            <p>Cores usadas para indicar diferentes estados de componentes</p>
            <div class="color-grid">
                <div
                    v-for="color in stateColors"
                    :key="color.name"
                    class="color-card"
                    :style="{ backgroundColor: color.value, color: color.textColor }"
                >
                    <div class="color-info">
                        <span class="color-name">{{ color.name }}</span>
                        <span class="color-description">{{ color.description }}</span>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <h2>Cores de Destaque</h2>
            <p>Cores de destaque principais do tema</p>
            <div class="color-grid">
                <div
                    v-for="color in accentColors"
                    :key="color.name"
                    class="color-card"
                    :style="{ backgroundColor: color.value, color: color.textColor }"
                >
                    <div class="color-info">
                        <span class="color-name">{{ color.name }}</span>
                        <span class="color-description">{{ color.description }}</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
@reference "~/assets/css/main.tw.reference.css";
.color-roles-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

h2 {
    font-size: 1.5rem;
    margin: 2rem 0 1rem;
}

.description {
    margin-bottom: 2rem;
    line-height: 1.5;
}

section {
    margin-bottom: 3rem;
}

.color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
}

.color-card {
    height: 100px;
    border-radius: 16px;
    display: flex;
    align-items: flex-end;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.2s ease;
}

.color-card:hover {
    transform: translateZ(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.color-info {
    background-color: rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
}

.color-name {
    font-weight: bold;
    margin-bottom: 0.25rem;
}

.color-description {
    font-size: 0.85rem;
    opacity: 0.9;
}
</style>
