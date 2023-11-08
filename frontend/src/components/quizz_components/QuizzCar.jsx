import { useEffect, useState } from "react";
import { useApi } from "../../context/RequestApi";


function QuizzCar({ setCurrentQuestion }) {
  const { setResponses } = useApi();
  const [carResponse, setCarResponse] = useState(0);
  const [showCarQuestions, setShowCarQuestions] = useState(false); // afficher les questions suivante selon oui ou non 


  const handleCarChange = (e) => {
    setCarResponse(e.target.value)
  };

  useEffect(() => {
    const carValue = { carResponse };
    setResponses((responses) => ({
      ...responses, ...carValue
    }))
  }, [carResponse]
  )

  return (
    <div className="question">
      <div>
        <label htmlFor="didYouHaveACar">Avez vous une voiture?</label>
        <div>
          <button
            type="button"
            name="didYouHaveACar"
            id="didYouHaveACar"
            onClick={() => setShowCarQuestions(true)}
          >
            Oui
          </button>
          <button
            type="button"
            name="didYouHaveACar"
            id="didYouHaveACar"
            onClick={() => setCurrentQuestion(3)}
          >
            Non
          </button>
        </div>
      </div>

      {showCarQuestions && (
        <div className="question">
          <div>
            <label htmlFor="whatTypeOfFuel">
              Quel type de carburant utilisez-vous?
            </label>
            <div>
              <select name="whatTypeOfFuel" id="whatTypeOfFuel">
                <option value="electric">Electrique</option>
                <option value="fuel">Essence</option>
                <option value="gazoil">Diesel</option>
              </select>
            </div>
          </div>

          <div className="question">
            <label htmlFor="howManyKm">
              Combien de kilomètres parcourez-vous chaque mois?
            </label>
            <input
              type="number"
              name="howManyKm"
              id="howManyKm"
              min="0"
              onChange={handleCarChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizzCar;
