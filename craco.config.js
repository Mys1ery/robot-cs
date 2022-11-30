const path = require('path')
const CracoLessPlugin = require('craco-less');
// const resolve = pathname => path.resolve(__dirname, pathname)
module.exports = {
  plugin: [{
    plugin: CracoLessPlugin
  }],
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src')
    }
  }
}