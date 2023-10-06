<script lang="ts" setup>

onMounted(() => {
    const carousel = document.querySelector(".carousel",)
    const inner = document.querySelector(".carousel-inner",)
    const slides = document.querySelectorAll(".carousel-slide",)

    let currentIndex = 0

    function updateCarousel () {
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
        <HomeSummary class="app-tile-summary h-[512px] w-[100%] flex-none sm:h-full sm:w-[512px]" />

        <!-- Social Media -->
        <HomeSocialMedia class="app-tile-social-media h-[512px] w-[100%] flex-none sm:h-full sm:w-[512px]" />
        <!-- End Social Media -->

        <!-- Photos -->
        <HomePhotos class="app-tile-photos h-[2136px] w-[100%] flex-none overflow-hidden sm:h-full sm:w-[1337px]" />
        <!-- End Photos -->

        <!-- Instagram Widget -->
        <HomeWidgetInstagram class="app-tile-widget-instagram h-[512px] w-[100%] flex-none sm:h-full sm:w-[476px]" />
        <!-- End Instagram Widget -->

        <!-- Contents -->
        <HomeContents v-if="false" class="app-tile-contents h-[512px] w-[100%] flex-none overflow-auto sm:h-full sm:w-[340px]" />
        <!-- End Contents -->

        <!-- Final Tile -->
        <HomeContact class="app-tile-end h-[512px] w-[100%] flex-none sm:h-full sm:w-[254px]" />
        <!-- End Final Tile -->
    </div>
</template>
