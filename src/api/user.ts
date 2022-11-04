import axios from "@/utils/http";
import type { ICaptcha } from "@/typings";

export const getCaptcha = async (): Promise<{id: string; img: string}> => {
  const { data } = await axios.get('/captcha');
  return data
}

export const loginApi = async (value: any) => {
  const { data } = await axios.post('/login', value);
  return data
}

export const registerApi = async (value: any) => {
  const { data } = await axios.post('/register', value);
  return data
}

export const getUserApi = async (token: string) => {
  const { data } = await axios.get('/user', {params: { token }});
  return data
}