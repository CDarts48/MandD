import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      input: {
        input: {
          client: 'src/entry-client.js',
          server: '../server/src/entry-server.js',
        },
      },
    },
  },
});