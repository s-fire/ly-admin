/*
 * @Author: 龚燎原 274473435@qq.com
 * @Date: 2024-01-30 12:02:04
 * @LastEditors: 龚燎原
 * @LastEditTime: 2024-01-30 15:24:09
 */
import { set } from "lodash-es";

export function genMessage(
  langs: Record<string, Record<string, any>>,
  prefix = "lang"
) {
  // 把传入的对应文件夹下的文件转换成{文件名:文件类容}的对象
  const obj: Record<string, any> = {};
  Object.keys(langs).forEach((key) => {
    const langFileModule = langs[key].default;
    let fileName = key.replace(`./${prefix}/`, "").replace(/^\.\//, "");
    const lastIndex = fileName.lastIndexOf(".");
    fileName = fileName.substring(0, lastIndex);
    const keyList = fileName.split("/");
    const moduleName = keyList.shift();
    const objKey = keyList.join(".");

    if (moduleName) {
      if (objKey) {
        set(obj, moduleName, obj[moduleName] || {});
        set(obj[moduleName], objKey, langFileModule);
      } else {
        set(obj, moduleName, langFileModule || {});
      }
    }
  });

  console.log("obj: ", obj);
  return obj;
}
