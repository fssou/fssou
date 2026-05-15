<script lang="ts" setup>
const skills = [
    { name: 'Go', icon: 'i-devicon-go', color: '#00ADD8' },
    { name: 'TypeScript', icon: 'i-devicon-typescript', color: '#3178C6' },
    { name: 'Java', icon: 'i-devicon-java', color: '#ED8B00' },
    { name: 'Kotlin', icon: 'i-devicon-kotlin', color: '#7F52FF' },
    { name: 'Python', icon: 'i-devicon-python', color: '#3776AB' },
    { name: 'Docker', icon: 'i-devicon-docker', color: '#2496ED' },
    { name: 'AWS', icon: 'i-devicon-amazonwebservices-wordmark', color: '#FF9900' },
    { name: 'Kubernetes', icon: 'i-devicon-kubernetes', color: '#326CE5' },
]

const interests = [
    { emoji: '🔭', label: 'Astronomia' },
    { emoji: '🎵', label: 'Música' },
    { emoji: '🤖', label: 'Inteligência Artificial' },
    { emoji: '🏗️', label: 'Arquitetura de Software' },
]
</script>

<template>
    <section id="about" class="about">
        <div class="about__container">
            <div class="about__header">
                <span class="about__label">Sobre mim</span>
                <h2 class="about__title">Construindo o futuro com código</h2>
                <p class="about__subtitle">
                    Com experiência em engenharia de software, busco criar
                    soluções que combinem excelência técnica com impacto real.
                </p>
            </div>

            <div class="about__grid">
                <!-- Background Card -->
                <div class="about__card about__card--background">
                    <div class="about__card-header">
                        <UIcon name="i-ic-sharp-person" class="about__card-icon" />
                        <h3 class="about__card-title">Trajetória</h3>
                    </div>
                    <p class="about__card-text">
                        Engenheiro de Software baseado no Rio de Janeiro, com foco em
                        arquitetura de sistemas distribuídos, microsserviços e soluções
                        cloud-native. Apaixonado por criar software que resolve problemas
                        reais e que escala de forma elegante.
                    </p>
                    <p class="about__card-text">
                        Acredito que a tecnologia deve ser uma força transformadora —
                        acessível, inclusiva e capaz de impactar positivamente a vida
                        das pessoas.
                    </p>
                </div>

                <!-- Skills Card -->
                <div class="about__card about__card--skills">
                    <div class="about__card-header">
                        <UIcon name="i-ic-sharp-build" class="about__card-icon" />
                        <h3 class="about__card-title">Tecnologias</h3>
                    </div>
                    <div class="about__skills-grid">
                        <div
                            v-for="skill in skills"
                            :key="skill.name"
                            class="about__skill"
                        >
                            <UIcon :name="skill.icon" class="about__skill-icon" />
                            <span class="about__skill-name">{{ skill.name }}</span>
                        </div>
                    </div>
                </div>

                <!-- Interests Card -->
                <div class="about__card about__card--interests">
                    <div class="about__card-header">
                        <UIcon name="i-ic-sharp-star" class="about__card-icon" />
                        <h3 class="about__card-title">Interesses</h3>
                    </div>
                    <div class="about__interests-list">
                        <div
                            v-for="interest in interests"
                            :key="interest.label"
                            class="about__interest"
                        >
                            <span class="about__interest-emoji">{{ interest.emoji }}</span>
                            <span class="about__interest-label">{{ interest.label }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@reference "~/assets/css/main.tw.reference.css";

.about {
    @apply py-24 px-6;
    @apply bg-white dark:bg-zinc-900;
}

.about__container {
    @apply max-w-6xl mx-auto;
}

.about__header {
    @apply text-center mb-16;
}

.about__label {
    @apply inline-block;
    @apply px-4 py-1.5 rounded-full;
    @apply text-xs font-semibold uppercase tracking-widest;
    @apply bg-indigo-50 dark:bg-indigo-950/50;
    @apply text-indigo-600 dark:text-indigo-400;
    @apply border border-indigo-100 dark:border-indigo-900;
    @apply mb-4;
    font-family: 'Inter', sans-serif;
}

.about__title {
    @apply text-3xl md:text-4xl font-bold;
    @apply text-zinc-900 dark:text-white;
    @apply tracking-tight;
    @apply mb-4;
    font-family: 'Figtree', sans-serif;
}

.about__subtitle {
    @apply text-base md:text-lg;
    @apply text-zinc-500 dark:text-zinc-400;
    @apply max-w-2xl mx-auto;
    font-family: 'Inter', sans-serif;
}

.about__grid {
    @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

.about__card {
    @apply p-6 md:p-8;
    @apply rounded-2xl;
    @apply bg-zinc-50 dark:bg-zinc-800/50;
    @apply border border-zinc-100 dark:border-zinc-800;
    @apply transition-all duration-300;
}

.about__card:hover {
    @apply border-zinc-200 dark:border-zinc-700;
    @apply shadow-lg;
    transform: translateY(-2px);
}

.about__card--background {
    @apply md:col-span-2;
}

.about__card-header {
    @apply flex items-center gap-3 mb-5;
}

.about__card-icon {
    @apply text-xl;
    @apply text-indigo-500 dark:text-indigo-400;
}

.about__card-title {
    @apply text-lg font-semibold;
    @apply text-zinc-900 dark:text-white;
    font-family: 'Figtree', sans-serif;
}

.about__card-text {
    @apply text-base leading-relaxed;
    @apply text-zinc-600 dark:text-zinc-400;
    @apply mb-3 last:mb-0;
    font-family: 'Inter', sans-serif;
}

.about__skills-grid {
    @apply grid grid-cols-2 sm:grid-cols-4 gap-3;
}

.about__skill {
    @apply flex items-center gap-2.5;
    @apply px-4 py-3;
    @apply rounded-xl;
    @apply bg-white dark:bg-zinc-800;
    @apply border border-zinc-100 dark:border-zinc-700;
    @apply transition-all duration-200;
    @apply cursor-default;
}

.about__skill:hover {
    @apply border-indigo-200 dark:border-indigo-800;
    @apply shadow-sm;
    transform: translateY(-1px);
}

.about__skill-icon {
    @apply text-xl;
}

.about__skill-name {
    @apply text-sm font-medium;
    @apply text-zinc-700 dark:text-zinc-300;
    font-family: 'Inter', sans-serif;
}

.about__interests-list {
    @apply flex flex-col gap-3;
}

.about__interest {
    @apply flex items-center gap-3;
    @apply px-4 py-3;
    @apply rounded-xl;
    @apply bg-white dark:bg-zinc-800;
    @apply border border-zinc-100 dark:border-zinc-700;
    @apply transition-all duration-200;
}

.about__interest:hover {
    @apply border-indigo-200 dark:border-indigo-800;
    transform: translateX(4px);
}

.about__interest-emoji {
    @apply text-xl;
}

.about__interest-label {
    @apply text-sm font-medium;
    @apply text-zinc-700 dark:text-zinc-300;
    font-family: 'Inter', sans-serif;
}
</style>
