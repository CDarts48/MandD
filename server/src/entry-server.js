// src/entry-server.js
import { renderToString } from 'react-dom/server'
import App from '../../client/src/App'

export async function render() {
  const appHtml = renderToString(<App />)
  return appHtml
}