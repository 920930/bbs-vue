<template>
  <header class="fixed bg-gray-800 w-full text-gray-200 h-16 z-50 flex items-center">
    <section class="container mx-auto flex text-gray-300">
      <router-link to="/"><img src="../../assets/logo.png" alt=""></router-link>
      <nav class="flex-1 ml-10 space-x-10 self-center">
        <a href="">交流</a>
        <a href="">案例</a>
        <a href="">框架</a>
      </nav>
      <section class="flex items-center" v-if="userStore.token">
        <img :src="userStore.user.avatar" :alt="userStore.user.name" class="w-10 h-10 rounded mr-3">
        <span>{{userStore.user.name}}</span>
      </section>
      <section class="flex items-center" v-else>
        <i class="iconfont icon-xiaolian" style="font-size: 26px"></i>
        <router-link to="/login" class="ml-4 mr-6">登录</router-link>
        <router-link to="/register">注册</router-link>
      </section>
    </section>
  </header>
  <section class="bg-white pt-16">
    <div class="container mx-auto flex py-2.5 text-sm">
      <nav class="flex-1 space-x-10">
        <a href="">首页</a>
        <a href="">提问</a>
        <a href="">分享</a>
        <a href="">讨论</a>
        <a href="">建议</a>
        <a href="">公告</a>
        <a href="">动态</a>
      </nav>
      <aside class="space-x-4">
        <button>搜索</button>
        <button>发表新帖</button>
      </aside>
    </div>
  </section>
</template>

<script setup lang='ts'>
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();

</script>

<style lang="scss" scoped>

</style>