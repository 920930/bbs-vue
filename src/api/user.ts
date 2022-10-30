import axios from "@/utils/http";
import type { ICaptcha } from "@/typings";

export const getCaptcha = async (): Promise<{id: string; img: string}> => {
  const { data } = await axios.get('/captcha');
  return data
}