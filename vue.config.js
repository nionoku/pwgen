module.exports = {
  publicPath: '',

  pwa: {
    name: 'pwgen',
    themeColor: '#3C3C3C',
    msTitleColor: '#F5F5F5',
    appleMobileWebAppCapable: 'no',
    appleMobileWebAppStatusBarStyle: 'default',
    manifestOptions: {
      description: 'Create your password on the fly using the website address, your login and secret phrase!',
      start_url: 'index.html',
      display: 'standalone',
      orientation: 'portrait',
      background_color: '#F5F5F5',
      splash_pages: null,
      icons: [
        {
          src: 'img/icons/icon-72x72.png',
          sizes: '72x72',
          type: 'image/png'
        },
        {
          src: 'img/icons/icon-96x96.png',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          src: 'img/icons/icon-128x128.png',
          sizes: '128x128',
          type: 'image/png'
        },
        {
          src: 'img/icons/icon-144x144.png',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: 'img/icons/icon-152x152.png',
          sizes: '152x152',
          type: 'image/png'
        },
        {
          src: 'img/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'img/icons/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png'
        },
        {
          src: 'img/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    iconPaths: {
      favicon32: 'img/icons/icon-72x72.png',
      favicon16: 'img/icons/icon-72x72.png',
      appleTouchIcon: 'img/icons/icon-192x192.png',
      maskIcon: 'img/icons/icon-384x384.png',
      msTileImage: 'img/icons/icon-144x144.png'
    }
  }
};
