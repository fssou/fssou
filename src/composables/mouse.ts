const handlerWheelEvent = (e: any,) => {
    const scroll = document.body
    if (scroll instanceof HTMLBodyElement) {
        scroll.scrollLeft += e.deltaY
    }
}

export function useMouse () {
    const enabledEvent = () => {
        document.body.addEventListener("wheel", handlerWheelEvent, { passive: true, },)
    }
    const disabledEvent = () => {
        document.body.removeEventListener("wheel", handlerWheelEvent,)
    }
    return { disabledEvent, enabledEvent, }
}
