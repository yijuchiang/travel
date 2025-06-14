import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// localStorage vs. sessionStorage
// localstorage => 持久儲存數據
// sessionStorage => 暫時儲存數據，關閉頁面或瀏覽器數據就會消失
// 儲存 => .setItem(key, value)
// 取得 => .getItem(key)
// 刪除 => .removeItem(key)

export const useUserStore = create(persist((set) => ({
    darkMode: false,
    token: '',
    setToken: (token) => set(() => ({ token })),
    userInfo: '',
    setUserInfo: (userInfo) => set({ userInfo: { username: userInfo.username } }),
    setDarkMode: (mode) => set(() => ({ darkMode: mode })),
    language: 'zh_TW',
    setLanguage: (lang) => set(() => ({ language: lang })),
  }), {
    name: 'user'
  }
))
