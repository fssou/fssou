<script lang="ts" setup>
interface Project {
    id: string; name: string; description: string
    technologies: string[]; path?: string; repoUrl?: string
    demoUrl?: string; icon: string; color: string; featured?: boolean
}

const projects = ref<Project[]>([
    {
        id: 'password-gen', name: 'Gerador de Senhas',
        description: 'Ferramenta para criar senhas seguras com opções de personalização avançadas.',
        technologies: ['TypeScript', 'Vue', 'Nuxt'],
        path: '/generators/passwords', icon: 'i-mdi-key-outline',
        color: '#8B5CF6', featured: true,
    },
    {
        id: 'capital-gain', name: 'Capital Gain Calculator',
        description: 'Sistema de cálculo de imposto sobre ganho de capital em operações de ações.',
        technologies: ['Go', 'CLI', 'Clean Architecture'],
        repoUrl: 'https://github.com/fssou/learn-go-challenge-capital-gain',
        icon: 'i-mdi-chart-line', color: '#10B981', featured: true,
    },
    {
        id: 'personal-website', name: 'Personal Website',
        description: 'Portfólio pessoal com Nuxt 3, Tailwind CSS e design system próprio.',
        technologies: ['Nuxt 3', 'Tailwind', 'TypeScript'],
        repoUrl: 'https://github.com/fssou/fssou',
        demoUrl: 'https://francl.in', icon: 'i-mdi-web', color: '#6366F1',
    },
])

const navigateToProject = (project: Project) => {
    if (project.path) navigateTo(project.path)
    else if (project.demoUrl) navigateTo(project.demoUrl, { external: true, open: { target: '_blank' } })
    else if (project.repoUrl) navigateTo(project.repoUrl, { external: true, open: { target: '_blank' } })
}
</script>

<template>
    <section id="projects" class="projects">
        <div class="projects__container">
            <div class="projects__header">
                <span class="projects__label">Portfólio</span>
                <h2 class="projects__title">Projetos em destaque</h2>
                <p class="projects__subtitle">Alguns dos projetos que construí.</p>
            </div>
            <div class="projects__grid">
                <div v-for="project in projects" :key="project.id"
                     class="project-card" @click="navigateToProject(project)">
                    <div class="project-card__header">
                        <div class="project-card__icon-wrapper" :style="{ backgroundColor: `${project.color}15` }">
                            <UIcon :name="project.icon" class="project-card__icon" :style="{ color: project.color }" />
                        </div>
                        <div class="project-card__links">
                            <a v-if="project.repoUrl" :href="project.repoUrl" target="_blank"
                               rel="noopener noreferrer" class="project-card__link" @click.stop>
                                <UIcon name="i-mdi-github" />
                            </a>
                            <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank"
                               rel="noopener noreferrer" class="project-card__link" @click.stop>
                                <UIcon name="i-ic-sharp-open-in-new" />
                            </a>
                        </div>
                    </div>
                    <div class="project-card__body">
                        <h3 class="project-card__name">{{ project.name }}</h3>
                        <p class="project-card__description">{{ project.description }}</p>
                    </div>
                    <div class="project-card__footer">
                        <span v-for="tech in project.technologies" :key="tech" class="project-card__tech">{{ tech }}</span>
                    </div>
                </div>
                <div class="project-card project-card--placeholder">
                    <div class="project-card__placeholder-content">
                        <UIcon name="i-ic-sharp-construction" class="text-3xl" />
                        <p class="text-sm font-semibold">Em breve</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@reference "~/assets/css/main.tw.reference.css";

.projects { @apply py-24 px-6 bg-transparent; }
.projects__container { @apply max-w-6xl mx-auto; }
.projects__header { @apply text-center mb-16; }
.projects__label {
    @apply inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest;
    @apply bg-white/40 dark:bg-white/5 text-indigo-600 dark:text-indigo-400;
    @apply border border-white/50 dark:border-white/10 backdrop-blur-md mb-4;
    font-family: 'Inter', sans-serif;
}
.projects__title {
    @apply text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight mb-4;
    font-family: 'Figtree', sans-serif;
}
.projects__subtitle {
    @apply text-base md:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto;
    font-family: 'Inter', sans-serif;
}
.projects__grid { @apply grid grid-cols-1 md:grid-cols-2 gap-6; }
.project-card {
    @apply p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/40 border border-white/50 dark:border-white/10;
    @apply flex flex-col gap-5 cursor-pointer transition-all duration-300;
    backdrop-filter: blur(20px) saturate(150%);
    -webkit-backdrop-filter: blur(20px) saturate(150%);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.06);
}
.project-card:hover {
    @apply border-white/70 dark:border-white/20;
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(31, 38, 135, 0.14);
}
.project-card--placeholder {
    @apply cursor-default border-dashed bg-white/25 dark:bg-zinc-900/25;
    @apply flex items-center justify-center min-h-[200px];
}
.project-card--placeholder:hover { transform: none; box-shadow: none; }
.project-card__header { @apply flex items-start justify-between; }
.project-card__icon-wrapper { @apply w-12 h-12 rounded-xl flex items-center justify-center; }
.project-card__icon { @apply text-2xl; }
.project-card__links { @apply flex items-center gap-2; }
.project-card__link {
    @apply p-2 rounded-lg text-zinc-400 dark:text-zinc-600;
    @apply hover:text-zinc-700 dark:hover:text-zinc-300;
    @apply hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-200 text-lg;
}
.project-card__body { @apply flex-1; }
.project-card__name {
    @apply text-lg font-semibold text-zinc-900 dark:text-white mb-2;
    font-family: 'Figtree', sans-serif;
}
.project-card__description {
    @apply text-sm leading-relaxed text-zinc-500 dark:text-zinc-400;
    font-family: 'Inter', sans-serif;
}
.project-card__footer { @apply flex flex-wrap gap-2; }
.project-card__tech {
    @apply px-2.5 py-1 rounded-md text-xs font-medium;
    @apply bg-white/40 dark:bg-white/10 border border-white/40 dark:border-white/10;
    @apply text-zinc-600 dark:text-zinc-400 backdrop-blur-sm;
    font-family: 'Martian Mono', monospace;
}
.project-card__placeholder-content {
    @apply flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-600;
    font-family: 'Inter', sans-serif;
}
</style>
