import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@spaceui/tokens': path.resolve(__dirname, '../../packages/tokens/src'),
      '@spaceui/primitives': path.resolve(__dirname, '../../packages/primitives/src'),
      '@spaceui/forms': path.resolve(__dirname, '../../packages/forms/src'),
      '@spaceui/ai': path.resolve(__dirname, '../../packages/ai/src'),
      '@spaceui/explorer': path.resolve(__dirname, '../../packages/explorer/src'),
    },
  },
  server: {
    port: 19850,
  },
})
