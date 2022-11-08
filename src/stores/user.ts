import { ref, reactive } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", () => {
  const user = reactive({
    name: "",
    avatar: "",
  });
  const token = ref<string | null>(null);

  return { token, user };
});
