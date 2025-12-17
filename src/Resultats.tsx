import Resultat from "./Resultat";
import type { Journee } from "./types/Journee";

const Resultats = ({ journee }: { journee: Journee }) => {

	return (
		<>
			<p>{journee.date}</p>
			<ul>
				{journee.matchs.map((match) => <li><Resultat {...match} /></li>)}
			</ul>
		</>
	)

}

export default Resultats;