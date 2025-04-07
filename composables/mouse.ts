
export function useMouse() {
    const x = ref(0,)
    const y = ref(0,)

    const targetWheelEvent = document.body

    const onMouseWheel = (event: WheelEvent,) => {
        x.value = event.deltaX
        y.value = event.deltaY < 0 ? event.deltaY + 25 : event.deltaY - 25
    }

    const onWheel = (event: WheelEvent,) => {
        const velocity = 50
        if(event.currentTarget instanceof HTMLElement)
            event.currentTarget.scrollLeft += y.value < 0 ? y.value - velocity : y.value + velocity
    }

    onMounted(() => targetWheelEvent.addEventListener("wheel", onMouseWheel, { passive: true, },),)
    onUnmounted(() => targetWheelEvent.removeEventListener("wheel", onMouseWheel,),)

    return {
        x,
        y,
        onWheel,
    }
}
