<script setup lang="ts">
import { ref, onMounted, } from "vue"
import createGlobe from "cobe"

const el = ref()
const phi = ref(0,)

onMounted(() => {
    const cobe = createGlobe(el.value, {
        devicePixelRatio: 2,
        width: 300 * 2,
        height: 300 * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 0.1,
        mapSamples: 16000,
        mapBrightness: 100,
        baseColor: [
            0.65,
            0.65,
            0.65,
        ],
        markerColor: [
            1,
            0,
            0,
        ],
        glowColor: [
            0.15,
            0.15,
            0.15,
        ],
        markers: [
            {
                location: [
                    -22.9484719,
                    -43.2160722,
                ],
                size: 0.04,
            },
        ],
        onRender: (state,) => {
            state.phi = phi.value
            phi.value += 0.005
        },
    },)
    function redimensionarCanvas () {
        const canvas = document.getElementById("cobe",)

        // Ajuste o tamanho do canvas com base no tamanho da tela
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        cobe.resize()
        console.info("Mudando tamanho da tela.",)
    }

    // Chame a função para redimensionar o canvas quando a janela for redimensionada
    window.addEventListener("resize", redimensionarCanvas,)
},)

</script>

<template>
    <div
        class="flex h-full w-full place-content-center place-items-center items-center justify-center overflow-hidden bg-transparent"
        style="-webkit-mask-image: radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 70%)"
    >
        <div class="aspect-square h-full w-full cursor-auto select-none w-full h-full">
            <canvas id="cobe" ref="el" class="h-full w-full" height="1000" width="1000" />
        </div>
    </div>
</template>
