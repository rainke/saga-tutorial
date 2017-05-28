const path = require('path');
const webpack = require('webpack');
const openBrowserPlugin = require('./config/openBrowser');
module.exports = function(env) {
  return {
    entry:[
      'webpack-dev-server/client?http://localhost:7500',
      'babel-polyfill',
      './index.js'
    ],
    context: path.join(__dirname, 'src'),
    output:{
      filename: 'bundle.js',
      path: path.join(__dirname, 'build'),
      publicPath: '/'
    },
    devtool: 'cheap-module-source-map',
    resolve:{
      extensions:['.js'],
      alias:{
        '@': path.join(__dirname, 'src')
      }
    },
    devServer:{
      hot: true,
      port: 7500,
      contentBase: path.join(__dirname, 'public'),
      publicPath:'/',
      proxy:{
        '/api': {
          target: 'http://localhost:8081',
          changeOrigin: true
        }
      }
    },
    module:{
      rules:[
        {
          test:/\.js$/,
          loader:'babel-loader'
        }
      ]
    },
    plugins:[
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new openBrowserPlugin()
    ]
  }
}