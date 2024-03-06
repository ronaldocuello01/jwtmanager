const webpack = require('webpack');
const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'wingo_jwt_manager.js',
    library: 'jwtmanager',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  },
  plugins: [
      new NodePolyfillPlugin()
  ]
};

module.exports = config;