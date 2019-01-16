module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: process.env.API_URL || 'http://localhost:8081',
        changeOrigin: true
      }
    }
  }
}
