/**
 * Nuxt Config | nuxt.config.ts
 * documentation: https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({
    modules: [
        "@nuxt/ui",
        "@nuxt/image",
        "@nuxt/eslint",
        "@pinia/nuxt",
    ],
    app: {
        rootId: "app",
        head: {
            title: "Franclin Sousa",
            viewport: "width=device-width, initial-scale=1",
            charset: "UTF-8",
            htmlAttrs: {
                lang: "pt-br",
            },
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
            ],
            script: [
            ],
        },
    },
    appConfig: {
    },
    tailwindcss: {
        editorSupport: true,
        cssPath: [
            "~/assets/sass/main.sass",
            {
                injectPosition: "first",
            },
        ],
    },
    devtools: {
        enabled: false,
    },
    ssr: false,
    dev: process.env.NODE_ENV !== "production",
    $development: {
        devtools: {
            enabled: true,
            timeline: {
                enabled: true,
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
},)
