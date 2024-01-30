<!--
 * @Author: 龚燎原 274473435@qq.com
 * @Date: 2024-01-29 16:43:08
 * @LastEditors: 龚燎原
 * @LastEditTime: 2024-01-30 09:56:38
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
## 基本路由配置
```ts
   const app = createRouter({
      history: createWebHashHistory(),
      routes:[{
         path:'/test',
         component:()=>import("@/views/test.vue")
      }]
   })
   app.use(route);

   // APP.VUE
   <router-view></router-view>
```
