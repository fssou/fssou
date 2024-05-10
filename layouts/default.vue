<script lang="ts" setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === "dark",)
const onClickColorChange = () => {
    colorMode.value = colorMode.value === "dark" ? "light" : "dark"
}
</script>

<template>
    <div id="layout-default" class="flex h-full w-full items-center justify-center sm:h-full sm:w-auto">
        <div id="wrapper" class="flex h-full w-full items-center justify-center p-5 sm:w-auto">
            <div id="tiles-wrapper" class="flex w-full items-center sm:h-full sm:w-auto">
                <NuxtPage />
            </div>
        </div>
        <div class="container-color-mode">
            <div
                class="color-mode"
                @click="onClickColorChange"
            >
                <i v-if="isDark" class="i-ic-sharp-wb-sunny" />
                <i v-else class="i-ic-sharp-nightlight -rotate-45" />
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.container-color-mode
    @apply fixed
    @apply flex justify-center items-center
    @apply w-screen h-auto
    @apply sm:top-5 sm:left-0 sm:bottom-[unset] bottom-0

.color-mode
    @apply cursor-pointer
    @apply flex flex-none opacity-100
    @apply sm:rounded-full rounded-t-full sm:shadow-none shadow-lg
    @apply sm:bg-transparent sm:dark:bg-transparent dark:bg-zinc-100 bg-zinc-800
    @apply h-auto w-auto
    @apply sm:p-[12px] pt-3 pb-6 px-3
    @apply text-[24px] text-primary-800
    @apply transition duration-300 hover:text-primary-600 hover:scale-110
    div
        @apply shadow-sm
</style>
