const path = require('path');

function resolve (dir) {
    //此处使用path.resolve 或path.join 可自行调整
    return path.join(__dirname, dir)
  }

module.exports = {
    // 基本路径
    publicPath: './',
    // 输出文件目录
    outputDir: 'dist',
    // webpack-dev-server 相关配置
    devServer: {
      port: 8080,
    },//webpack配置
    lintOnSave:false,   //配置关闭eslint
    configureWebpack: {   
        //警告 webpack 的性能提示
        performance: {
          hints:'warning',
          //入口起点的最大体积
          maxEntrypointSize: 5000000000,
          //生成文件的最大体积
          maxAssetSize: 3000000000,
          //只给出 js 文件的性能提示
          assetFilter: function(assetFilename) {
            return assetFilename.endsWith('.js');
          }
        }
    },
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
    filenameHashing: true, //文件hash
    chainWebpack: config => {
    config.resolve.alias
        // key,value自行定义，比如.set('@assets', resolve('src/assets'))
        .set('@',resolve('src'))
        .set('img',resolve('static/mock/img'))
    },
    proxy: {
      '/api':{
          target:'http://localhost:8080',
          changeOrigin:true,
          pathRewrite:{
              '^/api.':''
          }
      }
    }
  }