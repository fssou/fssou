<script lang="ts" setup>

class SocialMedia {
    private name: string
    private site: string
    private handle: string
    private prefix: string
    constructor (name: string, site: string, handle: string,) {
        this.name = name
        this.site = site
        this.handle = handle
    }

    public getName (): string {
        return this.name
    }

    public getSite (): string {
        return this.site
    }

    public getHandle (): string {
        return this.handle
    }

    public getLink (): string {
        return `${this.site}${this.handle}`
    }

    public open (): void {
        navigateTo(this.getLink(), { external: true, open: { target: "_blank", }, },)
    }
}

const twitter = new SocialMedia("Twitter", "https://twitter.com/", "fssouoficial",)
const github = new SocialMedia("Github", "https://github.com/", "fssou",)
const figma = new SocialMedia("Figma", "https://figma.com/@", "fssou",)
const email = new SocialMedia("Email", "mailto:", "f@francl.in",)
const linkedin = new SocialMedia("Linkedin", "https://linkedin.com/in/", "fssou",)
const codepen = new SocialMedia("Codepen", "https://codepen.io/", "fssou",)
const medium = new SocialMedia("Medium", "https://medium.com/@", "fssou",)

</script>

<template>
    <div>
        <div
            class="grid h-full grid-cols-2 grid-rows-5 gap-6"
        >
            <!-- Twitter -->
            <div
                class="twitter"
                @click="twitter.open()"
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
                            class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-5 tracking-normal dark:text-white"
                        >
                            @{{ twitter.getHandle() }}
                        </p>
                    </div>
                    <div
                        class="relative flex h-auto w-auto flex-none flex-shrink-0 transform-none flex-col justify-center overflow-visible whitespace-pre text-[0px] leading-[1px] opacity-100 outline-none"
                    >
                        <span
                            class="whitespace-inherit word-wrap-inherit text-left text-[0px] leading-[0]"
                        >
                            <span
                                class="block whitespace-normal text-sm font-medium normal-case not-italic leading-6 tracking-normal text-[#a1a1aa]"
                            >
                                10 seguidores
                            </span><br>
                        </span>
                    </div>
                </div>
            </div>

            <!-- Github -->
            <div
                class="github"
                @click="github.open()"
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
                            class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-5 tracking-normal dark:text-white"
                        >
                            @{{ github.getHandle() }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Figma -->
            <div
                class="figma"
                @click="figma.open()"
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
                            class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-5 tracking-normal dark:text-white"
                        >
                            @{{ figma.getHandle() }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Email -->
            <div
                class="email"
                @click="email.open()"
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
                            class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-5 tracking-normal dark:text-white"
                        >
                            {{ email.getHandle() }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Linkedin -->
            <div
                class="linkedin"
                @click="linkedin.open()"
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
                            class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-5 tracking-normal dark:text-white"
                        >
                            @{{ linkedin.getHandle() }}
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
                                    100 conexões
                                </span><br>
                            </span>
                        </span>
                    </div>
                </div>
            </div>

            <!-- Codepen -->
            <div
                class="codepen"
                @click="codepen.open()"
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
                            class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-5 tracking-normal dark:text-white"
                        >
                            @{{ codepen.getHandle() }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Medium -->
            <div
                class="medium"
                @click="medium.open()"
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
                            class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-5 tracking-normal dark:text-white"
                        >
                            @{{ medium.getHandle() }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.base
    @apply relative p-4 w-full
    @apply flex flex-col flex-nowrap content-start items-start justify-between
    @apply rounded-[20px] shadow-thin
    @apply cursor-pointer select-none overflow-hidden
    @apply transition duration-500 ease-in-out will-change-transform
    @apply dark:hover:brightness-150 dark:bg-gray-950
    @apply hover:bg-primary-700 hover:text-white

.twitter
    @apply base
    @apply row-span-2

.github
    @apply base

.figma
    @apply base

.email
    @apply base
    @apply col-span-2

.linkedin
    @apply base
    @apply row-span-2

.codepen
    @apply base

.medium
    @apply base

</style>
