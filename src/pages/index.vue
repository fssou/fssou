<script lang="ts" setup>

</script>

<template>
    <div
        class="app-main-tiles relative flex w-[100%] flex-none flex-col content-start items-center justify-start gap-[24px] sm:h-[576px] sm:flex-row sm:flex-nowrap sm:gap-[32px] sm:px-28 sm:pt-0"
    >
        <!-- Summary -->
        <HomeSummary class="app-tile-summary h-[512px] w-[100%] flex-none sm:h-full sm:w-[512px]" />
        <!-- Social Media -->
        <HomeSocialMedia class="app-tile-social-media h-[512px] w-[100%] flex-none sm:h-full sm:w-[512px]" />
        <!-- End Social Media -->
        <!-- Photos -->
        <HomePhotos class="app-tile-photos h-[2136px] w-[100%] flex-none overflow-hidden sm:h-full sm:w-[1337px]" />
        <!-- End Photos -->
        <!-- Instagram Widget -->
        <HomeWidgetInstagram class="app-tile-widget-instagram h-[512px] w-[100%] flex-none sm:h-full sm:w-[476px]" />
        <!-- End Instagram Widget -->
        <!-- Contents -->
        <HomeContents v-if="false" class="app-tile-contents h-[512px] w-[100%] flex-none overflow-auto sm:h-full sm:w-[340px]" />
        <!-- End Contents -->
        <!-- Final Tile -->
        <HomeContact class="app-tile-end h-[512px] w-[100%] flex-none sm:h-full sm:w-[254px]" />
        <!-- End Final Tile -->
    </div>
</template>
