<script lang="ts" setup>

const { disabledEvent, enabledEvent, } = useMouse()

onMounted(() => {
    enabledEvent()
},)

onBeforeUnmount(() => {
    disabledEvent()
},)

</script>

<template>
    <div id="layout-default" class="h-full w-fit">
        <div id="wrapper" class="flex h-full w-full flex-none items-center justify-center self-center bg-[#0a0a0a] object-cover p-5">
            <div id="tiles-wrapper" class="flex w-full flex-none flex-col flex-nowrap items-center sm:h-max sm:py-[48px]">
                <NuxtPage />
            </div>

            <!-- Top level of page -->
            <div v-if="false" class="fixed bottom-5 right-5 h-auto w-auto flex-none text-[24px] text-[#FACE4B] transition duration-300 hover:text-[#E0A800]">
                <div
                    class="flex cursor-pointer rounded-full bg-[#2b2b2b] p-[12px] opacity-100 transition duration-300 hover:scale-110"
                >
                    <div class="i-ic-sharp-wb-sunny" />
                    <div class="i-ic-sharp-nightlight hidden -rotate-45" />
                </div>
            </div>

            <!-- Overlay -->
            <div id="overlay" />
        </div>
    </div>
</template>

<style lang="css">
</style>
