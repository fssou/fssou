<script lang="ts" setup>
import { SocialMediaBuilder } from "@/utils/socialmedia"
import SocialMediaCard from "@/components/SocialMediaCard.vue"

const twitter = new SocialMediaBuilder()
    .withName("Twitter").withSite("https://twitter.com/fssouoficial")
    .withHandle("@fssouoficial").withIcon("i-line-md-twitter-x").build()
const github = new SocialMediaBuilder()
    .withName("Github").withSite("https://github.com/fssou")
    .withHandle("@fssou").withIcon("i-mdi-github").build()
const linkedin = new SocialMediaBuilder()
    .withName("LinkedIn").withSite("https://linkedin.com/in/fssou")
    .withHandle("@fssou").withIcon("i-devicon-linkedin").build()
const email = new SocialMediaBuilder()
    .withName("Email").withSite("mailto:f@francl.in")
    .withHandle("f@francl.in").withIcon("i-mdi-email-outline").build()
const medium = new SocialMediaBuilder()
    .withName("Medium").withSite("https://medium.com/@fssou")
    .withHandle("@fssou").withIcon("i-mdi-medium").build()
const figma = new SocialMediaBuilder()
    .withName("Figma").withSite("https://figma.com/fssou")
    .withHandle("@fssou").withIcon("i-devicon-figma").build()
const codepen = new SocialMediaBuilder()
    .withName("Codepen").withSite("https://codepen.com/fssou")
    .withHandle("@fssou").withIcon("i-tabler-brand-codepen").build()

const socialLinks = [twitter, github, linkedin, email, medium, figma, codepen]
</script>

<template>
    <section id="social" class="social">
        <div class="social__container">
            <div class="social__header">
                <span class="social__label">Redes sociais</span>
                <h2 class="social__title">Me encontre na internet</h2>
            </div>
            <div class="social__grid">
                <div v-for="link in socialLinks" :key="link.getName()"
                     class="social__card" @click="link.open()">
                    <div class="social__card-icon">
                        <UIcon :name="link.getIcon()" />
                    </div>
                    <div class="social__card-info">
                        <span class="social__card-name">{{ link.getName() }}</span>
                        <span class="social__card-handle">{{ link.getHandle() }}</span>
                    </div>
                    <UIcon name="i-ic-sharp-arrow-outward" class="social__card-arrow" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@reference "~/assets/css/main.tw.reference.css";

.social { @apply py-24 px-6 bg-white dark:bg-zinc-900; }
.social__container { @apply max-w-6xl mx-auto; }
.social__header { @apply text-center mb-16; }
.social__label {
    @apply inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest;
    @apply bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400;
    @apply border border-indigo-100 dark:border-indigo-900 mb-4;
    font-family: 'Inter', sans-serif;
}
.social__title {
    @apply text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight;
    font-family: 'Figtree', sans-serif;
}
.social__grid {
    @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4;
}
.social__card {
    @apply flex items-center gap-4 p-5 rounded-2xl;
    @apply bg-zinc-50 dark:bg-zinc-800/50;
    @apply border border-zinc-100 dark:border-zinc-800;
    @apply cursor-pointer transition-all duration-300;
}
.social__card:hover {
    @apply border-indigo-200 dark:border-indigo-800;
    @apply shadow-lg;
    @apply bg-indigo-50 dark:bg-indigo-950/30;
    transform: translateY(-2px);
}
.social__card-icon {
    @apply text-2xl text-zinc-600 dark:text-zinc-400;
    @apply transition-colors duration-200;
}
.social__card:hover .social__card-icon {
    @apply text-indigo-600 dark:text-indigo-400;
}
.social__card-info { @apply flex-1 flex flex-col; }
.social__card-name {
    @apply text-sm font-semibold text-zinc-900 dark:text-white;
    font-family: 'Inter', sans-serif;
}
.social__card-handle {
    @apply text-xs text-zinc-500 dark:text-zinc-500;
    font-family: 'Martian Mono', monospace;
}
.social__card-arrow {
    @apply text-lg text-zinc-300 dark:text-zinc-700;
    @apply transition-all duration-200;
}
.social__card:hover .social__card-arrow {
    @apply text-indigo-500;
    transform: translate(2px, -2px);
}
</style>
