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
        <RouterLink to="/login" class="ml-4 mr-6">登录</RouterLink>
        <RouterLink to="/register">注册</RouterLink>
      </section>
    </section>
  </header>
  <section class="bg-white pt-16">
    <div class="container mx-auto flex py-2.5 text-sm">
      <nav class="flex-1 space-x-9">
        <RouterLink to="/">首页</RouterLink>
        <RouterLink v-for="(menu, i) in menus" :to="menu.path" :key="i">{{menu.title}}</RouterLink>
        <span v-if="userStore.token" class="border-l pl-10 space-x-6">
          <a href="">我发布的帖子</a>
          <a href="">我收藏的帖子</a>
        </span>
      </nav>
      <aside class="space-x-4">
        <button>搜索</button>
        <button @click="$router.push('/user/add')">发表新帖</button>
      </aside>
    </div>
  </section>
</template>

<script setup lang='ts'>
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
const menus = [
  { path: '/index/ask', title: '提问', hasNes: false },
  { path: '/index/share', title: '分享', hasNes: false },
  { path: '/index/discuss', title: '讨论', hasNes: false },
  { path: '/index/advise', title: '建议', hasNes: false },
  { path: '/index/notice', title: '公告', hasNes: false },
  { path: '/index/logs', title: '动态', hasNes: false },
]
</script>

<style lang="scss" scoped>

</style>