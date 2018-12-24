# Cheerio Webpack Plugin

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
      callback: function ($) {
        $('link').remove()
      }
    })
  ]
}

```

# License

[The MIT License](http://opensource.org/licenses/MIT)
