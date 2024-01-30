/*
 * @Author: 龚燎原 274473435@qq.com
 * @Date: 2024-01-30 12:00:18
 * @LastEditors: 龚燎原
 * @LastEditTime: 2024-01-30 15:28:05
 */
import { genMessage } from "../helper";

const modules = import.meta.glob("./zh-CN/**/*.ts", { eager: true });
// 得到一个扁平的{文件路径 : 文件类容的}对象
export default {
  message: {
    ...genMessage(modules as Record<string, any>, "zh-CN"),
  },
};
