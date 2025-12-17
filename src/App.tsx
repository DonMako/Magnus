import { useState } from "react";
import ChangementLangue from "./ChangementLangue";
import matchs from "./matchs.json";
import ResultatsParJour from "./resultats/ResultatsParJour";
import getEquipesActuelles from "./equipes/utils";

function App() {
  const [equipes, setEquipes] = useState(getEquipesActuelles());

  return (
    <>
      <ChangementLangue />
      <ResultatsParJour matchs={matchs} equipes={equipes} />
    </>
  )
}

export default App
