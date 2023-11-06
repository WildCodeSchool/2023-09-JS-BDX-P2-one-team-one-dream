import { useState } from "react"

function QuizzCar({ setCurrentQuestion }) {
  const [quizzCarResponse, setQuizzCarResponse] = useState(0);
  const [showCarQuestions, setShowCarQuestions] = useState(false);

  return (
    <>
      <div>
        <label htmlFor="didYouHaveACar">
          Avez vous une voiture?
        </label>
        <button type="button" name="didYouHaveACar" id="didYouHaveACar" onClick={(e) => setShowCarQuestions(true)}>
          Oui
        </button>
        <button type="button" name="didYouHaveACar" id="didYouHaveACar" onClick={(e) => setCurrentQuestion(3)}>
          Non
        </button>
      </div>


      {
        showCarQuestions && (

          <div>
            <div>
              <label htmlFor="whatTypeOfFuel">Quel type de carburant utilisez-vous?</label>
              <select name="whatTypeOfFuel" id="whatTypeOfFuel">
                <option value="electric">Electrique</option>
                <option value="fuel">Essence</option>
                <option value="gazoil">Diesel</option>
              </select>
              {/* Utiliser le state pour stocker la valeur */}
            </div>

            <div>
              <label htmlFor="howManyKm">
                Combien de kilomètres parcourez-vous chaque mois?
              </label>
              <input type="number" name="howManyKm" id="howManyKm" onChange={(e) => setQuizzCarResponse(e.target.value)} />
            </div>
          </div>
        )
      }
    </>
  );
}

export default QuizzCar;