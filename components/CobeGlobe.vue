<script lang="ts" setup>
import { ref, onMounted, } from "vue"
import createGlobe, { type Marker, } from "cobe"

const props = defineProps({
    size: {
        type: Number,
        default: window.innerWidth / 2,
    },
},)

const cobe = ref()
const phi = ref(4,)
const marker = ref<Marker>({
    location: [
        0,
        0,
    ],
    size: 0,
},)

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === "dark",)

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position,) => {
        const { latitude, longitude, } = position.coords
        marker.value = {
            location: [
                latitude,
                longitude,
            ],
            size: 0.01,
        }
    },)
}

onMounted(() => {
    const size = props.size
    createGlobe(cobe.value, {
        devicePixelRatio: 1,
        width: size,
        height: size,
        scale: 1,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 64000,
        mapBrightness: 6,
        opacity: 0.9,
        baseColor: [
            1,
            1,
            1,
        ],
        markerColor: [
            1,
            0,
            0,
        ],
        glowColor: [
            0.3,
            0.3,
            0.3,
        ],
        offset: [
            0,
            0,
        ],
        markers: Array.of<Marker>(),
        onRender: (state,) => {
            state.phi = phi.value
            state.dark = isDark.value ? 1 : 0
            state.diffuse = isDark.value ? 1.2 : 0.7
            state.glowColor = isDark.value ? [
                0.3,
                0.3,
                0.3,
            ] : [
                1,
                1,
                1,
            ]
            state.markers = [
                {
                    location: [
                        -22.9484719,
                        -43.2160722,
                    ],
                    size: 0.02,
                },
                marker.value,
            ]
            phi.value += 0.005
        },
    },)
},)

</script>

<template>
    <div
        class="container"
    >
        <div class="wrapper">
            <canvas
                ref="cobe"
                class="h-full w-full object-cover"
                :width="`${size}px`"
                :height="`${size}px`"
            />
        </div>
    </div>
</template>

<style lang="sass" scoped>
$radial-gradient: radial-gradient(circle at 50% 50%, #000000 60%, #00000000 70%)

.container
    @apply flex
    @apply h-full
    @apply w-full
    @apply items-center
    @apply justify-center
    @apply overflow-hidden
    @apply bg-transparent
    -webkit-mask-image: $radial-gradient
    mask-image: $radial-gradient

.wrapper
    @apply flex
    @apply h-full
    @apply w-full
    @apply cursor-auto
    @apply select-none
</style>
