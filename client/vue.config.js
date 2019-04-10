const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '^/contracts': {
        target: 'http://localhost:5000',
        secure: false,
        changeOrigin: true
      },
      '/emailservice': {
        target: 'http://localhost:5000',
        secure: false,
        changeOrigin: true
      },
      '^/query': {
        target: 'http://localhost:5000',
        secure: false,
        changeOrigin: true
      },
      '^/update': {
        target: 'http://localhost:5000',
        secure: false,
        changeOrigin: true
      },
    }
  }
}
