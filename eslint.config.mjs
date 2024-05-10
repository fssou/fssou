/* eslint-env node */

import withNuxt from "./.nuxt/eslint.config.mjs"
import tailwindcss from "eslint-plugin-tailwindcss"


export default withNuxt({
    plugins: {
        tailwindcss
    },
    rules: {
        "no-tabs": [
            "error",
            {
                allowIndentationTabs: false,
            },
        ],
        "comma-dangle": [
            "error",
            "always",
        ],
        "array-bracket-newline": [
            "error",
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
        "tailwindcss/classnames-order": "warn",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
    },
})
