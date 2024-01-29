/*
 * @Author: 龚燎原 274473435@qq.com
 * @Date: 2024-01-29 18:05:26
 * @LastEditors: 龚燎原
 * @LastEditTime: 2024-01-29 18:52:22
 */
import type { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
const route = createRouter({
  history: createWebHashHistory(),
  routes:[{
    path:'/test',
    component:()=>import("@/views/test.vue")
  }]
});

export function setupRouter(app: App) {
  app.use(route);
}
