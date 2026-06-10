<script lang="ts" setup>
const openTelegram = () => {
    navigateTo("https://t.me/fssou", { external: true, open: { target: "_blank" } })
}
const openEmail = () => {
    navigateTo("mailto:f@francl.in", { external: true })
}
</script>

<template>
    <section id="contact" class="contact">
        <div class="contact__container">
            <div class="contact__content">
                <span class="contact__label">Contato</span>
                <h2 class="contact__title">Vamos conversar?</h2>
                <p class="contact__subtitle">
                    Estou sempre aberto a novas oportunidades, colaborações e
                    conversas sobre tecnologia. Escolha o melhor canal para você.
                </p>
                <div class="contact__actions">
                    <button class="contact__btn contact__btn--primary" @click="openTelegram">
                        <UIcon name="i-ic-sharp-send" />
                        <span>Telegram</span>
                    </button>
                    <button class="contact__btn contact__btn--secondary" @click="openEmail">
                        <UIcon name="i-mdi-email-outline" />
                        <span>f@francl.in</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="contact__footer">
            <div class="contact__footer-inner">
                <p class="contact__copyright">
                    © {{ new Date().getFullYear() }} Franclin — Feito com
                    <span class="text-red-500">❤</span> no Rio de Janeiro
                </p>
            </div>
        </footer>
    </section>
</template>

<style scoped>
@reference "~/assets/css/main.tw.reference.css";

.contact {
    @apply bg-transparent;
}
.contact__container {
    @apply max-w-6xl mx-auto px-6 py-24;
}
.contact__content {
    @apply max-w-2xl mx-auto text-center;
    @apply flex flex-col items-center gap-6;
}
.contact__label {
    @apply inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest;
    @apply bg-white/40 dark:bg-white/5 text-indigo-600 dark:text-indigo-400;
    @apply border border-white/50 dark:border-white/10 backdrop-blur-md;
    font-family: 'Inter', sans-serif;
}
.contact__title {
    @apply text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight;
    font-family: 'Figtree', sans-serif;
}
.contact__subtitle {
    @apply text-base md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed;
    font-family: 'Inter', sans-serif;
}
.contact__actions {
    @apply flex flex-wrap items-center justify-center gap-3 pt-2;
}
.contact__btn {
    @apply inline-flex items-center gap-2 px-6 py-3 rounded-xl;
    @apply text-sm font-semibold cursor-pointer border-none transition-all duration-300;
    font-family: 'Inter', sans-serif;
}
.contact__btn--primary {
    @apply bg-indigo-600 text-white hover:bg-indigo-700;
    @apply shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30;
    @apply hover:-translate-y-0.5;
}
.contact__btn--secondary {
    @apply bg-white/40 dark:bg-white/5 text-zinc-700 dark:text-zinc-300;
    @apply border border-white/50 dark:border-white/10 backdrop-blur-md shadow-sm;
    @apply hover:bg-white/60 dark:hover:bg-white/10 hover:-translate-y-0.5;
}
.contact__footer {
    @apply border-t border-white/40 dark:border-white/10;
    @apply bg-white/30 dark:bg-zinc-900/30;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
}
.contact__footer-inner {
    @apply max-w-6xl mx-auto px-6 py-8 text-center;
}
.contact__copyright {
    @apply text-sm text-zinc-400 dark:text-zinc-600;
    font-family: 'Inter', sans-serif;
}
</style>
