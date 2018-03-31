import React from 'react'
import express from 'express'
import bodyParser from 'body-parser'
import { renderToString } from 'react-dom/server'
import { App } from './App'

export const server = express()

server
  .disable('x-powered-by')
  .use(express.static(__dirname + '/public'))
  .use(bodyParser.json())
  .get('/*', (request, response) => {
    const markup = renderToString(<App />)
    response.status(200).send(`
    <!doctype html>
    <html lang="">
      <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet='utf-8' />
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
      <div id="root">${markup}</div>
    </body>
    </html>
`)
  })
