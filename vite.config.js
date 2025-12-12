import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



export default defineConfig({
  base: 'https://github.com/RaghuVamsiVajjhula/Portfolio',   // your repo name here
  plugins: [react()],
})
