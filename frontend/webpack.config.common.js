/*
 * Common Webpack Config
 */

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/app',
  output: {
    path: path.join(__dirname, 'public/assets/'),
    publicPath: '/assets/',
    filename: 'bundle.js',
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new webpack.ProvidePlugin({
      d3: 'd3',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        loaders: ['babel-loader'],
        include: [path.join(__dirname, 'app')],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap'),
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.html$/,
        loader: 'handlebars-template-loader',
      },
      {
        test: /\.(json|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.-]+)?$/,
        loader: 'file-loader',
      },
    ],
  },
};
