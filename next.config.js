const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false,
  },
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com', 'api.lorem.space', 'vuzoon.com', 'www.complementosdelcafe.com', 'placeing.com', 'source.unsplash.com', 'picsum.photos', 'images.pexels.com', 'www.adidas.co'],
  },
});
