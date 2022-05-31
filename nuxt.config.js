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
  proxy: {
    '/laravel':{
      target: 'https://laravel-auth.nuxtjs.app',
      pathRewrite: { '^/laravel': '/'}
    }
  },
  auth:{
    strategies: {
	  	'laravelJWT':{
        provider:'laravel/jwt',
        url:process.env.BASE_URL,
        //token: {
          //property:'access_token',
          //required: true,
          //type: 'Bearer'
        //},
        //cookie: {
          //name: 'XSRF-TOKEN',
          //property:'access_token',
          //type:'Bearer',
          //required: true,
          //global:true,
        //},
        endpoints:{
          login:{
            url:'http://localhost:8989/api/login',
            //url: '/login'
          },
          user:{
            url:'http://localhost:8989/api/auth/auth_user',
            method:'GET',
            property:'user',
            //data:'payload',
            //autoFetch: false,
          //Solucionarlo con Vuex
          //res.data.payload.user
          //},
          //user: false,
          //csrf: {
            //url:''
          },
          logout: {
            url:'http://localhost:8989/api/logout'
          }
        },

        // ---para jwtlaravel---
        token: {
          property: 'authorisation.token',
          maxAge: 60 * 60,
          global: true,
          type:'Bearer',
          required: true,
        },
        refreshToken: {
          maxAge: 20160 * 60,
        },
        //----------------------
        
        //tokenRequired:false,
        //tokenType:false,
        //user: false,

      },
      //localStorage: false,
    },
    redirect: {
      login: '/', //dashboard
      logout: '/',
      callback: false,
      home: false,
    },
  },
  axios: {
    baseURL: process.env.BASE_URL +'/api',
    //baseURL: 'http://localhost:8989', // esto no funciona con al opción proxy activada
    //prefic: '/api', // no funciona
    //proxy: true,
    credentials: true,
    common: {
      'Accept': 'aplication/json',
      //'Authorization' : token
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
