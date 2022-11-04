<template>
  <div class="text-sm">
    <div class="inline-flex border rounded relative" :class="errorMessage ? 'border-red-300' : ''">
      <label for="" v-if="label" class="w-20 inline-block text-center leading-9 bg-gray-100 text-gray-600 rounded">{{label}}</label>
      <input v-model="value" :type="type" class="outline-none px-2 h-9 w-52 rounded" />
      <span class="leading-9 pl-2 text-red-600 absolute top-7 text-xs">{{ errorMessage }}</span>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';
import { toRef } from 'vue';
const props = withDefaults(
  defineProps<{
    name: string;
    label?: string;
    type?: string;
  }>(), {
    type: 'input'
  }
);
const nameRef = toRef(props, 'name');
const { errorMessage, value } = useField(nameRef, undefined);
</script>