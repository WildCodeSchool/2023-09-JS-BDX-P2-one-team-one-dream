import { useState } from "react";

function QuizzWater() {
  const [quizzWaterResponse, setQuizzWaterResponse] = useState(0);

  return (
    <div>
      <label htmlFor="numberOfLiter">
        Quel est votre consommation d'eau par mois ? (en litre)
      </label>
      <input type="number" name="numberOfLiter" id="numberOfLiter" onChange={(e) => setQuizzWaterResponse(e.target.value)} />
    </div >
  )
}

export default QuizzWater;