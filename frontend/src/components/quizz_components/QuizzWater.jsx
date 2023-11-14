import { useEffect, useState } from "react";
import { useApi } from "../../context/RequestApi";

function QuizzWater() {
  const { setResponses } = useApi();
  const [waterResponse, setWaterResponse] = useState(0);

  const handleWaterChange = (e) => {
    setWaterResponse(e.target.value);
  };

  useEffect(() => {
    const waterValue = { waterResponse };
    setResponses((prevResponses) => ({
      ...prevResponses,
      ...waterValue,
    }));
  }, [waterResponse]);

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
        onChange={handleWaterChange}
      />
    </div>
  );
}

export default QuizzWater;
