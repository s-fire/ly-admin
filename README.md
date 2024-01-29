<!--
 * @Author: 龚燎原 274473435@qq.com
 * @Date: 2024-01-29 16:43:08
 * @LastEditors: 龚燎原
 * @LastEditTime: 2024-01-29 18:45:43
-->
1. 配置TS识别文件跳转
   ```ts
   {
   "compilerOptions": {
      ...other
      "baseUrl": ".",
      "paths": {
         "@/*":["src/*"]
      }
   },
   "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"]
   }
   ```
