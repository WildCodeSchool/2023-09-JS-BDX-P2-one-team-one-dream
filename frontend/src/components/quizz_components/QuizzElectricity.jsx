import { useState } from "react";
import "../../styles/Quizz.scss"

function QuizzElectricity() {

  const [quizzElectricityResponse, setQuizzElectricityResponse] = useState(0);

  return (
    <div className="question">
      <label htmlFor="electricity-value">
        Quel est votre consommation d'électricité par mois (en kWh) ?
      </label>
      <input type="number" name="electricity-value" id="electricity-value" min="0" onChange={(e) => setQuizzElectricityResponse(e.target.value)} />
    </div>
  )
}

export default QuizzElectricity;