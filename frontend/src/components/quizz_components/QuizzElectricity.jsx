import React, { useEffect, useState } from "react";
import "../../styles/Quizz.scss";
import { useApi } from "../../context/RequestApi";

function QuizzElectricity() {
  const { setResponses } = useApi();
  const [electricityResponse, setElectricityResponse] = useState(0);

  const handleElectricityChange = (e) => {
    setElectricityResponse(e.target.value);
  };

  useEffect(() => {
    const electricityValue = { electricityResponse };
    setResponses((responses) => ({
      ...responses, ...electricityValue
    }))
  }, [electricityResponse]
  )

  return (
    <div className="question">
      <label htmlFor="electricity-value">
        Quel est votre consommation d'électricité par mois (en kWh)?
      </label>
      <input
        type="number"
        name="electricity-value"
        id="electricity-value"
        min="0"
        onChange={handleElectricityChange}
      />
    </div>
  );
}

export default QuizzElectricity;
