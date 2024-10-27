// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to my portfolio",
        about: "About me",
        // Add more translations
      },
    },
    es: {
      translation: {
        welcome: "Bienvenido a mi portafolio",
        about: "Sobre mí",
        // Add more translations
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
});

export default i18n;
