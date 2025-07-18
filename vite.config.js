import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content:[
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [react(), tailwindcss()],
  base: '/Student-community-git/'
})
