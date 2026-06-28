import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const web3formsKey = process.env.VITE_WEB3FORMS_KEY?.trim()
  if (mode === 'production' && !web3formsKey) {
    throw new Error(
      'VITE_WEB3FORMS_KEY is required for production builds. ' +
      'Add it in Cloudflare Pages → Settings → Environment variables → Production, then Retry deployment.'
    )
  }

  return {
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  preview: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT) || 4173,
  },
  }
})
