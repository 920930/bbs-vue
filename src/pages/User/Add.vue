<template>
  <section class="bg-white p-3 space-y-6">
    <div class="flex space-x-5">
      <MyInput label='栏目' name="cate" type="select" class="w-80" v-slot:select>
        <option value="1">123</option>
        <option value="2">123</option>
        <option value="3">123</option>
      </MyInput>
      <MyInput label="标题" name="title" class="flex-1" />
    </div>
    <Editor name="content" />
    <button @click="articleBtn" class="bg-teal-600 text-sm text-white px-4 py-2">
      立即登录
    </button>
  </section>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
import MyInput from "@/components/Input/index.vue";
import Editor from "@/components/Editor/index.vue";

const articleSchema = yup.object({
  title: yup.string().required("帖子标题不能为空"),
  cate: yup.string().required("请选择栏目"),
  content: yup.string().required("正文不能为空"),
});
const { handleSubmit: loginSubmit } = useForm({
  validationSchema: articleSchema,
});

const articleBtn = loginSubmit(async (value) => {
  console.log(value)
});
</script>
