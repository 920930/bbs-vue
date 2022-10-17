<template>
  <div class="flex">
    <section class="flex-1">
      <section class="bg-white border">
        <div class="flex px-3 border-b py-2">
          <span class="flex flex-1 space-x-3">
            <RouterLink to="">综合</RouterLink>
            <RouterLink to="">综合</RouterLink>
            <RouterLink to="">综合</RouterLink>
            <RouterLink to="">综合</RouterLink>
          </span>
          <span class="flex space-x-3">
            <RouterLink to="">按最新</RouterLink>
            <RouterLink to="">按热议</RouterLink>
          </span>
        </div>
        <ul class="p-3">
          <LiItem v-for="i in 10" :key="i" :showBorder="i !== 10" />
        </ul>
      </section>
      <section class="bg-white border mt-5">
        <div class="flex px-3 border-b py-2">
          <span class="flex flex-1 space-x-3">
            <RouterLink to="">综合</RouterLink>
            <RouterLink to="">综合</RouterLink>
            <RouterLink to="">综合</RouterLink>
            <RouterLink to="">综合</RouterLink>
          </span>
          <span class="flex space-x-3">
            <RouterLink to="">按最新</RouterLink>
            <RouterLink to="">按热议</RouterLink>
          </span>
        </div>
        <ul class="p-3">
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>
      </section>
    </section>
    <section class="w-80 ml-5">
      <div class="bg-white text-sm pb-3">
        <h3 class="px-3 py-2 border-b border-dashed">温馨通道</h3>
        <ul class="grid grid-cols-2 mx-3 text-center border border-b-0 border-r-0 mt-3">
          <li class="border-r border-b py-2">gitlab</li>
          <li class="border-r border-b py-2">gitlab</li>
          <li class="border-r border-b py-2">gitlab</li>
          <li class="border-r border-b py-2">gitlab</li>
          <li class="border-r border-b py-2">gitlab</li>
          <li class="border-r border-b py-2">gitlab</li>
        </ul>
      </div>
      <div class="bg-white text-sm pb-3 mt-5">
        <h3 class="px-3 py-2 border-b border-dashed">温馨通道</h3>
        <ul class="grid grid-cols-2 mx-3 text-center border border-b-0 border-r-0 mt-3">
          <li class="border-r border-b py-2">gitlab</li>
          <li class="border-r border-b py-2">gitlab</li>
          <li class="border-r border-b py-2">gitlab</li>
          <li class="border-r border-b py-2">gitlab</li>
          <li class="border-r border-b py-2">gitlab</li>
          <li class="border-r border-b py-2">gitlab</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import LiItem from '@/components/Item/index.vue'
</script>
