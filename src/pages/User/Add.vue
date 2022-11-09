<template>
  <section class="bg-white p-3">
    <MyInput label="标题" name="title" />
    <MyInput label="标题" name="title" />
    <MyInput type="select" name="tij" label='栏目'>
      <option value="123">123</option>
      <option value="123">123</option>
      <option value="123">123</option>
    </MyInput>
  </section>
</template>

<script setup lang="ts">
import { Field } from 'vee-validate';
import MyInput from "@/components/Input/index.vue";
</script>
