const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const { MODULES_PATH } = require('./paths')
const baseConfig = require('./webpack.base.config')
const blogConfig = require('../blog.config')

module.exports = () => {
  const webpackConfig = {
    mode: 'development',

    devtool: 'source-map',

    output: {
      publicPath: blogConfig.dev.publicPath,
    },

    devServer: {
      compress: true,
      hot: true,
      quiet: true,
      historyApiFallback: true,
      host: '0.0.0.0',
      publicPath: blogConfig.dev.publicPath,
      port: blogConfig.dev.port,
      overlay: {
        warnings: false,
        errors: true,
      },
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          enforce: 'pre',
          use: [
            {
              loader: 'eslint-loader',
              options: {
                formatter: require('eslint/lib/cli-engine/formatters/codeframe'),
              },
            },
          ],
          exclude: [MODULES_PATH],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'templates/index.dev.html',
        title: blogConfig.title,
      }),
      new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [
            'Your application is running',
            `Open browser to http://127.0.0.1:${blogConfig.dev.port}${blogConfig.dev.publicPath}`,
          ],
        },
      }),
    ],
  }

  return merge(baseConfig, webpackConfig)
}
