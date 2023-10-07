<script lang="ts" setup>
import { sha256, } from "js-sha256"

const address: String = "f@francl.in"

const gravatarURL: string = `https://gravatar.com/avatar/${sha256(String(address,).trim().toLowerCase(),)}?s=128`

</script>

<template>
    <div>
        <div
            class="contents"
        >
            <div
                class="relative flex h-full w-full select-none flex-col flex-nowrap content-start items-start justify-start gap-[24px] overflow-hidden rounded-[20px] bg-[#121212] p-[24px] shadow-sm will-change-transform"
            >
                <div
                    class="absolute bottom-[-71px] right-[-108px] order-[0] h-[350px] w-[350px] flex-none opacity-100"
                >
                    <Cobe />
                </div>

                <div
                    class="relative order-1 flex h-min w-full flex-none flex-row flex-nowrap content-center items-center justify-start gap-1 p-0 opacity-100"
                >
                    <div
                        class="relative flex h-min w-px flex-[1_0_0px] flex-row flex-nowrap content-center items-center justify-start gap-3 p-0 opacity-100"
                    >
                        <div
                            class="relative aspect-square h-[50px] w-[50px] flex-none rounded-full opacity-100"
                        >
                            <div
                                class="rounded-inherit pointer-events-none absolute bottom-0 left-0 right-0 top-0 select-none"
                            >
                                <div
                                    class="rounded-inherit pointer-events-none contents"
                                >
                                    <img
                                        class="rounded-inherit rendering-auto pointer-events-none block h-full w-full select-none object-contain object-center"
                                        :src="gravatarURL"
                                        alt=""
                                    >
                                </div>
                            </div>
                        </div>
                        <div
                            class="relative flex h-min w-px flex-[1_0_0px] flex-col flex-nowrap content-start items-start justify-center gap-0 p-0 opacity-100"
                        >
                            <div
                                class="word-break word-wrap-break relative flex h-auto w-full flex-none flex-shrink-0 transform-none flex-col justify-center whitespace-pre-wrap opacity-100 outline-none"
                            >
                                <p
                                    class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-6 tracking-normal text-white"
                                >
                                    Franclin Sousa
                                </p>
                            </div>
                            <div
                                class="relative flex h-6 w-full flex-none flex-row flex-nowrap content-center items-center justify-start gap-2.5 p-0 opacity-100"
                            >
                                <div
                                    class="relative aspect-square h-2 w-2 flex-none rounded-full bg-[#34d399] opacity-100 will-change-transform"
                                />
                                <div
                                    class="word-break word-wrap-break relative flex h-auto w-px flex-[1_0_0px] flex-shrink-0 transform-none flex-col justify-end whitespace-pre-wrap opacity-100 outline-none"
                                >
                                    <p
                                        class="whitespace-normal text-start text-sm font-medium normal-case not-italic leading-6 tracking-normal text-[#a1a1aa]"
                                    >
                                        Software Engineer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="word-wrap-break word-break relative order-3 flex h-[250px] w-full flex-[1_0_0px] transform-none flex-col justify-start overflow-hidden opacity-100 outline-none"
                >
                    <p
                        class="m-0 whitespace-normal p-0 text-left font-medium normal-case not-italic text-white sm:text-3xl/[40px]"
                    >
                        Atualmente Full Cycle Developer, com uma paixão ardente por implementar tecnologias e inovação para impactar e transformar vidas. Experiente no desenvolvimento de softwares.
                    </p>
                </div>

                <div
                    class="relative order-4 flex h-min w-max flex-none flex-col flex-nowrap content-start items-start justify-start gap-0 overflow-hidden p-0 opacity-100"
                >
                    <div
                        class="relative flex h-auto w-auto flex-none flex-shrink-0 transform-none flex-col justify-center overflow-visible whitespace-pre opacity-100 outline-none"
                    >
                        <p
                            class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-5 tracking-normal text-white"
                        >
                            Baseado em Rio de Janeiro, BRA 🇧🇷
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
                                    UTC/GMT-3 horas
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
