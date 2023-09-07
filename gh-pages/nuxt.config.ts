// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  dev: process.env.NODE_ENV !== "production",
  $development: {
    devtools: { 
      enabled: true 
    },
    webpack: {
      loaders: {
        vue: {
          hotReload: true,
        },
      },
    },
  },
  ssr: false,
  app: {
    head: {
      title: "Franclin Sousa",
      meta: [
        {
          charset: "utf-8"
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, user-scalable=no"
        }
      ],
      link: [
        {
          rel: "shortcut icon",
          href: "images/favicon.png",
          type: "image/x-icon",
          as: "image"
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "assets/css/main.css",
          as: "style",
        }
      ],
      noscript: [
        {
          key: "noscrript-css",
          innerHTML: '<link rel="stylesheet" href="assets/css/noscript.css" />',
        }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js",
          integrity: "sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=",
          crossorigin: "anonymous",
          tagPosition: "bodyClose"
        },
        {
          src: "assets/js/browser.min.js",
          tagPosition: "bodyClose"
        },
        {
          src: "assets/js/breakpoints.min.js",
          tagPosition: "bodyClose"
        },
        {
          src: "assets/js/main.js",
          tagPosition: "bodyClose"
        },
        {
          src: "https://www.googletagmanager.com/gtag/js?id=UA-113075411-1",
          async: true,
          tagPosition: "bodyClose"
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-113075411-1');`,
          tagPosition: "bodyClose"
        }
      ],
      bodyAttrs: {
        class: "is-preload"
      }
    },
    
  }
})
