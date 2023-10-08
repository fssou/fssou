<script lang="ts" setup>

const currentIndex: Ref<number> = ref(0,)

const updateCarousel = () => {
    const slideWidth = document.querySelectorAll(".carousel-slide",)[0].offsetWidth
    document.querySelector(".carousel-wrapper",).style.transform = `translateX(-${currentIndex.value * slideWidth}px)`
}

const carouselSlideNext = () => {
    const slides = document.querySelectorAll(".carousel-slide",)
    currentIndex.value = (currentIndex.value + 1) % slides.length
    updateCarousel()
}

const carouselSlidePrev = () => {
    const slides = document.querySelectorAll(".carousel-slide",)
    currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
    updateCarousel()
}

</script>

<template>
    <div>
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
                                class="relative flex h-[24px] w-full flex-none flex-shrink-0 transform-none flex-row justify-center gap-1 overflow-hidden whitespace-pre-wrap opacity-100 outline-none"
                            >
                                <span class="i-ic-round-arrow-back-ios carousel-btn-back h-full cursor-pointer" @click="carouselSlidePrev" />
                                <span class="i-ic-round-arrow-forward-ios carousel-btn-forward h-full cursor-pointer" @click="carouselSlideNext" />
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="carousel -z-10 order-2 flex w-full flex-[1_0_0px] transform-none select-none flex-col justify-start overflow-hidden opacity-100 outline-none"
                >
                    <div class="carousel-wrapper flex h-full w-fit transition duration-500 ease-in-out">
                        <div class="h-full w-full flex-none">
                            <img src="~/assets/img/personal/IMG_000000000001.jpg" class="carousel-slide h-full w-full object-cover object-top" alt="">
                        </div>
                        <div class="h-full w-full flex-none">
                            <img src="~/assets/img/personal/IMG_000000000003.jpg" class="carousel-slide h-full w-full object-cover object-center" alt="">
                        </div>
                        <div class="h-full w-full flex-none">
                            <img src="~/assets/img/personal/IMG_000000000011.jpg" class="carousel-slide h-full w-full object-cover object-center" alt="">
                        </div>
                        <div class="h-full w-full flex-none">
                            <img src="~/assets/img/personal/IMG_000000000007.jpg" class="carousel-slide h-full w-full object-cover object-center" alt="">
                        </div>
                        <div class="h-full w-full flex-none">
                            <img src="~/assets/img/personal/IMG_000000000008.jpg" class="carousel-slide h-full w-full object-cover object-top" alt="">
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
</template>
<style lang="sass">
</style>
