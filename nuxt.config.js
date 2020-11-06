import colors from 'vuetify/es5/util/colors'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'The Nuxt Project',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Learn how to design, develop and deploy a website using Nuxt JS as the frontend framework. Nuxt is a powerful, modular based framework with extensive full static capabilities.'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.png'
    }],
    script: [{
      src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
    }, ],
    __dangerouslyDisableSanitizersByTagID: {
      gtmscript2: ['innerHTML']
    },
    script: [{
        hid: 'gtm-script1',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-4NVQJY5ZR8',
        defer: true
      },
      {
        vmid: 'gtmscript2',
        hid: 'gtm-script2',
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4NVQJY5ZR8');
        `,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ]
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-182249488-2'
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-ssr-cache',
    '@nuxt/content'
  ],
  /*
   ** nuxt-ssr-cache module config
   */
  cache: {
    pages: [
      '/',
    ],
    store: {
      type: 'memory',
      max: 100,
      ttl: 10 * 60
    }
  },
  /*
   ** styles-resource module configuration
   ** https://github.com/nuxt-community/style-resources
   */
  styleResources: {
    sass: [
      '~assets/variables.sass'
    ]
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.sass'],
    treeShake: true,
    defaultAssets: {
      font: false
    },
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
}
