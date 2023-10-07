
import { prefix } from '#tailwind-config';

import { prefix } from '#tailwind-config';

import { isJsxOpeningLikeElement } from 'typescript';

import { formatDiagnosticsWithColorAndContext } from 'typescript';
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
            class="grid h-full grid-cols-2 grid-rows-5 gap-4"
        >
            <!-- Twitter -->
            <div
                class="relative row-span-2 flex w-full cursor-pointer select-none flex-col flex-nowrap content-start items-start justify-between overflow-hidden rounded-[20px] bg-[#121212] p-[16px] shadow-sm transition duration-500 ease-in-out will-change-transform hover:bg-[#1a1a1a]"
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
                            class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-5 tracking-normal text-white"
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
                                class="block text-[0px]"
                            >
                                <span
                                    class="whitespace-normal text-sm font-medium normal-case not-italic leading-6 tracking-normal text-[#a1a1aa]"
                                >
                                    10 seguidores
                                </span><br>
                            </span>
                        </span>
                    </div>
                </div>
            </div>

            <!-- Github -->
            <div
                class="relative flex w-full cursor-pointer select-none flex-col flex-nowrap content-start items-start justify-between overflow-hidden rounded-[20px] bg-[#121212] p-[16px] shadow-sm transition duration-300 ease-in-out will-change-transform hover:bg-[#1a1a1a]"
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
                            class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-5 tracking-normal text-white"
                        >
                            @{{ github.getHandle() }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Figma -->
            <div
                class="relative flex w-full cursor-pointer select-none flex-col flex-nowrap content-start items-start justify-between overflow-hidden rounded-[20px] bg-[#121212] p-[16px] shadow-sm transition duration-300 ease-in-out will-change-transform hover:bg-[#1a1a1a]"
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
                            class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-5 tracking-normal text-white"
                        >
                            @{{ figma.getHandle() }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Email -->
            <div
                class="relative col-span-2 flex w-full cursor-pointer select-none flex-nowrap content-start items-center justify-start gap-4 overflow-hidden rounded-[20px] bg-[#121212] p-[16px] shadow-sm transition duration-300 ease-in-out will-change-transform hover:bg-[#1a1a1a]"
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
                            class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-5 tracking-normal text-white"
                        >
                            {{ email.getHandle() }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Linkedin -->
            <div
                class="relative row-span-2 flex w-full cursor-pointer select-none flex-col flex-nowrap content-start items-start justify-between overflow-hidden rounded-[20px] bg-[#121212] p-[16px] shadow-sm transition duration-300 ease-in-out will-change-transform hover:bg-[#1a1a1a]"
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
                            class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-5 tracking-normal text-white"
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
                class="relative flex w-full cursor-pointer select-none flex-col flex-nowrap content-start items-start justify-between overflow-hidden rounded-[20px] bg-[#121212] p-[16px] shadow-sm transition duration-300 ease-in-out will-change-transform hover:bg-[#1a1a1a]"
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
                            class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-5 tracking-normal text-white"
                        >
                            @{{ codepen.getHandle() }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Medium -->
            <div
                class="relative flex w-full cursor-pointer select-none flex-col flex-nowrap content-start items-start justify-between overflow-hidden rounded-[20px] bg-[#121212] p-[16px] shadow-sm transition duration-300 ease-in-out will-change-transform hover:bg-[#1a1a1a]"
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
                            class="whitespace-normal text-left text-base font-medium normal-case not-italic leading-5 tracking-normal text-white"
                        >
                            @{{ medium.getHandle() }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass"></style>
