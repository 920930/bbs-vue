import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { loginApi, getUserApi } from '@/api/user'

export const useUserStore = defineStore('user', () => {
  const user = reactive({
    realName: '',
  })
  const token = ref('')
  
  const getToken = async (email: string, password: string) => {
    const { data } = await loginApi({email, password});
    token.value = data.token;
    getUser(data.token)
  }

  const getUser = async (token: string) => {
    const { data } = await getUserApi(token);
    user.realName = data.realName;
  }

  return { token, user, getToken, getUser }
})
