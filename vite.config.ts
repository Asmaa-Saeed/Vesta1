import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
<<<<<<< HEAD
=======
import path from 'path'
>>>>>>> e2d41ed5df0df818ffbe1a005e08ce5db32f52e1

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
<<<<<<< HEAD
=======
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
>>>>>>> e2d41ed5df0df818ffbe1a005e08ce5db32f52e1
})
