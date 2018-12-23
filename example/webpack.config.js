const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CheerioWebpackPlugin = require('../index.js')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundel.js',
    path: path.resolve(__dirname, './dist')
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new CheerioWebpackPlugin({
      test: /.html$/,
      callback: function ($) {
        $('link').remove()
      }
    })
  ]
}
