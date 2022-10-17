<template>
  <li class="flex text-sm" :class="{'border-b pb-3 mb-3': showBorder }">
    <RouterLink to=""><img class="w-12 h-12 rounded" src="https://www.zcfsjt.com/storage/images/2022/0910/1_20220910095308_ulX2ho6tol.jpg" alt=""></RouterLink>
    <div class="ml-3 flex-1">
      <RouterLink to="" class="text-white bg-blue-600 mr-2 px-1.5 py-0.5 rounded">提问</RouterLink>
      <RouterLink to="">海上生明月 天涯共此时</RouterLink>
      <p class="mt-2.5 text-gray-600 space-x-3"><span>Admin</span> <span>2022-10-17</span> <span class="iconfont ">20</span></p>
    </div>
    <aside class="text-center relative">
      <span class="text-white bg-blue-600 mr-2 px-1.5 py-0.5 rounded">精华</span>
      <span class="text-white bg-red-600 mr-2 px-1.5 py-0.5 rounded">热门</span>
      <p class=" absolute left-0 bottom-0">123</p>
    </aside>
  </li>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    showBorder: boolean
  }>(), {
    showBorder: false
  }
)
</script>