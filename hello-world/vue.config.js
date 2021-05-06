// vue.config.js
// const path = require('path')

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
module.exports = {
    configureWebpack: config => {
      console.log(process.env.NODE_ENV)
      if (process.env.NODE_ENV === 'production'||process.env.NODE_ENV === 'test'||process.env.NODE_ENV === 'development') {
        // 为生产环境修改配置...
        config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
        config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
        config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = [
          'console.log'
        ]
      } else {
        // 为开发环境修改配置...
      }
      // config.resolve = {
      //   alias: {
      //     '@': resolve('src')
      //   }
      // }
    },
    chainWebpack: config => {
      const svgRule = config.module.rule('svg')
      // 清除已有的所有 loader。
      // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
      svgRule.uses.clear()
  
      // 添加要替换的 loader
      svgRule.use('svg-sprite-loader').loader('svg-sprite-loader')
    },
  
    devServer: {
      open: true,
      port: 9000, // 指定本地启动端口号
      // 配置跨域
      proxy: {
        // '/api': {
        //   target: 'https://crm-mp-webapi-dev.sunacctg.com/wxapp-park/',
        //   changOrigin: true, // 允许跨域
        //   pathRewrite: {
        //     '^/api': '/api' // 请求的时候使用这个api就可以
        //   }
        // },
        '/api': {
          // http://crm-mp-webapi-dev.sunacctg.com/wxapp-mcenter/api/developer/mcenter/groupWork
          target: 'http://crm-mp-webapi-dev.sunacctg.com/wxapp-mcenter/api/developer/mcenter/groupWork',
          changOrigin: true, // 允许跨域
          pathRewrite: {
            '^/api': ''
          }
        },
        '/buriedApi': {
          target: 'http://10.7.29.113:1900',
          changOrigin: true, // 允许跨域
          pathRewrite: {
            '^/buriedApi': '' // 请求的时候使用这个api就可以
          }
        }
      }
    },
    publicPath: './', // 项目根路径 "@/"
    lintOnSave: false, // 是否开启 ESLint
    productionSourceMap: false
  }
  