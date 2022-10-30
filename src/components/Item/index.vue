<template>
  <li class="flex text-sm group" :class="{'border-b pb-3 mb-3': showBorder }">
    <RouterLink to=""><img class="w-12 h-12 rounded" src="https://www.zcfsjt.com/storage/images/2022/0910/1_20220910095308_ulX2ho6tol.jpg" alt=""></RouterLink>
    <div class="ml-3 flex-1">
      <RouterLink to="" class="text-white bg-blue-600 mr-2 px-1.5 py-0.5 rounded">{{item.cateId.title}}</RouterLink>
      <RouterLink to="" class="group-hover:text-red-700">{{item.title}}</RouterLink>
      <p class="mt-2.5 text-gray-600 space-x-3"><span>{{item.userId.name}}</span> <span>{{item.createdAt}}</span> <span class="iconfont ">{{item.read}}</span></p>
    </div>
    <aside class="text-center relative">
      <span class="text-white bg-blue-600 mr-2 px-1.5 py-0.5 rounded">精华</span>
      <span class="text-white bg-red-600 mr-2 px-1.5 py-0.5 rounded">热门</span>
      <p class=" absolute left-0 bottom-0">{{item.read}}</p>
    </aside>
  </li>
</template>

<script setup lang="ts">
interface Item {
  cateId: {
    title: string;
  };
  title: string;
  userId: {
    name: string;
  };
  createdAt: string;
  read: number;
}
withDefaults(
  defineProps<{
    showBorder?: boolean,
    item: Item
  }>(), {
    showBorder: true
  }
)
</script>