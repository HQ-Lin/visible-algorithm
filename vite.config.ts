import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/visible-algorithm/' : './',

  server: {
    host: '0.0.0.0',
    port: 7777,
    open: '/',
    https: false,
  },

  build: {
    outDir: 'docs'
  },

  plugins: [react()]
})
