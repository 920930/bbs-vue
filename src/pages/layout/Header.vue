<template>
  <header class="fixed bg-gray-800 w-full text-gray-200 h-20 z-50">
    <section class="container mx-auto flex items-center text-gray-300">
      <router-link to="/"><img src="http://front.dev.toimc.com:22500/img/logo-2.c66f7210.png" alt=""></router-link>
      <nav class="flex-1 ml-10 space-x-10">
        <a href="">交流</a>
        <a href="">案例</a>
        <a href="">框架</a>
      </nav>
      <section class="flex items-center">
        <i class="iconfont icon-xiaolian" style="font-size: 26px"></i>
        <router-link to="/login" class="ml-4 mr-6">登录</router-link>
        <router-link to="/">注册</router-link>
      </section>
    </section>
  </header>
  <section class="bg-white pt-20">
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
import {} from 'vue'

</script>

<style lang="scss" scoped>

</style>