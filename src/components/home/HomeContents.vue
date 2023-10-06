<script lang="ts" setup>
</script>
<template>
    <div>
        <div class="flex flex-1 flex-col gap-4">
            <div
                v-for="it in [1]"
                :key="it"
                class="relative flex h-[157px] w-full flex-col flex-nowrap content-start items-start justify-end overflow-hidden rounded-[20px] bg-[#121212] p-[16px] shadow-sm will-change-transform"
            >
                <div
                    class="relative order-4 flex h-min w-max flex-none flex-col flex-nowrap content-start items-start justify-start gap-0 overflow-hidden p-0 opacity-100"
                >
                    <div
                        class="relative flex h-auto w-auto flex-none flex-shrink-0 transform-none flex-col justify-center overflow-visible whitespace-pre opacity-100 outline-none"
                    >
                        <p
                            class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-5 tracking-normal text-white"
                        >
                            Designing Inclusive Experiences
                        </p>
                    </div>
                    <div
                        class="relative flex h-auto w-auto flex-none flex-shrink-0 transform-none flex-col justify-center overflow-visible whitespace-pre text-[0px] leading-[1px] opacity-100 outline-none"
                    >
                        <span
                            class="whitespace-inherit word-wrap-inherit text-left text-[0px] leading-[0]"
                        >
                            <span
                                class="block text-[0px]"
                            >
                                <span
                                    class="whitespace-normal text-sm font-medium normal-case not-italic leading-6 tracking-normal text-[#a1a1aa]"
                                >
                                    Ago 28, 2023
                                </span><br>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="sass">
</style>
