/*
 * Common Webpack Config
 */

import path from 'path';
import fs from 'fs';

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(x => (
    ['.bin'].indexOf(x) === -1
  ))
  .forEach((mod) => {
    nodeModules[mod] = `commonjs ${mod}`;
  });

module.exports = {
  entry: path.join(__dirname, 'app/app'),
  node: {
    __dirname: false,
    __filename: false,
  },
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
  externals: nodeModules,
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        loaders: 'babel',
        include: [path.join(__dirname, 'app')],
        exclude: /node_modules/,
      },
      {
        test: /\.(json|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.-]+)?$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
    ],
    extensions: ['', '.js', '.jsx', '.json', '.css', '.scss'],
  },
};
