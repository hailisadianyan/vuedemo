import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: true, //启动服务时自动打开浏览器访问
    port: 8888, 
    proxy: { 
      '/dev-api': { 
        target: 'https://dev.178778.xyz',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev-api/, ''),
      },
    }
  },
  plugins: [vue()],
})
