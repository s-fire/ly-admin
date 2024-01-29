/*
 * @Author: 龚燎原 274473435@qq.com
 * @Date: 2024-01-29 16:43:08
 * @LastEditors: 龚燎原
 * @LastEditTime: 2024-01-29 18:40:20
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupRouter } from "@/router";

const app =createApp(App)
setupRouter(app)
app.mount('#app')