import axios from "@/utils/http";
// import type { ICaptcha } from "@/typings";

export const captchaApi = async (): Promise<{id: string; img: string}> => {
  const { data } = await axios.get('/captcha');
  return data
}

export const loginApi = async (value: any): Promise<{token: string; user: any}> => {
  const { data } = await axios.post('/login', value);
  return data
}

export const registerApi = async (value: any): Promise<{token: string; user: any}> => {
  const { data } = await axios.post('/register', value);
  return data
}