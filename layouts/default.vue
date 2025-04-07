<script lang="ts" setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === "dark",)
const toggleColorMode = () => {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark"
}
const {onWheel,} = useMouse()

// Add route detection
const route = useRoute()
const isHomePage = computed(() => route.path === '/' || route.path === '/index')
const navigateToHome = () => {
    navigateTo('/')
}
</script>

<template>
    <div
        class="lyt-default"
        @wheel="onWheel"
    >
        <div class="wrapper">
            <NuxtPage />
        </div>
        <!-- Add home button that only shows when not on home page -->
        <div v-if="!isHomePage" class="home-button-container">
            <div
                class="home-button"
                @click="navigateToHome"
            >
                <UIcon name="i-ic-sharp-home" />
            </div>
        </div>
        <div class="color-mode-container">
            <UButton
                variant="link"
                color="primary"
                size="lg"
                class="color-mode"
                :class="!isDark ? '-rotate-45' : ''"
                :icon="isDark ? 'i-ic-sharp-wb-sunny' : 'i-ic-sharp-nightlight'"
                @click="toggleColorMode"
            />
        </div>
    </div>
</template>

<style scoped>
@reference "~/assets/css/main.tw.reference.css";

.lyt-default {
    @apply flex flex-col items-center justify-start;
    @apply h-screen w-screen;
    @apply overflow-auto;
    @apply sm:flex-row;
    /*@apply bg-white dark:bg-zinc-900;*/
}

.wrapper {
    @apply flex;
    @apply w-full h-auto;
    @apply p-5;
    @apply sm:items-center sm:justify-start;
    @apply sm:w-full sm:h-full;
    @apply sm:p-[unset];
}

.color-mode-container {
    @apply fixed;
    @apply flex justify-center items-center;
    @apply w-auto h-auto;
    @apply sm:mt-[16px] mt-[unset];
    @apply sm:top-0 sm:right-5 sm:left-auto sm:bottom-[unset] bottom-0;
    @apply sm:justify-end justify-center;
}

.color-mode {
    @apply cursor-pointer;
    @apply flex flex-none opacity-100;
    @apply sm:rounded-full rounded-t-full sm:shadow-none shadow-lg;
    @apply sm:bg-transparent sm:dark:bg-transparent dark:bg-zinc-100 bg-zinc-800;
    @apply h-auto w-auto;
    @apply sm:p-[12px] pt-3 pb-6 px-3;
    @apply text-[24px];
    @apply transition duration-300 hover:scale-110;
}

.home-button-container {
    @apply fixed;
    @apply flex justify-center items-center;
    @apply w-auto h-auto;
    @apply sm:mt-[16px] mt-[unset];
    @apply sm:top-0 sm:left-5 sm:right-auto sm:bottom-[unset] top-0;
    @apply sm:justify-start justify-center;
}

.home-button {
    @apply cursor-pointer;
    @apply flex flex-none opacity-100;
    @apply sm:rounded-full rounded-b-full sm:shadow-none shadow-lg;
    @apply sm:bg-transparent sm:dark:bg-transparent dark:bg-zinc-100 bg-zinc-800;
    @apply h-auto w-auto;
    @apply sm:p-[12px] pt-6 pb-3 px-3;
    @apply text-[24px];
    @apply transition duration-300 hover:scale-110;
    i {
        @apply shadow-sm;
    }
}
</style>
