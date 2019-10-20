module.exports = {
  head: {
    title: 'モノラル',
    titleTemplate: '%s | monaural',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'monaural - モノラル のウェブサイトです。'},
      {property: 'og:image', content: 'https://monaural.net/img/ogp.png'},
      {name: 'twitter:image', content: 'https://monaural.net/img/ogp.png'}
    ],
    link: [
      {rel: 'shortcut icon', href: '/img/logo.png'},
      {rel: 'apple-touch-icon', sizes: '180x180', href: 'https://monaural.net/img/logo.png'}
    ]
  },
  css: [
    '@/assets/styles/styles.scss'
  ],
  modules: [
    '@nuxtjs/style-resources',
    ['@nuxtjs/google-analytics', {id: 'UA-451999-3'}]
  ],
  styleResources: {
    scss: [
      '~/assets/styles/_global.scss'
    ]
  },
  generate: {
    fallback: true // for 404.html
  },
  loading: {color: '#aaaaaa'}
};
