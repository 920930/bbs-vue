<template>
  <section class="bg-white p-5">
    <ul class="flex mb-4 border-b">
      <RouterLink
        to="/login"
        class="w-20 text-center border-b-2 border-teal-600"
        >登入</RouterLink
      >
      <RouterLink to="/register" class="w-20 text-center">注册</RouterLink>
    </ul>
    <section class="space-y-5 duration-300 mb-6 w-full md:w-96">
      <MyInput label="邮箱" name="email" />
      <MyInput label="密码" name="password" type="password" />
      <MyInput label="验证码" name="captcha">
        <img
          :src="captcha.img"
          @click="captchaFn"
          class="cursor-pointer inline-block -mt-2 ml-2"
        />
      </MyInput>
    </section>
    <button @click="loginBtn" class="bg-teal-600 text-sm text-white px-4 py-2">
      立即登录
    </button>
    <span class="text-sm ml-5">忘记密码？</span>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useForm } from "vee-validate";
import * as yup from "yup";
import MyInput from "@/components/Input/index.vue";
import { captchaApi } from "@/api/user";
import { reactive } from "vue";
import { useLocalHooks } from "@/hooks/localHook";
const captcha = reactive({
  id: '',
  img: ''
});

const router = useRouter();
const userStore = useLocalHooks();

const loginSchema = yup.object({
  email: yup.string().required("邮箱必填").email("邮箱不正确"),
  password: yup.string().required("密码必填").min(6, "密码至少6位数"),
});
const { handleSubmit: loginSubmit } = useForm({
  validationSchema: loginSchema,
});
const loginBtn = loginSubmit(async (value) => {
  await userStore.getLoginFn({...value, id: captcha.id});
  router.push("/");
});
const captchaFn = async () => {
  const data = await captchaApi();
  captcha.img = data.img;
  captcha.id = data.id;
};
captchaFn();
</script>

<style lang="scss" scoped></style>
