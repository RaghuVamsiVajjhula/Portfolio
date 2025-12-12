import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



export default defineConfig({
  // For GitHub Pages project sites, base should be "/<repo-name>/"
  base: '/Portfolio/',
  plugins: [react()],
})
