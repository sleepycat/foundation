import React from 'react'
import express from 'express'
import bodyParser from 'body-parser'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { App } from './App'

export const server = express()

server
  .disable('x-powered-by')
  .use(express.static(__dirname + '/public'))
  .use(bodyParser.json())
  .get('/*', (request, response) => {
    let context = {}
    const markup = renderToString(
      <StaticRouter context={context} location={request.url}>
        <App />
      </StaticRouter>,
    )
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
      <script>window.main();</script>
    </body>
    </html>
`)
  })
