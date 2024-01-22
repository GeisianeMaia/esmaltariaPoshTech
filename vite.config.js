import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), eslintPlugin()],
})
