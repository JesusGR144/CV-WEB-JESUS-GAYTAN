import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
// import preline from 'preline/plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),    
    // preline()
  ],
  base: '/CV-WEB-JESUS GAYTAN/'
})


