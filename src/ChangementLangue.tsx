import { useState } from "react";
import { useTranslation } from "react-i18next";

const ChangementLangue = () => {

	const { i18n, t } = useTranslation();
	const [fr, setFr] = useState(true);

	function changerLangue(lng: string): void {
		i18n.changeLanguage(lng);
	};

	function changer(): void {
		if (fr) {
			changerLangue("en");
			setFr(false);
		} else {
			changerLangue("fr");
			setFr(true);
		}
	}

	return <button id="boutonLangue" onClick={changer}>{t("lang")}</button>
}

export default ChangementLangue;