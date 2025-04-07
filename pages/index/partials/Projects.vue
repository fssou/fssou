<script lang="ts" setup>
import {ref} from "vue";

interface Project {
    id: string;
    name: string;
    description: string;
    path: string;
    icon: string;
}

const projects = ref<Project[]>([
    {
        id: "passwords",
        name: "Gerador de Senhas",
        description: "Ferramenta para criar senhas seguras com várias opções de personalização",
        path: "/generators/passwords",
        icon: "i-mdi-key-outline"
    },
    // Outros projetos podem ser adicionados aqui
]);
</script>

<template>
    <div>
        <div class="grid h-full grid-cols-2 grid-rows-2 gap-6">
            <NuxtLink
                v-for="project in projects"
                :key="project.id"
                :to="project.path"
                class="project-card"
                :alt="project.description"
            >
                <div class="card-content">
                    <div class="icon-container">
                        <UIcon :name="project.icon" size="25"/>
                    </div>
                    <div class="text-container">
                        <h3 class="project-title">{{ project.name }}</h3>
                        <p class="project-description">{{ project.description }}</p>
                    </div>
                </div>
            </NuxtLink>

            <!-- Placeholder para projetos futuros -->
            <div v-if="projects.length < 4"
                 v-for="i in 4 - projects.length"
                 :key="`placeholder-${i}`"
                 class="project-placeholder"
            >
                <div class="text-center text-black dark:text-white">
                    <div class="i-mdi-build-outline mb-2 text-3xl"/>
                    <p>Em breve</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
@reference "~/assets/css/main.tw.reference.css";

.project-card {
    box-shadow: rgba(0, 0, 0, 0.06) 0 0 0 1px inset, rgba(0, 0, 0, 0.04) 0 2px 4px 0;
    @apply relative p-4 w-full h-full;
    @apply flex flex-col flex-nowrap items-start justify-between;
    @apply rounded-[20px];
    @apply cursor-pointer select-none overflow-hidden;
    @apply transition duration-850 ease-in-out will-change-transform;
    @apply bg-zinc-200;
    @variant hover {
        @apply text-white;
        @apply bg-primary-400;
    }
    @variant dark {
        @apply bg-zinc-800;
    }
}

.project-placeholder {
    box-shadow: rgba(0, 0, 0, 0.02) 0 0 0 1px inset;
    @apply relative p-4 w-full h-full;
    @apply flex flex-col flex-nowrap items-center justify-center;
    @apply rounded-[20px];
    @apply select-none overflow-hidden;
    @apply border border-dashed border-gray-300;
    @apply bg-zinc-200;
    @variant dark {
        @apply bg-zinc-800;
    }
}

.card-content {
    @apply w-full h-full flex flex-col justify-between;
}

.icon-container {
    @apply mb-4 dark:text-white;
}

.text-container {
    @apply w-full;
}

.project-title {
    @apply font-bold text-lg mb-1 dark:text-white;
}

.project-description {
    @apply text-sm font-thin;
    @apply line-clamp-2;
}
</style>
