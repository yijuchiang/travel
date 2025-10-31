import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import en_US from './locales/en_US.json';
import zh_TW from './locales/zh_TW.json';

const user = localStorage.getItem('user')

i18n.use(initReactI18next).init({
  resources: {
    en_US: {
      translation: en_US
    },
    zh_TW: {
      translation: zh_TW
    }
  },
  fallbackLng: 'en_US', 
  lng: user ? JSON.parse(user).state.language : 'zh_TW', 
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;