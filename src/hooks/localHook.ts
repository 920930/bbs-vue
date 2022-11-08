import { loginApi, registerApi } from '@/api/user';
import { useUserStore } from '@/stores/user';
const TOKEN = "token";
const USER = "user";

export const useLocalHooks = () => {
  const userStore = useUserStore();
  const getLocalToken = () => {
    const token = globalThis.localStorage.getItem(TOKEN);
    if(!userStore.token && token) userStore.token = token;
    return token;
  };
  const getLocalUser = () => {
    const user: {name: string; avatar: string} = JSON.parse(globalThis.localStorage.getItem(USER) || '{}');
    if(!userStore.user.name) {
      userStore.user.name = user.name
      userStore.user.avatar = user.avatar
    }
    return user;
  };
  const setToken = (val: string) => {
    userStore.token = val;
    globalThis.localStorage.setItem(TOKEN, val)
  };
  const setUser = (val: any) => {
    userStore.user.name = val.name
    userStore.user.avatar = val.avatar
    globalThis.localStorage.setItem(USER, JSON.stringify(val))
  }
  const removeLocalAll = () => {
    globalThis.localStorage.removeItem(TOKEN)
    globalThis.localStorage.removeItem(USER)
    userStore.$reset();
  }
  const getLoginFn = async (val: any) => {
    const {token, user} = await loginApi(val);
    setToken(token)
    setUser(user)
  }
  const getRegisterFn = async (info: any) => {
    const {token, user} = await registerApi(info)
    setToken(token)
    setUser(user)
  }
  return {
    userStore,
    getLocalToken,
    getLocalUser,
    setToken,
    setUser,
    getLoginFn,
    getRegisterFn,
    removeLocalAll
  }
}
