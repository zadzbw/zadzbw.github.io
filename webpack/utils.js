const path = require('path')
const config = require('../blog.config')

exports.assetsPath = (_path) => {
  const isProd = process.env.NODE_ENV === 'production'
  const assetsSubDirectory = isProd ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}
