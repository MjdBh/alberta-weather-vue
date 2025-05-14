const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // This will prevent the linting errors during development
  devServer: {
    port: 8080, // Explicitly set port to 8080
    allowedHosts: 'all', // For Webpack 5 compatibility, allows connections from any host
    disableHostCheck: true
  }
})