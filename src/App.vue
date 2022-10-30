<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderVue from './pages/layout/Header.vue';
import FooterVue from './pages/layout/Footer.vue';
</script>

<template>
  <HeaderVue />
  <main class="container mx-auto my-5">
    <Suspense>
      <RouterView />
      <template #fallback>加载中...</template>
    </Suspense>
  </main>
  <FooterVue />
</template>

<style>
  @import url('//at.alicdn.com/t/c/font_3644953_plu8qasqyo.css');
  body{
    background-color: rgba(0, 0, 0, .05);
  }
</style>