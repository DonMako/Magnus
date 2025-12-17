import { useTranslation } from "react-i18next";

const FiltreEquipe = ({ onChange }) => {

	const { t } = useTranslation();

	function valider() {
		onChange(document.getElementById("searchTxt")!);
	}

	return (
		<>
			<label htmlFor="filtreEquipe">{t("uniquement")}</label>
			<input id="filtreEquipe" type="text"></input>
			<button id="filterEquipes" onClick={valider}>{t("valider")}</button>
		</>)
}


export default FiltreEquipe