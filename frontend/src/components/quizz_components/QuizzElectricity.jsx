import { useState } from "react";

function QuizzElectricity() {

  const [quizzElectricityResponse, setQuizzElectricityResponse] = useState(0);

  return (
    <div>
      <label htmlFor="electricity-value">
        Quel est votre consommation d'électricité par mois (en kWh) ?
      </label>
      <input type="number" name="electricity-value" id="electricity-value" onChange={(e) => setQuizzElectricityResponse(e.target.value)} />
    </div>
  )
}

export default QuizzElectricity;