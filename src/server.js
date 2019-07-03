const path = require('path')
const express = require('express')

module.exports.Server = () => {
  return express()
    .disable('x-powered-by')
    .use(express.static('public'))
    .get('/*', (request, response) => {
      response.sendFile('index.html', { root: 'public' })
    })
}
