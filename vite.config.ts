import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/client/app/variables" as *;
          @use "@/client/app/mixins" as *;
        `
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
