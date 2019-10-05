module.exports = {
  mode: "universal",
  /*
   ** Environment for project, see more documentation: https://id.nuxtjs.org/api/configuration-env/
   */
  env: {
    dev: process.env.NODE_ENV !== "production",
    baseUrl: {
      dev: "http://localhost:3000",
      prod: "http://api.lsppmi.com"
    },
    baseAPI: {
      dev: "http://localhost:3300",
      prod: "http://api.lsppmi.com"
    },
    storage: "https://storage.googleapis.com/lsppmi/assets/frontend"
  },
  /*
   ** Configuration server
   */
  server: {
    port: 3000,
    host: "0.0.0.0"
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "%s",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href:
          "https://storage.googleapis.com/lsppmi/assets/frontend/favicon.ico"
      }
    ],
    script: [
      {
        src:
          "https://storage.googleapis.com/lsppmi/assets/frontend/js/jquery-2.1.4.min.js"
      },
      {
        src:
          "https://storage.googleapis.com/lsppmi/assets/frontend/js/mfn.menu.js"
      },
      {
        src:
          "https://storage.googleapis.com/lsppmi/assets/frontend/js/jquery.plugins.js"
      },
      {
        src:
          "https://storage.googleapis.com/lsppmi/assets/frontend/js/scripts.js"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "red",
    height: "5px"
  },
  /*
   ** Global CSS
   */
  css: [
    "ant-design-vue/dist/antd.css",
    "@/assets/css/global.css",
    "@/assets/css/structure.css",
    "@/assets/css/company2.css",
    "@/assets/css/custom.css",
    "@/assets/css/footer.css",
    "@/assets/css/menu.css",
    "@/assets/scss/main.scss"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/antd-ui", { src: "~plugins/vue-carousel", ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "cookie-universal-nuxt",
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
  }
}
