const cheerio = require('cheerio')

function matchFile (filename, test) {
  let match = false
  if (Array.isArray(test)) {
    match = test.some(item => item.test(filename))
  } else if (Object.prototype.toString.call(test) == '[object RegExp]') {
    match = test.test(filename)
  } else {
    console.error('test must be a RegExp or array of RegExps')
  }
  return match
}

class CheerioWebpackPlugin {
  constructor (options) {
    this.options = options
  }

  apply (compiler) {
    compiler.hooks.emit.tapAsync('CheerioWebpackPlugin', (compilation, callback) => {
      for (const filename in compilation.assets) {
        if (matchFile(filename, this.options.test)) {
          const $ = cheerio.load(compilation.assets[filename].source(), this.options.parserOptions)
          this.options.callback && this.options.callback($, filename)
          const isXml = !!(this.options.parserOptions || {}).xmlMode;

          compilation.assets[filename] = {
            source: () => isXml ? $.xml() : $.html(),
            size: () => (isXml ? $.xml() : $.html()).size
          }
        }
      }

      callback()
    })
  }
}

module.exports = CheerioWebpackPlugin
