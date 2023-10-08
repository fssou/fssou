<!-- HomePhotos.vue -->
<script lang="ts" setup>
const lightboxImage = ref()
const showLightboxImage = ref(false,)
const { disabledEvent, enabledEvent, } = useMouse()

const handlerLightboxImage = (el: MouseEvent,) => {
    if (el.target instanceof HTMLImageElement) {
        lightboxImage.value = el.target.src
        showLightboxImage.value = true
        disabledEvent()
    }
}
const handlerLightboxImageClose = (e: any,) => {
    if (e.currentTarget === e.target) {
        showLightboxImage.value = false
        enabledEvent()
    }
}
onMounted(() => {

},)

</script>

<template>
    <main>
        <div class="flex h-full w-full flex-col flex-nowrap content-center gap-6 sm:flex-row">
            <div class="relative h-full w-full basis-1/4 overflow-hidden rounded-[20px]">
                <div class="h-full w-full select-none transition-transform duration-[5000ms] ease-linear will-change-transform hover:scale-110">
                    <div class="h-full w-full brightness-50 transition duration-700 ease-in-out will-change-contents hover:brightness-100">
                        <div class="contents">
                            <img class="absolute inset-0 h-full w-full select-none object-cover object-left" src="~/assets/img/personal/IMG_000000000004.jpg" alt="" @click="handlerLightboxImage">
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative grid h-full w-full flex-none basis-2/4 grid-cols-2 grid-rows-5 gap-4">
                <div class="row-span-2 h-full overflow-hidden rounded-[20px] cursor-pointer">
                    <div class="h-full w-full select-none transition-transform duration-[5000ms] ease-linear will-change-transform hover:scale-110">
                        <div class="h-full w-full brightness-50 transition duration-700 ease-in-out will-change-contents hover:brightness-100">
                            <div class="contents">
                                <img class="inset-0 h-full w-full select-none object-cover object-center" src="~/assets/img/personal/IMG_000000000002.jpg" alt="" @click="handlerLightboxImage">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative row-span-2 h-full overflow-hidden rounded-[20px] cursor-pointer">
                    <div class="h-full w-full select-none transition-transform duration-[5000ms] ease-linear will-change-transform hover:scale-110">
                        <div class="h-full w-full brightness-50 transition duration-700 ease-in-out will-change-contents hover:brightness-100">
                            <div class="contents">
                                <img class="absolute h-full w-full object-cover object-center" src="~/assets/img/personal/IMG_000000000006.jpg" alt="" @click="handlerLightboxImage">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative col-span-2 h-full overflow-hidden rounded-[20px] cursor-pointer">
                    <div class="h-full w-full select-none transition-transform duration-[5000ms] ease-linear will-change-transform hover:scale-110">
                        <div class="h-full w-full brightness-50 transition duration-700 ease-in-out will-change-contents hover:brightness-100">
                            <div class="contents">
                                <img class="absolute h-full w-full object-cover object-top sm:object-[0_-14.5rem]" src="~/assets/img/personal/IMG_000000000010.jpg" alt="" @click="handlerLightboxImage">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative col-span-2 row-span-2 h-full overflow-hidden rounded-[20px] cursor-pointer">
                    <div class="h-full w-full select-none transition-transform duration-[5000ms] ease-linear will-change-transform hover:scale-110">
                        <div class="h-full w-full brightness-50 transition duration-700 ease-in-out will-change-contents hover:brightness-100">
                            <div class="contents">
                                <img class="absolute h-full w-full object-cover object-center sm:object-[0_-10rem]" src="~/assets/img/personal/IMG_000000000005.jpg" alt="" @click="handlerLightboxImage">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative h-full w-full flex-none basis-1/4 overflow-hidden rounded-[20px] cursor-pointer">
                <div class="h-full w-full select-none transition-transform duration-[5000ms] ease-linear will-change-transform hover:scale-110">
                    <div class="h-full w-full brightness-50 transition duration-700 ease-in-out will-change-contents hover:brightness-100">
                        <div class="contents">
                            <img class="absolute inset-0 h-full w-full object-cover object-[-100px]" src="~/assets/img/personal/IMG_000000000009.jpg" alt="" @click="handlerLightboxImage">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <transition
            enter-active-class="transition-opacity duration-300 ease-in-out"
            leave-active-class="transition-opacity duration-300 ease-in-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                v-if="showLightboxImage"
                class="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-90 p-[2rem] sm:p-[10rem]"
                @click="handlerLightboxImageClose"
            >
                <img class="h-max-[75%] w-max-[75%] select-none object-cover object-left" :src="lightboxImage" alt="">
            </div>
        </transition>
    </main>
</template>

<style lang="sass">

</style>
