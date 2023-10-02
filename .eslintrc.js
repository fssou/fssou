/* eslint-env node */

module.exports = {
    extends: [
        "@nuxtjs/eslint-config",
        "@nuxtjs/eslint-config-typescript",
    ],
    plugins: [
        "tailwindcss",
    ],
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
    },
}
