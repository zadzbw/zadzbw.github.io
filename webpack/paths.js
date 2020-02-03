const path = require('path')
const { dest = 'dist' } = require('../blog.config')

const ROOT_PATH = path.resolve(__dirname, '..')
const APP_PATH = path.resolve(ROOT_PATH, 'src')
const DEST_PATH = path.resolve(ROOT_PATH, dest)
const MODULES_PATH = path.resolve(ROOT_PATH, 'node_modules')

module.exports = {
  ROOT_PATH,
  APP_PATH,
  DEST_PATH,
  MODULES_PATH,
}
