import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(persist((set) => ({
    darkMode: false,
    setDarkMode: (mode) => set(() => ({ darkMode: mode })),
    token: '',
    setToken: (token) => set(() => ({ token })),
    userInfo: '',
    setUserInfo: (userInfo) => set({ userInfo: { username: userInfo.username } }),
    language: 'zh_TW',
    setLanguage: (lang) => set(() => ({ language: lang })),
  }), {
    name: 'travel-user'
  }
))
