export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'demo-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  axios: {
    baseURL: process.env.BASE_URL + '/api',
    proxy: true,
    credentials: true
  },
  common: {
    'Accept':'applicaction/json',
  },
  proxy: {
    '/laravel':{
      target: 'https://laravel-auth.nuxtjs.app',
      pathRewrite: { '^/laravel': '/'}
    }
  },
  auth:{
    strategies: {
	  	laravelSanctum:{
        provider:'laravel/sanctum',
        url:process.env.BASE_URL,
        //token: {
          //property:'access_token',
          //required: true,
          //type: 'Bearer'
        //},
        //token: {
          //name: 'XSRF-TOKEN',
          //property:'access_token',
          //type:'Bearer',
          //required: true,
          //global:true,
        //},
        endpoints:{
          login:{
            url:'/api/auth/login',
          },
          //user:{
            //url:'/api/auth/auth_user',
            //method:'GET',
            //property:data.payload.access_token,
            //data:'payload',
            //autoFetch: false,
          //Solucionarlo con Vuex
          //res.data.payload.user
          //},
          user: false,
          //csrf: {
            //url:''
          //}
        },
        //user: {
          //autoFetch: false,
        //}
      },
    },
    redirect: {
      login: '/', //dashboard
      logout: '/',
      callback: false,
      home: false
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
