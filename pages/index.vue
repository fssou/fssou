<script lang="ts" setup>

</script>

<template>
    <div class="app-tile-container">
        <HomeSummary class="app-tile-summary" />
        <HomeSocialMedia class="app-tile-social-media" />
        <HomeContact class="app-tile-end" />
    </div>
</template>

<style lang="sass" scoped>
.app-tile-container
    @apply flex
    @apply h-fit
    @apply w-full
    @apply flex-none
    @apply flex-col
    @apply items-center
    @apply justify-start
    @apply gap-[24px]
    @apply sm:h-[85%]
    @apply sm:w-auto
    @apply sm:flex-row
    @apply sm:flex-nowrap
    @apply sm:gap-[32px]
    @apply sm:px-28
    @apply sm:pt-0
    @apply sm:mb-[unset] mb-16

.app-tile-summary
    @apply h-[512px]
    @apply w-[100%]
    @apply flex-none
    @apply sm:h-full
    @apply sm:w-[80vw]

.app-tile-social-media
    @apply h-[512px]
    @apply w-[100%]
    @apply flex-none
    @apply sm:h-full
    @apply sm:w-[70vw]

.app-tile-end
    @apply h-[512px]
    @apply w-[100%]
    @apply flex-none
    @apply sm:h-full
    @apply sm:w-[70vw]

</style>