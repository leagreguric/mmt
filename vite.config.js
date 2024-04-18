import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue()],
  assetsInclude: [
    '**/*.mp4',
    '**/*.jpg',
    '**/*.png',
    '**/*.gif',
    '**/*.bmp',
    '**/*.mp3' // Add MP3 files
  ]
})
