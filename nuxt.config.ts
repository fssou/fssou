
/**
 * Nuxt Config | nuxt.config.ts
 * documentation: https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({
    modules: [
        "@nuxt/ui",
        "@nuxt/image",
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
    css: [
        "~/assets/css/main.css",
    ],
    ui: {
        theme: {
            colors: [
                "primary",
                "secondary",
                "tertiary",
                "neutral",
                "success",
                "info",
                "warning",
                "error",
            ],
        },
    },
    postcss: {
        plugins: {
            "@tailwindcss/postcss": {},
        }
    },
    devtools: {
        enabled: false,
    },
    ssr: false,
    runtimeConfig: {
        public: {
            lambdaFunctionUrl: process.env.LAMBDA_FUNCTION_URL || "",
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
        modules: [
            "@nuxt/devtools",
            "@nuxt/eslint",
        ],
        app: {
            head: {
                title: "🚀 Dev | Franclin Sousa",
            },
        },
    },
    compatibilityDate: "2024-11-07",
},)
