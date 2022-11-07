const TOKEN = "token";
const USER = "user";

export const useLocalStorage = () => {
  const getToken = () => globalThis.localStorage.getItem(TOKEN);
  const getUser = () => {
    const user = globalThis.localStorage.getItem(USER) || '{}';
    return JSON.parse(user)
  };
  const setToken = (val: string) => globalThis.localStorage.setItem(TOKEN, val);
  const setUser = (val: any) => globalThis.localStorage.setItem(USER, JSON.stringify(val))
  return {
    getToken,
    getUser,
    setToken,
    setUser
  }
}
