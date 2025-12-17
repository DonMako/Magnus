import equipes from "./equipes.json";

export default function getEquipesActuelles(): string[] {
	const date = new Date();
	const mois = date.getMonth();
	const annee = date.getFullYear();
	let saison = "saison ";
	if (8 <= mois) {
		saison = saison.concat(annee.toString() + "-" + (annee + 1).toString());
	}
	else {
		saison = saison.concat((annee - 1).toString() + "-" + annee.toString());
	}
	return equipes[saison];
}
	