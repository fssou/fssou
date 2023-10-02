<script lang="ts" setup>
import { sha256, } from "js-sha256"

const address: String = "f@francl.in"

const gravatarURL: string = `https://gravatar.com/avatar/${sha256(String(address,).trim().toLowerCase(),)}?s=128`

onMounted(() => {
    const carousel = document.querySelector(".carousel",)
    const inner = document.querySelector(".carousel-inner",)
    const slides = document.querySelectorAll(".carousel-slide",)

    let currentIndex = 0

    function updateCarousel () {
        console.info(slides,)
        const slideWidth = slides[0].offsetWidth
        inner.style.transform = `translateX(-${currentIndex * slideWidth}px)`
    }

    function nextSlide () {
        currentIndex = (currentIndex + 1) % slides.length
        updateCarousel()
    }

    function prevSlide () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length
        updateCarousel()
    }

    // setInterval(nextSlide, 3000,) // Avança automaticamente a cada 3 segundos

    // Você pode adicionar botões de próxima e anterior e vincular eventos de clique a eles
    // Exemplo:
    document.querySelector(".carousel-btn-forward",).addEventListener("click", nextSlide,)
    document.querySelector(".carousel-btn-back",).addEventListener("click", prevSlide,)
},)
</script>

<template>
    <div
        class="app-main-tiles relative flex w-[100%] flex-none flex-col content-start items-center justify-start gap-[8px] overflow-auto px-2 pb-2 pt-2 sm:h-[576px] sm:flex-row sm:flex-nowrap sm:gap-[32px] sm:px-8 sm:pt-0"
    >
        <!-- Summary -->
        <div
            v-for="it in [1,]"
            :key="it"
            class="app-tile-summary h-[512px] w-[100%] flex-none sm:h-full sm:w-[637px]"
        >
            <div
                class="contents"
            >
                <div
                    class="relative flex h-full w-full flex-col flex-nowrap content-start items-start justify-start gap-[24px] overflow-hidden rounded-[20px] bg-[#121212] p-[24px] shadow-sm will-change-transform"
                >
                    <div
                        class="absolute bottom-[-71px] right-[-108px] order-[0] h-[287px] w-[338px] flex-none opacity-100"
                    >
                        <div
                            class="flex h-full w-full place-content-center place-items-center overflow-visible bg-transparent"
                        >
                            <div
                                class="aspect-square w-full max-w-3xl"
                                style="-webkit-mask-image: radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 70%)"
                            >
                                <Cobe />
                            </div>
                        </div>
                    </div>

                    <div
                        class="relative order-1 flex h-min w-full flex-none flex-row flex-nowrap content-center items-center justify-start gap-1 overflow-visible p-0 opacity-100"
                    >
                        <div
                            class="relative flex h-min w-px flex-[1_0_0px] flex-row flex-nowrap content-center items-center justify-start gap-3 overflow-visible p-0 opacity-100"
                        >
                            <div
                                class="relative aspect-square h-[50px] w-[50px] flex-none overflow-visible rounded-full opacity-100"
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
                                class="relative flex h-min w-px flex-[1_0_0px] flex-col flex-nowrap content-start items-start justify-center gap-0 overflow-hidden p-0 opacity-100"
                            >
                                <div
                                    class="word-break word-wrap-break relative flex h-auto w-full flex-none flex-shrink-0 transform-none flex-col justify-center overflow-hidden whitespace-pre-wrap opacity-100 outline-none"
                                >
                                    <p
                                        class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-6 tracking-normal text-white"
                                    >
                                        Franclin Sousa
                                    </p>
                                </div>
                                <div
                                    class="relative flex h-6 w-full flex-none flex-row flex-nowrap content-center items-center justify-start gap-2.5 overflow-hidden p-0 opacity-100"
                                >
                                    <div
                                        class="relative aspect-square h-2 w-2 flex-none overflow-hidden rounded-full bg-[#34d399] opacity-100 will-change-transform"
                                    />
                                    <div
                                        class="word-break word-wrap-break relative flex h-auto w-px flex-[1_0_0px] flex-shrink-0 transform-none flex-col justify-end overflow-hidden whitespace-pre-wrap opacity-100 outline-none"
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

        <!-- Social Media -->
        <div
            class="app-tile-social-media h-[512px] w-[100%] flex-none sm:h-full sm:w-[512px]"
        >
            <div
                class="grid h-full grid-cols-2 grid-rows-5 gap-4"
            >
                <!-- Twitter -->
                <div
                    class="relative row-span-2 flex w-full flex-col flex-nowrap content-start items-start justify-between overflow-hidden rounded-[20px] bg-[#121212] p-[16px] shadow-sm transition duration-500 ease-in-out will-change-transform hover:bg-[#1a1a1a]"
                >
                    <div
                        class="relative order-1 flex h-[24px] w-[24px] flex-none flex-row flex-nowrap content-center items-center justify-start gap-1 overflow-visible p-0 opacity-100"
                    >
                        <span
                            class="rendering-auto i-devicon-twitter pointer-events-none h-full w-full select-none object-contain object-center"
                            alt=""
                        />
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
                                @fssouoficial
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
                                        1,254 followers
                                    </span><br>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Github -->
                <div
                    class="relative flex w-full flex-col flex-nowrap content-start items-start justify-between overflow-hidden rounded-[20px] bg-[#121212] p-[16px] shadow-sm will-change-transform"
                >
                    <div
                        class="relative order-1 flex h-[24px] w-[24px] flex-none flex-row flex-nowrap content-center items-center justify-start gap-1 overflow-visible p-0 opacity-100"
                    >
                        <span
                            class=" rendering-auto i-mdi-github pointer-events-none h-full w-full select-none object-contain object-center"
                            alt=""
                        />
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
                                @fssou
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Figma -->
                <div
                    class="relative flex w-full flex-col flex-nowrap content-start items-start justify-between overflow-hidden rounded-[20px] bg-[#121212] p-[16px] shadow-sm will-change-transform"
                >
                    <div
                        class="relative order-1 flex h-[24px] w-[24px] flex-none flex-row flex-nowrap content-center items-center justify-start gap-1 overflow-visible p-0 opacity-100"
                    >
                        <span
                            class="rendering-auto i-devicon-figma pointer-events-none h-full w-full select-none object-contain object-center"
                            alt=""
                        />
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
                                @fssouoficial
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Email -->
                <div
                    class="relative col-span-2 flex w-full flex-nowrap content-start items-center justify-start gap-4 overflow-hidden rounded-[20px] bg-[#121212] p-[16px] shadow-sm will-change-transform"
                >
                    <div
                        class="relative order-1 flex h-[24px] w-[24px] flex-none flex-row flex-nowrap content-center items-center justify-start gap-1 overflow-visible p-0 opacity-100"
                    >
                        <span
                            class="rendering-auto i-mdi-email-outline pointer-events-none h-full w-full select-none object-contain object-center"
                            alt=""
                        />
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
                                f@francl.in
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Linkedin -->
                <div
                    class="relative row-span-2 flex w-full flex-col flex-nowrap content-start items-start justify-between overflow-hidden rounded-[20px] bg-[#121212] p-[16px] shadow-sm will-change-transform"
                >
                    <div
                        class="relative order-1 flex h-[24px] w-[24px] flex-none flex-row flex-nowrap content-center items-center justify-start gap-1 overflow-visible p-0 opacity-100"
                    >
                        <span
                            class="rendering-auto i-devicon-linkedin pointer-events-none h-full w-full select-none object-contain object-center"
                            alt=""
                        />
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
                                @fssou
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
                                        254 connections
                                    </span><br>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Codepen -->
                <div
                    class="relative flex w-full flex-col flex-nowrap content-start items-start justify-between overflow-hidden rounded-[20px] bg-[#121212] p-[16px] shadow-sm will-change-transform"
                >
                    <div
                        class="relative order-1 flex h-[24px] w-[24px] flex-none flex-row flex-nowrap content-center items-center justify-start gap-1 overflow-visible p-0 opacity-100"
                    >
                        <span
                            class="rendering-auto i-tabler-brand-codepen pointer-events-none h-full w-full select-none object-contain object-center"
                            alt=""
                        />
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
                                @fssou
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Medium -->
                <div
                    class="relative flex w-full flex-col flex-nowrap content-start items-start justify-between overflow-hidden rounded-[20px] bg-[#121212] p-[16px] shadow-sm will-change-transform"
                >
                    <div
                        class="relative order-1 flex h-[24px] w-[24px] flex-none flex-row flex-nowrap content-center items-center justify-start gap-1 overflow-visible p-0 opacity-100"
                    >
                        <span
                            class="rendering-auto i-mdi-medium pointer-events-none h-full w-full select-none object-contain object-center"
                            alt=""
                        />
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
                                @fssou
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Social Media -->

        <!-- Photos -->
        <div
            class="app-tile-photos h-[2136px] w-[100%] flex-none overflow-hidden sm:h-full sm:w-[1337px]"
        >
            <div class="flex h-full w-full flex-col flex-nowrap content-center gap-4 sm:flex-row">
                <div class="relative h-full w-full basis-1/4 rounded-[20px]">
                    <div class="rounded-inherit pointer-events-none absolute inset-0 h-full select-none">
                        <div class="rounded-inherit pointer-events-none contents">
                            <img class="rounded-inherit pointer-events-none h-full w-full select-none object-cover object-center" src="~/assets/img/bg/img_000_000_001.jpg" alt="">
                        </div>
                    </div>
                </div>

                <div class="relative grid h-full w-full flex-none basis-2/4 grid-cols-2 grid-rows-5 gap-4">
                    <div class="relative row-span-2 h-full rounded-[20px]">
                        <div class="rounded-inherit pointer-events-none absolute inset-0 h-full select-none">
                            <div class="rounded-inherit pointer-events-none contents">
                                <img class="rounded-inherit pointer-events-none h-full w-full select-none object-cover object-center" src="~/assets/img/bg/img_000_000_002.jpg" alt="">
                            </div>
                        </div>
                    </div>

                    <div class="relative row-span-2 h-full rounded-[20px]">
                        <div class="rounded-inherit pointer-events-none absolute inset-0 h-full select-none">
                            <div class="rounded-inherit pointer-events-none contents">
                                <img class="rounded-inherit pointer-events-none h-full w-full select-none object-cover object-center" src="~/assets/img/bg/img_000_000_003.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="relative col-span-2 h-full rounded-[20px]">
                        <div class="rounded-inherit pointer-events-none absolute inset-0 h-full select-none">
                            <div class="rounded-inherit pointer-events-none contents">
                                <img class="rounded-inherit pointer-events-none h-full w-full select-none object-cover object-center" src="~/assets/img/bg/img_000_000_004.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="relative col-span-2 row-span-2 h-full rounded-[20px]">
                        <div class="rounded-inherit pointer-events-none absolute inset-0 h-full select-none">
                            <div class="rounded-inherit pointer-events-none contents">
                                <img class="rounded-inherit pointer-events-none h-full w-full select-none object-cover object-center" src="~/assets/img/bg/img_000_000_004.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative h-full w-full flex-none basis-1/4 rounded-[20px]">
                    <div class="rounded-inherit pointer-events-none absolute inset-0 select-none">
                        <div class="rounded-inherit pointer-events-none contents">
                            <img class="rounded-inherit pointer-events-none h-full w-full select-none object-cover object-center" src="~/assets/img/bg/img_000_000_005.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Photos -->

        <!-- Instagram Widget -->
        <div
            class="app-tile-widget-instagram h-[512px] w-[100%] flex-none sm:h-full sm:w-[476px]"
        >
            <div
                class="contents"
            >
                <div
                    class="relative flex h-full w-full flex-col flex-nowrap content-start items-start justify-start gap-[16px] overflow-hidden rounded-[20px] bg-[#121212] shadow-sm will-change-transform"
                >
                    <div
                        class="relative order-1 flex h-min w-full flex-none flex-row flex-nowrap content-center items-center justify-start gap-1 overflow-visible p-[16px] pb-0 opacity-100"
                    >
                        <div
                            class="relative flex h-min w-px flex-[1_0_0px] flex-row flex-nowrap content-center items-center justify-between gap-3 overflow-visible p-0 opacity-100"
                        >
                            <div
                                class="relative aspect-square h-[24px] w-[24px] flex-none overflow-visible rounded-full opacity-100"
                            >
                                <div
                                    class="rounded-inherit pointer-events-none absolute bottom-0 left-0 right-0 top-0 select-none"
                                >
                                    <div
                                        class="rounded-inherit pointer-events-none contents h-[24px] w-[24px]"
                                    >
                                        <span
                                            class="i-skill-icons-instagram rendering-auto pointer-events-none block h-full w-full select-none object-contain object-center"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                class="flex h-min min-w-min flex-none flex-nowrap content-end items-end justify-between gap-0 overflow-hidden p-0 align-bottom opacity-100"
                            >
                                <div
                                    class="word-break word-wrap-break relative flex hidden h-auto w-full flex-shrink transform-none flex-col justify-center overflow-hidden whitespace-pre-wrap opacity-100 outline-none"
                                >
                                    <p
                                        class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-6 tracking-normal text-white"
                                    >
                                        Franclin Sousa
                                    </p>
                                </div>
                                <div
                                    class="relative flex hidden h-6 w-full flex-none flex-row flex-nowrap content-center items-center justify-start gap-2.5 overflow-hidden p-0 opacity-100"
                                >
                                    <div
                                        class="relative aspect-square h-2 w-2 flex-none overflow-hidden rounded-full bg-[#34d399] opacity-100 will-change-transform"
                                    />
                                    <div
                                        class="word-break word-wrap-break relative flex h-auto w-px flex-[1_0_0px] flex-shrink-0 transform-none flex-col justify-end overflow-hidden whitespace-pre-wrap opacity-100 outline-none"
                                    >
                                        <p
                                            class="whitespace-normal text-start text-sm font-medium normal-case not-italic leading-6 tracking-normal text-[#a1a1aa]"
                                        >
                                            Software Engineer
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="relative flex h-auto w-full flex-none flex-shrink-0 transform-none flex-row justify-center gap-1 overflow-hidden whitespace-pre-wrap opacity-100 outline-none"
                                >
                                    <span class="i-ic-round-arrow-back-ios carousel-btn-back" />
                                    <span class="i-ic-round-arrow-forward-ios carousel-btn-forward" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="carousel -z-10 order-2 flex w-full flex-[1_0_0px] transform-none flex-col justify-start overflow-hidden opacity-100 outline-none"
                    >
                        <div class="carousel-inner flex w-full transition duration-300 ease-in-out">
                            <div class="flex min-w-full items-center justify-center">
                                <img src="~/assets/img/misc/eg/beach_dark.jpg" class="carousel-slide h-full w-full object-cover object-center" alt="">
                            </div>
                            <div class="flex min-w-full items-center justify-center">
                                <img src="~/assets/img/misc/eg/bridge_san_francisco.jpg" class="carousel-slide h-full w-full object-cover object-center" alt="">
                            </div>
                            <div class="flex min-w-full items-center justify-center">
                                <img src="~/assets/img/misc/eg/city_road_build.jpg" class="carousel-slide h-full w-full object-cover object-center" alt="">
                            </div>
                        </div>
                    </div>

                    <div
                        class="relative order-4 flex h-min w-max flex-none flex-col flex-nowrap content-start items-start justify-start gap-0 overflow-hidden p-[16px] pt-0 opacity-100"
                    >
                        <div
                            class="relative flex h-auto w-auto flex-none flex-shrink-0 transform-none flex-col justify-center overflow-visible whitespace-pre opacity-100 outline-none"
                        >
                            <p
                                class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-5 tracking-normal text-white"
                            >
                                @fssouoficial
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Instagram Widget -->

        <!-- Contents -->
        <div
            class="app-tile-contents h-[512px] w-[100%] flex-none overflow-auto sm:h-full sm:w-[340px]"
        >
            <div class="flex flex-1 flex-col gap-4">
                <div
                    v-for="it in [1,2,3,4,5]"
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
        <!-- End Contents -->

        <!-- Final Tile -->
        <div
            class="app-tile-end h-[512px] w-[100%] flex-none sm:h-full sm:w-[254px]"
        >
            <div
                class="contents"
            >
                <div
                    class="relative flex h-full w-full flex-col flex-nowrap content-start items-start justify-between gap-[24px] overflow-hidden rounded-[20px] bg-[#121212] p-[16px] shadow-sm will-change-transform"
                >
                    <div
                        class="absolute bottom-[-71px] right-[-108px] order-[0] hidden h-[287px] w-[338px] flex-none opacity-100"
                    >
                        <div
                            class="flex h-full w-full place-content-center place-items-center overflow-visible bg-transparent"
                        >
                            <div
                                class="aspect-square w-full max-w-3xl"
                                style="-webkit-mask-image: radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 70%)"
                            >
                                <Cobe />
                            </div>
                        </div>
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
                                    class="rendering-auto i-ph-globe pointer-events-none h-full w-full select-none object-contain object-center"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        class="relative order-4 flex h-min w-full flex-none flex-col flex-nowrap content-start items-start justify-start gap-0 overflow-hidden p-0 opacity-100"
                    >
                        <div
                            class="relative flex h-auto w-auto flex-none flex-shrink-0 transform-none flex-col justify-center overflow-visible whitespace-pre opacity-100 outline-none"
                        >
                            <p
                                class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-5 tracking-normal text-white"
                            >
                                Vamos conversar?
                            </p>
                        </div>
                        <div
                            class=" relative flex h-auto w-auto flex-none flex-shrink-0 transform-none flex-col justify-center overflow-visible whitespace-pre text-[0px] leading-[1px] opacity-100 outline-none"
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
                                        Estou aqui para ajudar!
                                    </span><br>
                                </span>
                            </span>
                        </div>
                        <button class="mt-4 w-full rounded-[12px] bg-[#27272a] px-3 py-2">
                            <p class="whitespace-normal font-medium text-white">
                                Contato
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Final Tile -->
    </div>
</template>
