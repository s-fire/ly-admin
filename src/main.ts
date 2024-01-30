/*
 * @Author: 龚燎原 274473435@qq.com
 * @Date: 2024-01-29 16:43:08
 * @LastEditors: 龚燎原
 * @LastEditTime: 2024-01-30 11:19:57
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupRouter } from "@/router";
import { setupI18n } from "@/hooks/web/useI18n";
const app =createApp(App)
setupRouter(app)
setupI18n(app)
app.mount('#app')