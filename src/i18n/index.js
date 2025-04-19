import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import en_US from './locales/en_US.json';
import zh_TW from './locales/zh_TW.json';

i18n.use(initReactI18next).init({
  resources: {// 所有翻譯資源
    en_US: {
      translation: en_US
    },
    zh_TW: {
      translation: zh_TW
    }
  },
  fallbackLng: 'en_US', // 如果當前切換的語言沒有對應的翻譯則使用這個語言
  lng: 'zh_TW', // 預設語言
  interpolation: {
	  // 是否要讓字詞 escaped 來防止 xss 攻擊，這裡因為 React.js 已經做了，就設成 false即可
    escapeValue: false,
  },
});

export default i18n;