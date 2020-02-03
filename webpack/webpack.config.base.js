const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { APP_PATH, DEST_PATH, ROOT_PATH, MODULES_PATH } = require('./paths')
const { assetsPath } = require('./utils')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'index.js'),
  },

  output: {
    path: DEST_PATH,
    filename: assetsPath('js/[name].[hash:6].js'),
    chunkFilename: assetsPath('js/[name].[chunkhash:6].chunk.js'),
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        include: [APP_PATH],
        exclude: [MODULES_PATH],
      },
      {
        test: /\.css$/,
        include: [APP_PATH],
        exclude: [MODULES_PATH],
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     hmr: process.env.NODE_ENV === 'development',
          //     reloadAll: true,
          //   },
          // },
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isProd ? '[hash:base64:6]' : '[name]__[local]__[hash:base64:6]',
              },
              localsConvention: 'camelCase',
              sourceMap: !isProd,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: !isProd,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: [MODULES_PATH],
        exclude: [APP_PATH],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: !isProd,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          esModule: false, // do not export with es module
          name: assetsPath('images/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          esModule: false,
          name: assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
    ],
  },

  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'hashed',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
        },
        styles: {
          name: 'styles',
          test: /\.+(scss|sass|less|css)$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': APP_PATH,
      '@images': path.resolve(ROOT_PATH, 'assets', 'images'),
      '@posts': path.resolve(ROOT_PATH, 'posts'),
    },
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: assetsPath('css/[name].[hash:6].css'),
      chunkFilename: assetsPath('css/[name].[chunkhash:6].chunk.css'),
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],

}
