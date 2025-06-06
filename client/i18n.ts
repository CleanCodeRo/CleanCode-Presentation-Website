
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './public/assets/locales/en/translation.json';
import translationRO from './public/assets/locales/ro/translation.json';

const resources = {
  en: { translation: translationEN },
  ro: { translation: translationRO },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
