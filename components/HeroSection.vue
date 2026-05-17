<script lang="ts" setup>
import { sha256, } from "js-sha256"

const name = "Franclin"
const headline = "Engenheiro de Software"
const email = "f@francl.in"
const gravatarURL = `https://gravatar.com/avatar/${sha256(String(email).trim().toLowerCase())}?s=256`
const summary = "Movido por uma paixão inabalável por tecnologia e inovação, minha jornada profissional é guiada pelo desejo profundo de usar a tecnologia como uma força transformadora, capaz de tocar vidas e deixar um impacto duradouro no mundo."
const location = "Rio de Janeiro, Brasil"
const timezone = "UTC/GMT-3"

const size = ref(400)

onMounted(() => {
    const updateSize = () => {
        size.value = Math.min(window.innerWidth * 0.6, 600)
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    onUnmounted(() => window.removeEventListener('resize', updateSize))
})

const scrollToProjects = () => {
    const el = document.querySelector('#projects')
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
    }
}

const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<template>
    <section id="hero" class="hero">
        <div class="hero__globe-bg">
            <CobeGlobe
                class="hero__globe"
                :size="size"
            />
        </div>

        <div class="hero__content">
            <div class="hero__badge">
                <span class="hero__badge-dot"></span>
                <span class="hero__badge-text">Disponível para projetos</span>
            </div>

            <div class="hero__profile">
                <div class="hero__avatar-wrapper">
                    <img
                        class="hero__avatar"
                        :src="gravatarURL"
                        :alt="`Foto de ${name}`"
                    />
                    <span class="hero__avatar-ring"></span>
                </div>
                <div class="hero__identity">
                    <h1 class="hero__name">{{ name }}</h1>
                    <p class="hero__headline">{{ headline }}</p>
                </div>
            </div>

            <p class="hero__summary">{{ summary }}</p>

            <div class="hero__meta">
                <div class="hero__meta-item">
                    <UIcon name="i-ic-sharp-location-on" class="hero__meta-icon" />
                    <span>{{ location }} 🇧🇷</span>
                </div>
                <div class="hero__meta-item">
                    <UIcon name="i-ic-sharp-access-time" class="hero__meta-icon" />
                    <span>{{ timezone }}</span>
                </div>
            </div>

            <div class="hero__actions">
                <button class="hero__btn hero__btn--primary" @click="scrollToProjects">
                    <UIcon name="i-ic-sharp-code" />
                    <span>Ver Projetos</span>
                </button>
                <button class="hero__btn hero__btn--secondary" @click="scrollToContact">
                    <UIcon name="i-ic-sharp-chat-bubble-outline" />
                    <span>Fale Comigo</span>
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>
@reference "~/assets/css/main.tw.reference.css";

.hero {
    @apply relative;
    @apply min-h-screen w-full;
    @apply flex items-center justify-center;
    @apply px-6 pt-24 pb-16;
    @apply overflow-hidden;
}

.hero__globe-bg {
    @apply absolute inset-0;
    @apply flex items-center justify-center;
    @apply opacity-10 dark:opacity-15;
    @apply pointer-events-none;
    @apply scale-150;
}

.hero__globe {
    @apply w-full h-full;
}

.hero__content {
    @apply relative z-10;
    @apply max-w-2xl w-full;
    @apply flex flex-col items-center text-center;
    @apply gap-8;
    animation: hero-fade-in 0.8s ease-out;
}

@keyframes hero-fade-in {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.hero__badge {
    @apply inline-flex items-center gap-2;
    @apply px-4 py-2 rounded-full;
    @apply bg-indigo-50 dark:bg-indigo-950/50;
    @apply border border-indigo-200 dark:border-indigo-800;
    @apply text-sm font-medium;
    @apply text-indigo-700 dark:text-indigo-300;
    font-family: 'Inter', sans-serif;
}

.hero__badge-dot {
    @apply w-2 h-2 rounded-full;
    @apply bg-emerald-500;
    @apply animate-pulse;
}

.hero__badge-text {
    @apply tracking-tight;
}

.hero__profile {
    @apply flex flex-col items-center gap-5;
}

.hero__avatar-wrapper {
    @apply relative;
}

.hero__avatar {
    @apply w-24 h-24;
    @apply rounded-full;
    @apply object-cover;
    @apply shadow-lg;
    @apply ring-4 ring-white dark:ring-zinc-800;
}

.hero__avatar-ring {
    @apply absolute -inset-1;
    @apply rounded-full;
    @apply border-2 border-dashed border-indigo-300 dark:border-indigo-700;
    @apply animate-spin;
    animation-duration: 25s;
}

.hero__identity {
    @apply flex flex-col items-center gap-1;
}

.hero__name {
    @apply text-4xl md:text-5xl font-bold;
    @apply tracking-tight;
    @apply text-zinc-900 dark:text-white;
    font-family: 'Figtree', sans-serif;
}

.hero__headline {
    @apply text-lg md:text-xl font-medium;
    @apply text-indigo-600 dark:text-indigo-400;
    font-family: 'Inter', sans-serif;
}

.hero__summary {
    @apply text-base md:text-lg;
    @apply text-zinc-600 dark:text-zinc-400;
    @apply leading-relaxed;
    @apply max-w-xl;
    font-family: 'Inter', sans-serif;
}

.hero__meta {
    @apply flex flex-wrap items-center justify-center gap-6;
    @apply text-sm;
    @apply text-zinc-500 dark:text-zinc-500;
    font-family: 'Inter', sans-serif;
}

.hero__meta-item {
    @apply flex items-center gap-1.5;
}

.hero__meta-icon {
    @apply text-base;
    @apply text-zinc-400 dark:text-zinc-600;
}

.hero__actions {
    @apply flex flex-wrap items-center justify-center gap-3;
    @apply pt-2;
}

.hero__btn {
    @apply inline-flex items-center gap-2;
    @apply px-6 py-3 rounded-xl;
    @apply text-sm font-semibold;
    @apply transition-all duration-300;
    @apply cursor-pointer;
    @apply border-none;
    font-family: 'Inter', sans-serif;
}

.hero__btn--primary {
    @apply bg-indigo-600 text-white;
    @apply hover:bg-indigo-700;
    @apply shadow-lg shadow-indigo-500/25;
    @apply hover:shadow-xl hover:shadow-indigo-500/30;
    @apply hover:-translate-y-0.5;
}

.hero__btn--secondary {
    @apply bg-zinc-100 dark:bg-zinc-800;
    @apply text-zinc-700 dark:text-zinc-300;
    @apply hover:bg-zinc-200 dark:hover:bg-zinc-700;
    @apply hover:-translate-y-0.5;
}
</style>
