import { useState } from "react";

function QuizzWater() {
  const [quizzWaterResponse, setQuizzWaterResponse] = useState(0);

  return (
    <div className="question">
      <label htmlFor="numberOfLiter">
        Quel est votre consommation d'eau par mois ? (en litre)
      </label>
      <input
        type="number"
        name="numberOfLiter"
        id="numberOfLiter"
        min="0"
        onChange={(e) => setQuizzWaterResponse(e.target.value)}
      />
    </div>
  );
}

export default QuizzWater;
