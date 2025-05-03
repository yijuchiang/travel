import i18n from '@/i18n'
import { useUserStore } from '@/store/user'

export const useLanguage = () => {
    const { language, setLanguage } = useUserStore()

    const languageList = {
        zh: 'zh_TW',
        en: 'en_US'
    }
    const changeLanguage = (lang) => {
        setLanguage(lang)
        i18n.changeLanguage(lang)
    }

    return {
        language,
        languageList,
        changeLanguage
    }
}