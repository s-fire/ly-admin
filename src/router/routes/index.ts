/*
 * @Author: 龚燎原 274473435@qq.com
 * @Date: 2024-01-30 09:59:34
 * @LastEditors: 龚燎原
 * @LastEditTime: 2024-01-30 10:05:56
 */
import { RouteRecordRaw } from "vue-router";
const LoginRoute: RouteRecordRaw = {
  name: "Login",
  path: "/login",
  component: () => import("@/views/sys/login/index.vue"),
};

export const basicRoutes: RouteRecordRaw[] = [LoginRoute];
