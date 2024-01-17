import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import moment from "moment";
import 'moment/locale/vi';

const languageDetector = new LanguageDetector(null, {
    order: [
        'path',
        'htmlTag',
        'subdomain',
        'querystring',
        'cookie',
        'sessionStorage',
        'localStorage',
        'navigator',
    ],
    convertDetectedLanguage: (lng) => {
        let lang = lng.replace('-', '_')
        if(!['en', 'vi'].includes(lang)){
            lang = 'en'
        }
        return lang
    }
});

i18n
    .use(Backend)
    .use(languageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .on('languageChanged', function(lng) {
        moment.locale(lng);
    })
    .init({
        fallbackLng: 'en',
        debug: false,
        defaultNS: 'translation',
        ns: ['common', 'translation'],
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        backend: {
            // for all available options read the backend's repository readme file
            loadPath: '/locales/{{lng}}/{{ns}}.json'
          }
    })
    
    ;

export default i18n;