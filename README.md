# Cheerio Webpack Plugin

[![NPM version][npm-image]][npm-url] [![David deps][david-image]][david-url] [![npm license][license-image]][download-url]

# Instllation

```bash
$ npm install cheerio-webpack-plugin
```

# Usage
```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CheerioWebpackPlugin = require('cheerio-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new CheerioWebpackPlugin({
      test: /.html$/,
      callback: function ($, filename) { // filename provided as 2nd argument
        $('.debug').remove()
      },
      parserOptions: { // custom parser options can be provided
        xmlMode: true  // uses $.xml() instead of $.html() internally
      }
    })
  ]
}

```

# License

[The MIT License](http://opensource.org/licenses/MIT)


[npm-image]: https://img.shields.io/npm/v/cheerio-webpack-plugin.svg?style=flat-square
[npm-url]: https://npmjs.org/package/cheerio-webpack-plugin
[david-image]: https://img.shields.io/david/8788/cheerio-webpack-plugin.svg?style=flat-square
[david-url]: https://david-dm.org/8788/cheerio-webpack-plugin
[download-url]: https://npmjs.org/package/cheerio-webpack-plugin
[license-image]: https://img.shields.io/npm/l/cheerio-webpack-plugin.svg
