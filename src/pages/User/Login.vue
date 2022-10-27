<template>
  <section class="bg-white p-5">
    <ul class="flex mb-4 border-b">
      <li class="w-20 text-center" :class="{'border-b-2 border-green-500': isLogin}" @click="isLogin = true">登入</li>
      <li class="w-20 text-center" :class="{'border-b-2 border-green-500': !isLogin}" @click="isLogin = false">注册</li>
    </ul>
    <section class="space-y-4 duration-300" v-show="isLogin">
      <MyInput label="邮箱" name="email" />
      <MyInput label="密码" name="password" />
      <button @click="loginBtn" class="">提交</button>
    </section>
    <section class="space-y-4 duration-300" v-show="!isLogin">
      <MyInput label="邮箱" name="email" />
      <MyInput label="昵称" name="name" />
      <MyInput label="密码" name="password" />
      <MyInput label="确认密码" name="pwd" />
      <MyInput label="验证码" name="captcha" />
      <button @click="registerBtn" class="">提交</button>
    </section>
  </section>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import MyInput from '@/components/Input/index.vue'

const isLogin = ref(true)

const loginSchema = yup.object({
  email: yup.string().required('邮箱必填').email('邮箱不正确'),
  password: yup.string().required('密码必填').min(8, '密码至少8位数'),
});
const registerSchema = yup.object({
  email: yup.string().required('邮箱必填').email('邮箱不正确'),
  name: yup.string().required('昵称必填'),
  password: yup.string().required('密码必填').min(6, '密码至少6位数'),
  pwd: yup.string().required('确认密码必填').oneOf([yup.ref('password'), null], '两次密码不一致'),
});
const { handleSubmit: loginSubmit } = useForm({
  validationSchema: loginSchema,
});
const { handleSubmit: registerSubmit } = useForm({
  validationSchema: registerSchema,
});

const loginBtn = loginSubmit(value => {
  console.log(value)
})

const registerBtn = registerSubmit(value => {
  console.log(value)
})

</script>

<style lang="scss" scoped>

</style>