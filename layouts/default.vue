<script lang="ts" setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === "dark",)
const onClickColorChange = () => {
    colorMode.value = colorMode.value === "dark" ? "light" : "dark"
}
const {onWheel,} = useMouse()
</script>

<template>
    <div
        class="lyt-default"
        @wheel="onWheel"
    >
        <div class="wrapper">
            <NuxtPage />
        </div>
        <div class="color-mode-container">
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
.lyt-default
    @apply flex flex-col items-center justify-start
    @apply h-screen w-screen
    @apply overflow-auto
    @apply sm:flex-row

.wrapper
    @apply flex
    @apply w-full h-auto
    @apply p-5
    @apply sm:items-center sm:justify-start
    @apply sm:w-auto sm:h-full
    @apply sm:p-[unset]

.color-mode-container
    @apply fixed
    @apply flex justify-center items-center
    @apply w-screen h-auto
    @apply sm:mt-[10vh] mt-[unset]
    @apply sm:top-0 sm:left-0 sm:bottom-[unset] bottom-0

.color-mode
    @apply cursor-pointer
    @apply flex flex-none opacity-100
    @apply sm:rounded-full rounded-t-full sm:shadow-none shadow-lg
    @apply sm:bg-transparent sm:dark:bg-transparent dark:bg-zinc-100 bg-zinc-800
    @apply h-auto w-auto
    @apply sm:p-[12px] pt-3 pb-6 px-3
    @apply text-[24px] text-primary-800
    @apply transition duration-300 hover:text-primary-600 hover:scale-110
    i
        @apply shadow-sm
</style>
