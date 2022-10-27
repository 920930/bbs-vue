<template>
  <div class="text-sm">
    <div class="inline-flex border rounded" :class="errorMessage ? 'border-red-300' : ''">
      <label for="" v-if="label" class="w-20 inline-block text-center leading-10 bg-gray-100 text-gray-600">{{label}}</label>
      <input v-model="value" :type="name === 'password' ? 'password' : 'text'" class="outline-none px-2 h-10 w-52 rounded" />
    </div>
    <span class="leading-9 pl-2 text-red-600">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';
import { toRef } from 'vue';
const props = defineProps<{
  name: string;
  label?: string;
}>();
const nameRef = toRef(props, 'name');
const { errorMessage, value } = useField(nameRef, undefined);
</script>