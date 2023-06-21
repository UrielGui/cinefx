import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enUS from './locales/en-us.json';

const resources = {
  'en-US': enUS,
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en-US',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
