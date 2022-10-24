<template>
  <div>
    <input v-model="value" type="text" />
    <span>{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';
import { toRef } from 'vue';
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
function isRequired(value: any) {
  if (value && value.trim()) {
    return true;
  }
  return 'This is required';
}
const nameRef = toRef(props, 'name');
const { errorMessage, value } = useField(nameRef, isRequired);
</script>