<script setup lang="ts">
import { ref, onMounted } from "vue";
import createGlobe from "cobe";

const el = ref();
const phi = ref(0);

onMounted(() => {
    const globe = createGlobe(el.value, {
        devicePixelRatio: 2,
        width: 300 * 2,
        height: 300 * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 0.1,
        mapSamples: 16000,
        mapBrightness: 100,
        baseColor: [0.65, 0.65, 0.65],
        markerColor: [1, 0, 0],
        glowColor: [0.15, 0.15, 0.15],
        markers: [
            {
                location: [-22.9484719, -43.2160722],
                size: 0.04,
            },
        ],
        onRender: (state) => {
            state.phi = phi.value;
            phi.value += 0.005;
        },
    });
});

</script>

<template>
    <div>
        <canvas ref="el" class="w-full h-full cursor-auto select-none" style="contain: size layout paint" width="676" height="676"></canvas>
    </div>
</template>