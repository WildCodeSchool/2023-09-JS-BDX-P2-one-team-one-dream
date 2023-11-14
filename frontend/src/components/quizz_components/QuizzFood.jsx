import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useApi } from "../../context/RequestApi";

function QuizzFood({ setCurrentQuestion }) {
  const { setResponses } = useApi();
  const [foodResponse, setFoodResponse] = useState(0);
  const [showFoodQuestions, setShowFoodQuestions] = useState(false);

  const handleFoodChange = (e) => {
    setFoodResponse(e.target.value);
  };

  useEffect(() => {
    const foodValue = { foodResponse };
    setResponses((responses) => ({
      ...responses,
      ...foodValue,
    }));
  }, [foodResponse]);

  return (
    <div className="question">
      <div>
        <label htmlFor="typeOfFood">Quel est votre régime alimentaire?</label>
        <div>
          <button
            className="flight_button"
            type="button"
            name="typeOfFood"
            id="typeOfFood"
            onClick={() => setShowFoodQuestions(true)}
          >
            Carnivore
          </button>
          <button
            className="flight_button"
            type="button"
            name="typeOfFood"
            id="typeOfFood"
            onClick={() => setCurrentQuestion(4)}
          >
            Végétarien
          </button>
        </div>
      </div>
      {showFoodQuestions && (
        <div>
          <label htmlFor="howManyTimes">
            En semaine, a quelle fréquence consommez-vous de la viande rouge?
          </label>
          <input
            type="number"
            name="howManyTimes"
            id="howManyTimes"
            min="1"
            onChange={handleFoodChange}
          />
        </div>
      )}
    </div>
  );
}

QuizzFood.propTypes = {
  setCurrentQuestion: PropTypes.func.isRequired,
};

export default QuizzFood;
