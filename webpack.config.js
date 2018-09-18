const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    bundle: [path.resolve(__dirname, 'src', 'index.js')]
  },
  output: {
    filename: 'main.js'
  },
  devServer: {
    port: 9191,
    headers: { 'Access-Control-Allow-Origin': '*' },
    https: true
  }
};
