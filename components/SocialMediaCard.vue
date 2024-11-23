<script setup lang="ts">
import {SocialMedia,} from "~/utils/socialmedia";

defineProps({
    socialMedia: {
        type: SocialMedia,
        required: true,
    },
},)
</script>

<template>
    <div
        @click="socialMedia.open()"
    >
        <div
            class="relative order-1 flex h-[24px] w-[24px] flex-none flex-row flex-nowrap content-center items-center justify-start gap-1 overflow-visible p-0 opacity-100"
        >
            <i
                :class="`rendering-auto ${ socialMedia.getIcon() } pointer-events-none h-full w-full select-none object-contain object-center dark:text-white`"
            />
        </div>

        <div
            class="relative order-4 flex h-min w-max flex-none flex-col flex-nowrap content-start items-start justify-start gap-0 overflow-hidden p-0 opacity-100"
        >
            <div
                class="relative flex h-auto w-auto flex-none flex-shrink-0 transform-none flex-col justify-center overflow-visible whitespace-pre opacity-100 outline-none"
            >
                <p
                    class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-5 tracking-normal dark:text-white"
                >
                    {{ socialMedia.getHandle() }}
                </p>
            </div>
            <div
                v-if="socialMedia.getInfo().value.length > 0"
                class="relative flex h-auto w-auto flex-none flex-shrink-0 transform-none flex-col justify-center overflow-visible whitespace-pre text-[0px] leading-[1px] opacity-100 outline-none"
            >
                <span
                    class="whitespace-inherit word-wrap-inherit text-left text-[0px] leading-[0]"
                >
                    <span
                        class="block whitespace-normal text-sm font-medium normal-case not-italic leading-6 tracking-normal text-[#a1a1aa]"
                    >
                        {{ socialMedia.getInfo() }}
                    </span><br>
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="sass">

</style>