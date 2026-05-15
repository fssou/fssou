<script lang="ts" setup>
useHead({
    title: 'Franclin Sousa — Engenheiro de Software',
    meta: [
        { name: 'description', content: 'Portfólio de Franclin Sousa, Engenheiro de Software baseado no Rio de Janeiro. Projetos, experiência e contato.' },
        { property: 'og:title', content: 'Franclin Sousa — Engenheiro de Software' },
        { property: 'og:description', content: 'Portfólio pessoal com projetos, experiência e formas de contato.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://francl.in' },
    ],
})
</script>

<template>
    <div class="page-home">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SocialSection />
        <ContactSection />
    </div>
</template>

<style scoped>
.page-home {
    scroll-behavior: smooth;
}
</style>
