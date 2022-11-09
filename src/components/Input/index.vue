<template>
  <template v-if="type === 'select'">
    <div class="inline-flex border rounded relative w-full" :class="errorMessage ? 'border-red-300' : ''">
      <label for="" v-if="label" class="w-28 text-center text-sm leading-9 bg-gray-100 text-gray-600 rounded">{{label}}</label>
      <select v-model="value" class="outline-none px-2 h-9 w-52 rounded flex-1">
        <slot />
      </select>
      <span class="leading-9 pl-2 text-red-600 absolute top-7 text-xs">{{ errorMessage }}</span>
    </div>
  </template>
  <div class="text-sm" v-else>
    <div class="inline-flex border rounded relative w-full" :class="errorMessage ? 'border-red-300' : ''">
      <label for="" v-if="label" class="w-28 text-center leading-9 bg-gray-100 text-gray-600 rounded">{{label}}</label>
      <input v-model="value" :type="type" class="outline-none px-2 h-9 flex-1 rounded" />
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
const { errorMessage, value } = useField(toRef(props, 'name'));
</script>