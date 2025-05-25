<script lang="ts" setup>
import SocialMedia from "./partials/SocialMedia.vue"
import Summary from "./partials/Summary.vue"
import Contact from "./partials/Contact.vue"
import Projects from "./partials/Projects.vue"

</script>

<template>
    <div class="app-tile-container">
        <Summary class="app-tile-summary" />
        <SocialMedia class="app-tile-social-media" />
        <Contact class="app-tile-end" />
    </div>
</template>

<style scoped>
@reference "tailwindcss";

.app-tile-container {
    @apply flex flex-none flex-col;
    @apply justify-start items-center;
    @apply w-full h-fit;
    @apply sm:w-auto sm:h-[60%];
    @apply gap-[24px];
    @apply sm:flex-row sm:flex-nowrap sm:gap-[32px];
    @apply sm:px-[20vw] sm:pt-0;
    @apply sm:mb-[unset] mb-16;
}

.app-tile-summary {
    @apply w-[100%] h-[512px];
    @apply sm:w-[60vw] sm:h-full;
}

.app-tile-social-media {
    @apply w-[100%] h-[512px];
    @apply sm:w-[60vw] sm:h-full;
}
.app-tile-projects {
    @apply w-[100%] h-[512px];
    @apply sm:w-[60vw] sm:h-full;
}
.app-tile-end {
    @apply w-[100%] h-[512px];
    @apply sm:w-[60vw] sm:h-full;
}
</style>
