/**
 * Nuxt Config | nuxt.config.ts
 * documentation: https://nuxt.com/docs/api/configuration/nuxt-config
 */
import { getIconCollections, iconsPlugin, } from "@egoist/tailwindcss-icons"

export default defineNuxtConfig({
    app: {
        head: {
            title: "Franclin Sousa",
            bodyAttrs: {
                class: "is-preload",
            },
            meta: [
            ],
            link: [
                {
                    rel: "shortcut icon",
                    href: "images/favicon.png",
                    type: "image/x-icon",
                    as: "image",
                },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    as: "font",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap",
                    as: "font",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
                    as: "font",
                },
            ],
            noscript: [
                {
                    key: "noscrript-css",
                    innerHTML: "<link rel='stylesheet' href='assets/css/noscript.css' />",
                },
            ],
            script: [
                {
                    src: "https://www.googletagmanager.com/gtag/js?id=UA-113075411-1",
                    async: true,
                    tagPosition: "bodyClose",
                },
                {
                    innerHTML: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}; gtag('js', new Date()); gtag('config', 'UA-113075411-1');",
                    tagPosition: "bodyClose",
                },
            ],
            viewport: "width=device-width, initial-scale=1",
            charset: "UTF-8",
            htmlAttrs: {
                lang: "pt-br",
            },
        },
    },
    appConfig: {
        title: "Franclin Sousa",
        ui: {},
        theme: {},
    },
    dev: process.env.NODE_ENV !== "production",
    $development: {
        devtools: {
            enabled: true,
        },
        webpack: {
            loaders: {
                vue: {
                    hotReload: true,
                },
            },
        },
        modules: [
            "@nuxt/devtools",
        ],
    },
    modules: [
        "@nuxt/ui",
        "@nuxt/image",
        "@nuxt/content",
        "@nuxtjs/tailwindcss",
        // "@unocss/nuxt",
        "@pinia/nuxt",
    ],
    srcDir: "src",
    ssr: false,
    tailwindcss: {
        config: {
            plugins: [
                iconsPlugin({
                    collections: getIconCollections([
                        "mdi",
                        "uil",
                        "ic",
                        "ph",
                        "devicon",
                        "devicon-plain",
                        "tabler",
                        "skill-icons",
                    ],),
                },),
            ],
        },
    },
    devtools: {
        timeline: {
            enabled: true,
        },
    },
},)
