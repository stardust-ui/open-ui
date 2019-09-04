// patch node to babel compile files before require/import
require('@babel/register')({
  presets: ['@babel/preset-env'],
})

// patch node to allow require()ing json5 files
require('json5/lib/register')

module.exports = require('./gatsby-config.es.js')
