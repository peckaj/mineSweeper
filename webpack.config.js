const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const config = {
  entry: {
    build: './src/script.js'
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: ['css-hot-loader'].concat(
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader?-autoprefixer!postcss-loader', 'sass-loader']
          })
        )
      }
    ]
  },
  plugins: [
    new HardSourceWebpackPlugin(),
    new ExtractTextPlugin('style.css'),
    new webpack.HotModuleReplacementPlugin()
  ]
};

config.devServer = {
  host: 'localhost',
  disableHostCheck: true,
  inline: true,
  hot: true,
  overlay: true,
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
};

module.exports = config;
