import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// A API de produtos não envia cabeçalhos CORS, então em desenvolvimento
// as requisições passam por este proxy. Em produção usamos o fallback local
// (public/produtos.json) caso a requisição direta falhe.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://app.econverse.com.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/teste-front-end/junior/tecnologia/lista-produtos'),
      },
    },
  },
})
