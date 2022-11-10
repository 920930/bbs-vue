<template>
  <div class="flex rounded relative text-sm">
    <label v-if="label" class="w-20 flex justify-center items-center bg-gray-100 text-gray-600 border border-r-0 rounded-tl rounded-bl">
      {{label}}
    </label>
    <select v-model="value" class="outline-none px-2 h-9 flex-auto border rounded-tr rounded-br" :class="{'border-red-300': errorMessage}" v-if="type === 'select'">
      <slot name="select" />
    </select>
    <template v-else-if="type === 'textarea'">
      <textarea class="border w-full h-96 outline-none p-4" v-model="value"></textarea>
    </template>
    <input v-model="value" :type="type" class="outline-none border px-2 h-9 flex-auto rounded-tr rounded-br" :class="{'border-red-300': errorMessage}" v-else />
    <span class="leading-9 pl-2 text-red-600 absolute top-7 text-xs">{{ errorMessage }}</span>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';
import { toRef, type Ref } from 'vue';
const props = withDefaults(
  defineProps<{
    name: string;
    label?: string;
    type?: string;
  }>(), {
    type: 'input',
  }
);
const { errorMessage, value }: {errorMessage: Ref<string | undefined>, value: Ref<any>} = useField(toRef(props, 'name'));
</script>