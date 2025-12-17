import Equipe from "../equipes/Equipe";
import type { Match } from "../types/Match";

const Resultat = (match: Match) => {

	const separator = match.tab ? "TAB" : "-";

	return (
		<p><Equipe nom={match.equipeDomicile} /> {match.scoreDomicile} {separator} {match.scoreVisiteur} <Equipe nom={match.equipeVisiteur} /></p>
	)
}

export default Resultat;