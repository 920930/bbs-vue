<template>
  <section class="bg-white p-5">
    <ul class="flex mb-4 border-b">
      <RouterLink to="/login" class="w-20 text-center">登入</RouterLink>
      <RouterLink to="/register" class="w-20 text-center border-b-2 border-teal-600">注册</RouterLink>
    </ul>
    <section class="space-y-5 duration-300">
      <MyInput label="邮箱" name="email" />
      <MyInput label="昵称" name="name" />
      <MyInput label="密码" name="password" />
      <MyInput label="确认密码" name="pwd" />
      <MyInput label="验证码" name="captcha" />
      <button @click="registerBtn" class=" bg-teal-600 text-sm text-white px-4 py-2">立即注册</button>
    </section>
  </section>
</template>

<script setup lang='ts'>
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import MyInput from '@/components/Input/index.vue'

const registerSchema = yup.object({
  email: yup.string().required('邮箱必填').email('邮箱不正确'),
  name: yup.string().required('昵称必填'),
  password: yup.string().required('密码必填').min(6, '密码至少6位数'),
  pwd: yup.string().required('确认密码必填').oneOf([yup.ref('password'), null], '两次密码不一致'),
});
const { handleSubmit: registerSubmit } = useForm({
  validationSchema: registerSchema,
});
const registerBtn = registerSubmit(value => {
  console.log(value)
})

</script>

<style lang="scss" scoped>

</style>