<template>
  <div class="relative text-sm border" :class="{'border-red-300': errorMessage}">
    <section class="border-b py-2 px-3 flex items-center space-x-7">
      <template v-for="(menu, i) in menus" :key="i">
        <template v-if="menu.icon">
          <i @click="checkBtn(i)" :class="menu.icon" class="iconfont cursor-pointer hover:text-green-600" style="font-size: 20px"></i>
        </template>
        <template v-else>
          <span @click="checkBtn(i)" class="cursor-pointer hover:text-green-600">{{menu.title}}</span>
        </template>
      </template>
    </section>
    <textarea class="w-full h-96 outline-none p-4" v-model="value" ref="textRef"></textarea>
    <div class="text-red-600 text-xs absolute -bottom-5">{{ errorMessage }}</div>
    <KeepAlive>
      <component :is="components[checkId]" />
    </KeepAlive>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';
import { toRef, type Ref, ref, defineAsyncComponent } from 'vue';
const props = withDefaults(
  defineProps<{
    name: string;
    label?: string;
    type?: string;
  }>(), {
    type: 'textarea',
  }
);
const { errorMessage, value }: {errorMessage: Ref<string | undefined>, value: Ref<any>} = useField(toRef(props, 'name'));
const menus = [
  {icon: 'icon-xiaolian'},
  {icon: 'icon-charutupian'},
  {icon: 'icon-lianjie'},
  {icon: 'icon-baojiaquotation'},
  {icon: 'icon-code'},
  {title: 'Hr'},
  {icon: 'icon-chakan'},
]

const Face = defineAsyncComponent(() =>import('./face.vue'))
const Upload = defineAsyncComponent(() =>import('../Upload/index.vue'))

const components = [Face, Upload];
const checkId = ref(-1);
const checkBtn = (i: number) => {
  checkId.value = checkId.value === i ? -1 : i
}
const textRef = ref();
</script>