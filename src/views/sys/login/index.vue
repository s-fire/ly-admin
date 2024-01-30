<!--
 * @Author: 龚燎原 274473435@qq.com
 * @Date: 2024-01-30 10:04:36
 * @LastEditors: 龚燎原
 * @LastEditTime: 2024-01-30 11:21:58
-->
<template>
  <div class="">{{ t("message.hello") }}</div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style lang="scss" scoped></style>
