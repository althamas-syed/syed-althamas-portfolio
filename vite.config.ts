import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // './' = relative asset paths -> works both at https://syedalthamas.net (root)
  // and at https://althamas-syed.github.io/<repo>/ (subpath) without changes
  base: './',
  plugins: [react(), tailwindcss()],
})
