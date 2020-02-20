import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import locales from './locales/index';

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        ns: ['Common'],
        defaultNS: 'Common',
        resources: locales,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });
