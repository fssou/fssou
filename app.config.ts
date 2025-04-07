import colors from "tailwindcss/colors"

/**
 * Nuxt App Config | app.config.ts
 * documentation: https://nuxt.com/docs/guide/directory-structure/app-config
 */

export default defineAppConfig({
    ui: {
        colors: {
            primary: "indigo",
            secondary: "slate",
            tertiary: "cyan",
            neutral: "zinc",

            info: "blue",
            success: "green",
            warning: "yellow",
            error: "red",
        },
    },
},)
