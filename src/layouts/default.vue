<template>
    <div id="layout-default" class="flex">
        <div id="wrapper" class="contents">
            <div
                id="container-wrapper"
                class="flex h-full sm:h-screen w-full flex-none items-center bg-[#0a0a0b]"
            >
                <div
                    class="relative flex h-auto w-full flex-none flex-col flex-nowrap items-center sm:h-max sm:py-[48px]"
                >
                    <!-- Tiles is content of pages separetes in blocks-->
                    <div id="tiles-wrapper" class="w-full">
                        <NuxtPage />
                    </div>
                </div>
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
