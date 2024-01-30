/*
 * @Author: 龚燎原 274473435@qq.com
 * @Date: 2024-01-30 11:05:08
 * @LastEditors: 龚燎原
 * @LastEditTime: 2024-01-30 11:22:41
 */
import { App } from "vue";
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      hello: "hello world",
    },
  },
  ja: {
    message: {
      hello: "こんにちは、世界",
    },
  },
};
const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: "en", // set locale
  fallbackLocale: "en", // set fallback locale
  messages,
});

export function setupI18n(app:App) {
    app.use(i18n);
}
