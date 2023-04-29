module.exports = {
    devServer: {
      proxy: {
        '/cockpit': {
          target: 'https://liveos.ch/',
          changeOrigin: true
        }
      }
    }
  }
  