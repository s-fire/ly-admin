/*
 * @Author: 龚燎原 274473435@qq.com
 * @Date: 2024-01-29 16:43:08
 * @LastEditors: 龚燎原
 * @LastEditTime: 2024-01-29 18:18:17
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@": resolve(__dirname, "src")
    }
  }
})
