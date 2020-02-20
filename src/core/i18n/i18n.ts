import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import locales from './locales/index';

i18n.use(initReactI18next).init({
    ns: ['Common'],
    defaultNS: 'Common',
    resources: locales,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});
