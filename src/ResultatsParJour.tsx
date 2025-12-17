import Resultats from "./Resultats";
import type { Journee } from "./types/Journee";
import type { Match } from "./types/Match";

function getDates(matchs: Match[]): string[] {
	let dates: string[] = [];
	matchs.forEach((match) => dates = !dates.includes(match.date) ? dates = dates.concat(match.date) : dates);
	return dates;
}

function getMatchsByDate(listeMatchs: Match[], date: string): Journee {
	const matchs = listeMatchs.filter((match) => match.date == date);
	return { date, matchs };
}

const ResultatParJour = ({ matchs }: { matchs: Match[] }) => {

	const dates: string[] = getDates(matchs);
	return (
		dates.map((date) => <Resultats journee={getMatchsByDate(matchs, date)} />)
	)

}

export default ResultatParJour;