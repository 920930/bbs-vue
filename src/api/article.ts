import axios from "@/utils/http";

export const topApi = async (cate: string): Promise<{id: string; img: string}> => {
  const { data } = await axios.get('/cate');
  return data
}

export const listApi = async (cate: string) => {
  const { data } = await axios.get('/article?cate=' + cate + '&id=0');
  return data;
}

export const hostApi = (cate: string) => {

}