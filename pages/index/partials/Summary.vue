<script lang="ts" setup>
import { sha256, } from "js-sha256"

const name: string = "Franclin"
const jobTitle: string = "Engenheiro de Software"
const address: string = "f@francl.in"
const gravatarURL: string = `https://gravatar.com/avatar/${sha256(String(address,).trim().toLowerCase(),)}?s=128`
const summary: string = "Movido por uma paixão inabalável por tecnologia e inovação, minha jornada profissional é guiada pelo desejo profundo de usar a tecnologia como uma força transformadora, capaz de tocar vidas e deixar um impacto duradouro no mundo."
const location: string = "Baseado em Rio de Janeiro, BRA 🇧🇷"
const utc: string = "UTC/GMT-3"

const size: number = window.innerWidth / 1.1
</script>

<template>
    <div>
        <div
            class="contents"
        >
            <div
                class="relative flex h-full w-full select-none flex-col flex-nowrap content-start items-start justify-start gap-[24px] overflow-hidden rounded-[20px] bg-foreground dark:bg-background-950 p-[24px] shadow-thin will-change-transform transition duration-500 ease-in-out"
            >
                <div
                    :class="`h-[${size}px] w-[${size}px]`"
                    class="cobe absolute bottom-0 right-0 order-[0] flex  translate-x-1/4 translate-y-1/4 opacity-100"
                >
                    <CobeGlobe
                        class="dark:brightness-50"
                        :size="size"
                    />
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
                                    class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-6 tracking-normal dark:text-white"
                                >
                                    {{ name }}
                                </p>
                            </div>
                            <div
                                class="relative flex h-6 w-full flex-none flex-row flex-nowrap content-center items-center justify-start gap-2.5 p-0 opacity-100"
                            >
                                <div class="relative aspect-square h-3 w-3 flex-none animate-pulse rounded-full bg-[#34d399] opacity-100 will-change-transform" />
                                <div
                                    class="word-break word-wrap-break relative flex h-auto w-px flex-[1_0_0px] flex-shrink-0 transform-none flex-col justify-end whitespace-pre-wrap opacity-100 outline-none"
                                >
                                    <p
                                        class="whitespace-normal text-start text-sm font-medium normal-case not-italic leading-6 tracking-normal text-[#a1a1aa]"
                                    >
                                        {{ jobTitle }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="word-wrap-break word-break relative order-3 flex h-[250px] w-full flex-[1_0_0px] transform-none flex-col justify-start overflow-hidden opacity-100 outline-none"
                >
                    <h1
                        class="m-0 whitespace-normal p-0 text-left text-2xl font-medium normal-case not-italic dark:text-white"
                    >
                        {{ summary }}
                    </h1>
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
                            {{ location }}
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
                                    {{ utc }}
                                </span><br>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
</style>
