<script lang="ts" setup>
const {onWheel,} = useMouse()

</script>

<template>
    <div
        class="app"
        @wheel="onWheel"
    >
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
        <UNotifications />
    </div>
</template>

<style lang="sass" scoped>
.app
    @apply flex
    @apply h-full
    @apply sm:h-full
    @apply w-screen
    @apply overflow-auto
</style>
