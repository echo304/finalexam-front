import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env.API': process.env.API,
  },
  plugins: [react()],
  css: {
    postcss: {
     plugins: [tailwindcss()],
    },
   },
})
