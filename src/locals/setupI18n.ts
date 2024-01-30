/*
 * @Author: 龚燎原 274473435@qq.com
 * @Date: 2024-01-30 11:56:50
 * @LastEditors: 龚燎原
 * @LastEditTime: 2024-01-30 15:21:18
 */
import { App } from "vue";
import { createI18n } from "vue-i18n";

const locale = "zh_CN";
const defaultLocal = await import(`./lang/${locale}.ts`);
const message = defaultLocal.default?.message ?? {};
const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale, // set locale
  fallbackLocale: "zh_CN", // set fallback locale
  messages: {
    [locale]: message,
  },
});

export function setupI18n(app: App) {
  app.use(i18n);
}
