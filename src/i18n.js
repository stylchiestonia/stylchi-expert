import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { getLocalization } from 'middleware/localization';

import en from 'locales/en';
import ee from 'locales/ee';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      EN: {
        translation: en
      },
      EE: {
        translation: ee
      },
    },
    lng: getLocalization(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });
export default i18n;
