import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

// Get saved language from localStorage or default to 'en'
const savedLanguage = localStorage.getItem("language") || "en";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "fr", "es"],
    lng: savedLanguage,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

export default i18n;
