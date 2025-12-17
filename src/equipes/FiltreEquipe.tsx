import getEquipesActuelles from "./utils";

const FiltreEquipe = () => {

	const equipes: string[] = getEquipesActuelles();

	return (
		<>
			<form>
				<fieldset>
					<legend>Équipe(s) sélectionnée(s)</legend>
					{equipes.map((equipe) => <>
						<input type="checkbox" id={equipe.toLowerCase()} name={equipe.toLowerCase()} value={equipe.toUpperCase()} />
						<label htmlFor={equipe.toLowerCase()}>{equipe}</label>
						<br />
					</>)}
				</fieldset>
			</form>
		</>)
}


export default FiltreEquipe