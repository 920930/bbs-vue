import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import { loginApi, getUserApi, registerApi } from "@/api/user";

export const useUserStore = defineStore("user", () => {
  const user = reactive({
    name: "",
    avatar: "",
  });
  const token = ref<string | null>(null);

  const getToken = async (email: string, password: string) => {
    const { data } = await loginApi({ email, password });
    token.value = data.token;
    getUser(data.token);
  };

  const registerEvent = async (info: any) => {
    const data = await registerApi(info);
    if (data) {
      token.value = data;
      getUser(data);
      return true;
    } else {
      return false;
    }
  };

  const getUser = async (token: string) => {
    const { data } = await getUserApi(token);
    user.name = data.name;
    user.avatar = data.avatar;
  };

  return { token, user, getToken, getUser, registerEvent };
});
