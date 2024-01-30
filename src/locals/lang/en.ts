/*
 * @Author: 龚燎原 274473435@qq.com
 * @Date: 2024-01-30 12:00:18
 * @LastEditors: 龚燎原
 * @LastEditTime: 2024-01-30 12:01:36
 */
import { genMessage } from '../helper'

const modules = import.meta.glob('./en/**/*.ts',{eager:true})
export default {
  message: {
    ...genMessage(modules as Record<string, any>, 'en'),
  },
  dateLocale: null,
  dateLocaleName: 'en',
}
