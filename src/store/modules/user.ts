import { defineStore } from "pinia";

interface UserInfo {
  token: string;
  user_info: string;
}

export const useUserStore = defineStore("user", {
  state: () => {
    // 数据
    return {
      token: localStorage.getItem("token") || "",
      userInfo: localStorage.getItem("userInfo") || "",
    };
  },
  actions: {
    // 方法
    setUserInfo(data: UserInfo) {
      this.token = data.token;
      this.userInfo = data.user_info;
      localStorage.setItem("token", this.token);
      localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
    },
  },
});
export default useUserStore;
