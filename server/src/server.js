// server.js
const express = require('express')
const { createServer: createViteServer } = require('vite')
const { render } = require('./entry-server.js')

async function createServer() {
  const app = express()

  const vite = await createViteServer({
    server: { middlewareMode: 'ssr' },
  })
  app.use(vite.middlewares)

  app.use('*', async (req, res) => {
    const url = req.originalUrl

    let template, renderResult
    template = await vite.transformIndexHtml(url, (await vite.fs.readFile('../client/public/index.html')).toString())
    renderResult = await render()

    const html = template.replace(`<!--ssr-outlet-->`, renderResult)

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
  })

  app.listen(5174)
}

createServer()