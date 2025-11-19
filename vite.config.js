import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Base must match the repository name when deploying to GitHub Pages
  // so asset URLs are generated as /<repo>/assets/... instead of /**
  base: '/Suat-Russells-Portfolio/',
  plugins: [react()],
})
