<script lang="ts" setup>
import {ref, onMounted, type Ref,} from "vue"
import XService from "~/services/x"
import type {UserData,} from "~/services/types";

const twitter: Ref<UserData> = ref({} as UserData,)

const config = useRuntimeConfig()

const xService = new XService(config.public.lambdaFunctionUrl,)

onMounted(() => {
    xService.getUsersMe()
        .then((response,) => {
            twitter.value = response
        },)
},)
</script>

<template>
    <div class="app-tile-container">
        <HomeSummary class="app-tile-summary" />
        <HomeSocialMedia class="app-tile-social-media" :twitter-data="twitter" />
        <HomeContact class="app-tile-end" />
    </div>
</template>

<style lang="sass" scoped>
.app-tile-container
    @apply flex flex-none flex-col
    @apply justify-start items-center
    @apply w-full h-fit
    @apply sm:w-auto sm:h-[60%]
    @apply gap-[24px]
    @apply sm:flex-row sm:flex-nowrap sm:gap-[32px]
    @apply sm:px-[20vw] sm:pt-0
    @apply sm:mb-[unset] mb-16

.app-tile-summary
    @apply w-[100%] h-[512px]
    @apply sm:w-[60vw] sm:h-full

.app-tile-social-media
    @apply w-[100%] h-[512px]
    @apply sm:w-[60vw] sm:h-full

.app-tile-end
    @apply w-[100%] h-[512px]
    @apply sm:w-[60vw] sm:h-full

</style>