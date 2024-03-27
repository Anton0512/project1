import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: {
  //     assets: path.resolve(__dirname, './src/assets'),
  //     common: path.resolve(__dirname, './src/common'),
  //     domains: path.resolve(__dirname, './src/domains'),
  //     navigation: path.resolve(__dirname, './src/navigation'),
  //     pages: path.resolve(__dirname, './src/pages'),
  //   },
  // },
  // server: {
  //   fs: {
  //     cachedChecks: false
  //   }
  // },
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src'), // Псевдоним для пути src/
  //   },
  // },
  plugins: [react()],
});
