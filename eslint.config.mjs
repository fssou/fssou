/* eslint-env node */

import withNuxt from "./.nuxt/eslint.config.mjs"
import tailwindcss from "eslint-plugin-tailwindcss"


export default withNuxt({
    plugins: {
        tailwindcss,
    },
    rules: {
        "no-tabs": [
            "error",
            {
                allowIndentationTabs: false,
            },
        ],
        "comma-dangle": [
            "off",
            "always",
        ],
        "array-bracket-newline": [
            "off",
            "always",
        ],
        "array-element-newline": [
            "error",
            "always",
            {
                multiline: true,
            },
        ],
        indent: [
            "error",
            4,
        ],
        quotes: [
            "error",
            "double",
        ],
        "vue/html-indent": [
            "error",
            4,
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
    },
},)
