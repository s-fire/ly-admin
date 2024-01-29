<!--
 * @Author: 龚燎原 274473435@qq.com
 * @Date: 2024-01-29 16:43:08
 * @LastEditors: 龚燎原
 * @LastEditTime: 2024-01-29 18:52:40
-->
<script setup lang="ts"></script>

<template>
  <RouterView></RouterView>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
