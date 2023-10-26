import i18next, { use } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './dictionary';

const defaultLang = 'ru';

const persistedLng = localStorage.getItem('ALINA_GROUP_LANG');

if (!persistedLng) {
  localStorage.setItem('ALINA_GROUP_LANG', defaultLang);
}

use(initReactI18next).init({
  fallbackLng: defaultLang,
  lng: persistedLng ?? defaultLang,
  load: 'currentOnly',
  resources,
});

i18next.on('languageChanged', (lng) => {
  localStorage.setItem('ALINA_GROUP_LANG', lng);
});

export default i18next;
