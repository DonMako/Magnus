import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en_translation from "./en_traduction.json";
import fr_translation from "./fr_traduction.json";

const resources = {
	en: {
		translation: en_translation
	},
	fr: {
		translation: fr_translation
	}
};

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: "fr",
		interpolation: {
			escapeValue: false
		}
	});

export default i18n;