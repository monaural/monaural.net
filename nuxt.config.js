module.exports = {
  head: {
    title: 'monaural.net // モノラル',
    titleTemplate: '%s | monaural.net',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'},
      {rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css'},
    ]
  },
  css: [
    '@/assets/styles/styles.scss'
  ],
  modules: [
    ['nuxt-sass-resources-loader', '@/assets/styles/_global.scss'],
    ['@nuxtjs/google-analytics', {id: 'UA-451999-3'}]
  ],
  loading: {color: '#aaaaaa'}
};
