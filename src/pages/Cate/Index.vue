<template>
  <div class="flex">
    <section class="flex-1">
      <section class="bg-white border">
        <div class="flex px-3 border-b py-4">置顶</div>
        <ul class="p-3">
          <LiItem v-for="(item, i) in lists" :key="i" :item="item" :showBorder="i !== 5" />
        </ul>
      </section>
      <section class="bg-white border mt-5">
        <div class="flex px-3 border-b py-4">
          <span class="flex-1">
            <RouterLink to="" class="border-r pr-5 mr-5">综合</RouterLink>
            <RouterLink to="" class="border-r pr-5 mr-5">未结</RouterLink>
            <RouterLink to="" class="border-r pr-5 mr-5">已结</RouterLink>
            <RouterLink to="">精华</RouterLink>
          </span>
          <span class="">
            <RouterLink to="" class="border-r pr-5 mr-5">按最新</RouterLink>
            <RouterLink to="">按热议</RouterLink>
          </span>
        </div>
        <ul class="p-3">
          <LiItem v-for="(item, i) in lists" :key="i" :item="item" />
          <li class="mt-3 text-center text-sm">
            <span @click="moreBtn" class="cursor-pointer">加载更多</span>
            <span>没有了</span>
          </li>
        </ul>
      </section>
    </section>
    <section class="w-80 ml-5">
      <Card>
        <template #title>
          <span class="border-r mr-3 pr-3">签到</span>
          <span class="border-r mr-3 pr-3 text-blue-500">说明</span>
          <span class="text-blue-500">活跃榜</span>
        </template>
        <div class="text-center">
          <button class="bg-red-500 text-white px-2 py-1">今日签到</button>
          <span class="ml-3">可以获得<i class="mx-1 text-red-600">5</i>积分</span>
        </div>
      </Card>
      <Card title="本周热议">
        <ul class=" space-y-2">
          <li class="flex justify-between text-gray-600"><span class="flex">香港可在增强新动能中广纳优才</span> <i>10</i></li>
          <li class="flex justify-between text-gray-600"><span class="flex">青春在勇毅前行中绽放光彩</span> <i>10</i></li>
          <li class="flex justify-between text-gray-600"><span class="flex">香港可在增强新动能中广纳优才</span> <i>10</i></li>
          <li class="flex justify-between text-gray-600"><span class="flex">青春在勇毅前行中绽放光彩</span> <i>10</i></li>
          <li class="flex justify-between text-gray-600"><span class="flex">香港可在增强新动能中广纳优才</span> <i>10</i></li>
          <li class="flex justify-between text-gray-600"><span class="flex">青春在勇毅前行中绽放光彩</span> <i>10</i></li>
        </ul>
      </Card>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { listApi } from '@/api/article';
import LiItem from '@/components/Item/index.vue'
import Card from '@/components/Card/index.vue'

const route = useRoute();
const param = computed(() => route.params as {id: string})
watch(param, (newId) => console.log(newId))

const getArticle = async () => {
  const data = await listApi(param.value.id);
  console.log(data)
}
getArticle()
const lists = [
  {cateId: { title: '提问' }, title: '海上生明月 天涯共此时', userId: { name: 'Admin' }, createdAt: '2022-10-17', read: 210},
  {cateId: { title: '综合' }, title: '中国式现代化打破西方垄断', userId: { name: 'Admin' }, createdAt: '2022-10-17', read: 210},
]

const moreBtn = () => {

}
</script>
