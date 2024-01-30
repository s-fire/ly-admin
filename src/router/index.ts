/*
 * @Author: 龚燎原 274473435@qq.com
 * @Date: 2024-01-29 18:05:26
 * @LastEditors: 龚燎原
 * @LastEditTime: 2024-01-30 10:07:02
 */
import type { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { basicRoutes } from "./routes";
const route = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes,
});

export function setupRouter(app: App) {
  app.use(route);
}
