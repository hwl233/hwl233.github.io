// vue.config.js
const path = require('path');
function resolve(dir) {
  return path.resolve(__dirname, dir)
}
module.exports = {
  publicPath: '/', 
  outputDir: 'dist',
  assetsDir: 'assets', 
  lintOnSave: false, 
  productionSourceMap: false, 
  devServer: {
    open: false, 
    host: 'localhost', 
    port: 8080,
    https: false,
    hotOnly: false, 
  },
}