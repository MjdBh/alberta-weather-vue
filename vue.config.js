const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // This will prevent the linting errors during development
  devServer: {
  
    allowedHosts: 'all', // For Webpack 5 compatibility, allows connections from any host
    disableHostCheck: true
  }
})
