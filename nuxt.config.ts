/**
 * Nuxt Config | nuxt.config.ts
 * documentation: https://nuxt.com/docs/api/configuration/nuxt-config
 */
import { getIconCollections, iconsPlugin, } from "@egoist/tailwindcss-icons"

export default defineNuxtConfig({
    app: {
        rootId: "app",
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
    modules: [
        "@nuxt/ui",
        "@nuxt/image",
        "@nuxt/content",
        "@nuxtjs/tailwindcss",
        // "@unocss/nuxt",
        "@pinia/nuxt",
    ],
    srcDir: "src",
    ssr: true,
    nitro: {
        preset: "firebase",
        firebase: {
            serverFunctionName: "fssou",
            nodeVersion: "18",
            gen: 2,
            httpsOptions: {
                region: "us-central1",
                maxInstances: 2,
                memory: "256MiB",
                concurrency: 1000,
                ingressSettings: "ALLOW_ALL",
                cors: [
                    "fssou-vrcgjxnlia-uc.a.run.app",
                ],
            },
        },
    },
    tailwindcss: {
        config: {
            plugins: [
                iconsPlugin({
                    collections: getIconCollections([
                        "mdi",
                        "ic",
                        "ph",
                        "devicon",
                        "tabler",
                        "skill-icons",
                    ],),
                },),
            ],
        },
    },
    dev: process.env.NODE_ENV !== "production",
    $development: {
        devtools: {
            enabled: true,
            timeline: {
                enabled: true,
            },
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
        app: {
            head: {
                title: "🚀 Dev | Franclin Sousa",
            },
        },
    },
    devtools: {
        enabled: false,
    },
},)
