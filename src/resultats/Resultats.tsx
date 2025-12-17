import Resultat from "./Resultat";
import type { Journee } from "../types/Journee";

function getEquipesJournee(journee: Journee): string[] {
	let equipes: string[] = [];
	for (const match of journee.matchs) {
		equipes.concat(match.equipeDomicile);
		equipes.concat(match.equipeVisiteur);
	}
	return [...new Set(equipes)];
}

const Resultats = ({ journee, equipes }: { journee: Journee, equipes: string[] }) => {

	if (getEquipesJournee(journee).length === 0) {
		return <></>
	}
	return (
		<>
			<p>{journee.date}</p>
			<ul>
				{journee.matchs.map((match) => ((equipes.includes(match.equipeDomicile) || equipes.includes(match.equipeVisiteur)) && <li key={match.equipeDomicile}><Resultat {...match} /></li>))}
			</ul>
		</>
	)

}

export default Resultats;