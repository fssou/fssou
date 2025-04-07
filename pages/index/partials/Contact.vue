<script lang="ts" setup>
const app = useAppConfig()

const onClickYes = () => {
    navigateTo("https://t.me/fssou", {external: true, open: {target: "_blank",},},)
}

</script>

<template>
    <div>
        <div
            class="contents"
        >
            <div
                class="relative flex h-full w-full flex-col flex-nowrap content-start items-start justify-between gap-[24px] overflow-hidden rounded-[20px] dark:bg-[#121212] p-[16px] shadow-thin will-change-transform"
            >
                <div class="absolute right-0 top-0 h-full w-full">
                    <video
                        autoplay
                        loop
                        muted
                        class="inset-0 h-full w-full object-cover object-center dark:brightness-50"
                    >
                        <source src="~/assets/vid/VID_0000000001.mp4" type="video/mp4">
                    </video>
                </div>
                <div
                    class="relative order-1 flex h-min w-full flex-none flex-row flex-nowrap content-center items-center justify-start gap-1 overflow-visible p-0 opacity-100"
                >
                    <div
                        class="relative flex h-min w-px flex-[1_0_0px] flex-row flex-nowrap content-center items-center justify-start gap-3 overflow-visible p-0 opacity-100"
                    >
                        <div
                            class="relative flex h-[24px] w-[24px] flex-none flex-row flex-nowrap content-center items-center justify-start gap-1 overflow-visible p-0 opacity-100"
                        >
                            <span
                                class="rendering-auto i-ph-globe pointer-events-none h-full w-full select-none object-contain object-center text-white"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div
                    class="relative order-4 flex h-min w-full flex-col flex-nowrap content-start justify-start gap-0 overflow-hidden p-0 opacity-100"
                >
                    <div
                        class="relative flex h-auto w-auto flex-none flex-shrink-0 transform-none flex-col justify-center overflow-visible whitespace-pre opacity-100 outline-none"
                    >
                        <p
                            class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-5 tracking-normal text-white select-none"
                        >
                            Vamos conversar?
                        </p>
                    </div>
                    <div
                        class=" relative flex h-auto w-auto flex-none flex-shrink-0 transform-none flex-col justify-center overflow-visible whitespace-pre text-[0px] leading-[1px] opacity-100 outline-none"
                    >
                        <div
                            class="whitespace-inherit word-wrap-inherit text-left text-[0px] leading-[0]"
                        >
                            <div
                                class="block text-[0px]"
                            >
                                <p
                                    class="whitespace-normal text-sm font-medium normal-case not-italic leading-6 tracking-normal text-[#a1a1aa] select-none"
                                >
                                    Vem comigo!
                                </p><br>
                            </div>
                        </div>
                    </div>
                    <UButton
                        class="text-center text-3xl font-medium text-white mt-4 px-3 py-3 gap-4 w-full items-center justify-center transition duration-1000 ease-in-out rounded-[12px] bg-[#27272a] hover:bg-primary-700"
                        size="xl"
                        @click="onClickYes"
                    >🤙🏽</UButton>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@reference "~/assets/css/main.tw.reference.css";

</style>
