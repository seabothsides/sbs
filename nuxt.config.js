import colors from 'vuetify/es5/util/colors'
import getRoutes from './utils/getRoutes'

export default {

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
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
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-182249488-2'
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-ssr-cache',
    '@nuxt/content',
    '@nuxtjs/sitemap'
  ],

  // nuxt-ssr-cache module config
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

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-coldark-dark.css'
      }
    }
  },

  // Config env variables
  publicRuntimeConfig: {
    baseURL: 'http://localhost:3000/' || 'https://www.thenuxtproject.com/'
  },

  // Sitemap settings https://jackwhiting.co.uk/posts/generating-sitemap-entries-for-nuxt-content/
  sitemap: {
    hostname: 'https://www.thenuxtproject.com/',
    routes() {
      if (process.env.NODE_ENV !== 'production') return
      return getRoutes();
    }
  },

  // styles-resource module (https://github.com/nuxt-community/style-resources)
  styleResources: {
    sass: [
      '~assets/variables.sass'
    ]
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
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

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
