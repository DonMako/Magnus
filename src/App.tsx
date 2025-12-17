import { useState } from "react";
import ChangementLangue from "./ChangementLangue";
import FiltreEquipe from "./equipes/FiltreEquipe";
import matchs from "./matchs.json";
import ResultatsParJour from "./ResultatsParJour";

function App() {
  const [equipes, setEquipes] = useState([]);

  return (
    <>
      <ChangementLangue />
      <FiltreEquipe />
      <ResultatsParJour matchs={matchs} />
    </>
  )
}

export default App
