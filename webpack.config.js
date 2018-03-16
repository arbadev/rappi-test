const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  entry: ['./src/index.jsx'],
  output: {
    filename: 'app.js',
    path: './build',
    publicPath: '/',
  },

  module: {
    loaders: [
      { test: /(\.js|jsx)$/, exclude: /node_modules/, loaders: ['babel'] },
      {
        test: /\.css$/,
        loader: `style-loader!css-loader?${cssModules}`,
        // include: path.join(__dirname, '../node_modules'),
        exclude: /flexboxgrid/,
      },
      {
        test: /\.css$/,
        loader: `style-loader!css-loader?${cssModules}`,
        include: /flexboxgrid/,
      },
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader', 'eslint-loader'] },
      { test: /\.json$/, loader: 'json' },
    ],
  },

  devServer: {
    host: '0.0.0.0',
    port: 8080,
    inline: true,
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/assets/index.html' }),
    new ExtractTextPlugin('style.css', { allChunks: true }),
  ],
}
