require('@babel/register')({
  presets: [ '@babel/preset-env' ]
})
require('json5/lib/register')

module.exports = require('./gatsby-config.es.js')
