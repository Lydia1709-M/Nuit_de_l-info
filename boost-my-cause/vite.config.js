import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/Nuit_de_l-info/'   // <-- indispensable pour GitHub Pages
})
