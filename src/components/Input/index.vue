<template>
  <div class="flex text-sm">
    <label for="" v-if="label" class="border border-r-0 px-4 leading-9 bg-gray-100 text-gray-600">{{label}}</label>
    <input v-model="value" type="text" class="border outline-none px-2 h-10 w-52" />
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
function isRequired(value: any) {
  if (value && value.trim()) {
    return true;
  }
  return 'This is required';
}
const nameRef = toRef(props, 'name');
const { errorMessage, value } = useField(nameRef, isRequired);
</script>