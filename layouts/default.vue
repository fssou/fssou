<script lang="ts" setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === "dark",)
const toggleColorMode = () => {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark"
}

const route = useRoute()
const isHomePage = computed(() => route.path === '/' || route.path === '/index')

const isMenuOpen = ref(false)

const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contato', href: '#contact' },
]

const scrollToSection = (href: string) => {
    isMenuOpen.value = false
    if (!isHomePage.value) {
        navigateTo('/' + href)
        return
    }
    const el = document.querySelector(href)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
    }
}

const isScrolled = ref(false)

onMounted(() => {
    window.addEventListener('scroll', () => {
        isScrolled.value = window.scrollY > 50
    })
})
</script>

<template>
    <div class="lyt-default">
        <!-- Navbar -->
        <nav
            class="navbar"
            :class="{ 'navbar--scrolled': isScrolled }"
        >
            <div class="navbar__inner">
                <NuxtLink to="/" class="navbar__brand">
                    <span class="navbar__brand-dot"></span>
                    <span class="navbar__brand-text">francl.in</span>
                </NuxtLink>

                <div class="navbar__links">
                    <template v-if="isHomePage">
                        <a
                            v-for="link in navLinks"
                            :key="link.href"
                            class="navbar__link"
                            @click.prevent="scrollToSection(link.href)"
                        >
                            {{ link.label }}
                        </a>
                    </template>
                    <template v-else>
                        <NuxtLink to="/" class="navbar__link">
                            Início
                        </NuxtLink>
                    </template>

                    <button
                        class="navbar__theme-toggle"
                        :class="{ 'navbar__theme-toggle--light': !isDark }"
                        @click="toggleColorMode"
                        :aria-label="isDark ? 'Ativar modo claro' : 'Ativar modo escuro'"
                    >
                        <UIcon :name="isDark ? 'i-ic-sharp-wb-sunny' : 'i-ic-sharp-nightlight'" />
                    </button>
                </div>

                <!-- Mobile menu button -->
                <button
                    class="navbar__mobile-toggle"
                    @click="isMenuOpen = !isMenuOpen"
                    aria-label="Menu"
                >
                    <UIcon :name="isMenuOpen ? 'i-ic-sharp-close' : 'i-ic-sharp-menu'" />
                </button>
            </div>

            <!-- Mobile menu -->
            <Transition name="menu-slide">
                <div v-if="isMenuOpen" class="navbar__mobile-menu">
                    <template v-if="isHomePage">
                        <a
                            v-for="link in navLinks"
                            :key="link.href"
                            class="navbar__mobile-link"
                            @click.prevent="scrollToSection(link.href)"
                        >
                            {{ link.label }}
                        </a>
                    </template>
                    <template v-else>
                        <NuxtLink to="/" class="navbar__mobile-link" @click="isMenuOpen = false">
                            Início
                        </NuxtLink>
                    </template>
                    <button
                        class="navbar__mobile-theme"
                        @click="toggleColorMode"
                    >
                        <UIcon :name="isDark ? 'i-ic-sharp-wb-sunny' : 'i-ic-sharp-nightlight'" />
                        <span>{{ isDark ? 'Modo Claro' : 'Modo Escuro' }}</span>
                    </button>
                </div>
            </Transition>
        </nav>

        <!-- Page Content -->
        <main class="main-content">
            <slot />
        </main>
    </div>
</template>

<style scoped>
@reference "~/assets/css/main.tw.reference.css";

.lyt-default {
    @apply flex flex-col;
    @apply min-h-screen w-full;
    @apply bg-zinc-50 dark:bg-zinc-950;
    @apply text-zinc-900 dark:text-zinc-100;
    @apply transition-colors duration-300;
}

.main-content {
    @apply flex-1 w-full pt-16;
}

/* ─── Navbar ─── */
.navbar {
    @apply fixed top-0 left-0 right-0 z-50;
    @apply transition-all duration-300;
    @apply bg-transparent;
}

.navbar--scrolled {
    @apply bg-white/80 dark:bg-zinc-900/80;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
}

.navbar__inner {
    @apply max-w-6xl mx-auto px-6;
    @apply flex items-center justify-between;
    @apply h-16;
}

.navbar__brand {
    @apply flex items-center gap-2;
    @apply text-lg font-semibold tracking-tight;
    @apply text-zinc-900 dark:text-white;
    @apply no-underline;
    @apply transition-opacity duration-200;
    font-family: 'Martian Mono', monospace;
}

.navbar__brand:hover {
    @apply opacity-70;
}

.navbar__brand-dot {
    @apply w-2 h-2 rounded-full;
    @apply bg-indigo-500;
    @apply animate-pulse;
}

.navbar__brand-text {
    @apply text-sm;
}

.navbar__links {
    @apply hidden md:flex items-center gap-1;
}

.navbar__link {
    @apply px-3 py-2 rounded-lg;
    @apply text-sm font-medium;
    @apply text-zinc-600 dark:text-zinc-400;
    @apply hover:text-zinc-900 dark:hover:text-white;
    @apply hover:bg-zinc-100 dark:hover:bg-zinc-800;
    @apply transition-all duration-200;
    @apply cursor-pointer no-underline;
    font-family: 'Inter', sans-serif;
}

.navbar__theme-toggle {
    @apply ml-2 p-2 rounded-lg;
    @apply text-zinc-600 dark:text-zinc-400;
    @apply hover:text-zinc-900 dark:hover:text-white;
    @apply hover:bg-zinc-100 dark:hover:bg-zinc-800;
    @apply transition-all duration-300;
    @apply cursor-pointer;
    @apply border-none bg-transparent;
    @apply text-lg;
}

.navbar__theme-toggle--light {
    transform: rotate(-45deg);
}

.navbar__mobile-toggle {
    @apply md:hidden;
    @apply p-2 rounded-lg;
    @apply text-zinc-600 dark:text-zinc-400;
    @apply hover:bg-zinc-100 dark:hover:bg-zinc-800;
    @apply transition-all duration-200;
    @apply cursor-pointer;
    @apply border-none bg-transparent;
    @apply text-xl;
}

.navbar__mobile-menu {
    @apply md:hidden;
    @apply px-6 pb-4 pt-2;
    @apply flex flex-col gap-1;
    @apply bg-white/95 dark:bg-zinc-900/95;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
}

.navbar__mobile-link {
    @apply px-4 py-3 rounded-xl;
    @apply text-base font-medium;
    @apply text-zinc-700 dark:text-zinc-300;
    @apply hover:bg-zinc-100 dark:hover:bg-zinc-800;
    @apply transition-all duration-200;
    @apply cursor-pointer no-underline;
    font-family: 'Inter', sans-serif;
}

.navbar__mobile-theme {
    @apply flex items-center gap-3;
    @apply px-4 py-3 rounded-xl;
    @apply text-base font-medium;
    @apply text-zinc-700 dark:text-zinc-300;
    @apply hover:bg-zinc-100 dark:hover:bg-zinc-800;
    @apply transition-all duration-200;
    @apply cursor-pointer;
    @apply border-none bg-transparent;
    @apply w-full text-left;
    font-family: 'Inter', sans-serif;
}

/* ─── Menu Transition ─── */
.menu-slide-enter-active,
.menu-slide-leave-active {
    transition: all 0.3s ease;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}
</style>
