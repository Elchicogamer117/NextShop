module.exports = {
  reactStrictMode: true,
  env: {
    customKey: 'customValue',
  },
    //basePath: '/dist', final option
  compress: true,
  async redirects() {
    return [
      {
        source : '/hola',
        destination: 'https://github.com/Elchicogamer117', 
        permanent: true,                          
      }
    ]
  }
}