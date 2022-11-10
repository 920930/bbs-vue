<template>
  <div class="relative text-sm border" :class="{'border-red-300': errorMessage}">
    <section class="border-b py-2 px-3 flex items-center space-x-7">
      <div class="iconfont icon-xiaolian cursor-pointer hover:text-green-600" style="font-size: 20px">
        
      </div>
      <i class="iconfont icon-charutupian cursor-pointer hover:text-green-600" style="font-size: 20px"></i>
      <i class="iconfont icon-lianjie cursor-pointer hover:text-green-600" style="font-size: 20px"></i>
      <i class="iconfont icon-baojiaquotation cursor-pointer hover:text-green-600" style="font-size: 20px"></i>
      <i class="iconfont icon-code cursor-pointer hover:text-green-600" style="font-size: 20px"></i>
      <span class="cursor-pointer hover:text-green-600">Hr</span>
      <i class="iconfont icon-chakan cursor-pointer hover:text-green-600" style="font-size: 20px"></i>
    </section>
    <textarea class="w-full h-96 outline-none p-4" v-model="value" ref="textRef"></textarea>
    <div class="text-red-600 text-xs absolute -bottom-5">{{ errorMessage }}</div>
    <Face />
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';
import { toRef, type Ref, ref } from 'vue';
import Face from './face.vue';
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

const textRef = ref();
</script>