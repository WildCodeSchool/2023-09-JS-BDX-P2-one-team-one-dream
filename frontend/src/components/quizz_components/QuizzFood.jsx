import { useState } from "react";

function QuizzFood({ setCurrentQuestion }) {
  const [quizzFoodResponse, setQuizzFoodResponse] = useState(0);
  const [showFoodQuestions, setShowFoodQuestions] = useState(false);

  return (
    <div className="question">
      <div>
        <label htmlFor="typeOfFood">Quel est votre régime alimentaire?</label>
        <div>
          <button
            type="button"
            name="typeOfFood"
            id="typeOfFood"
            onClick={() => setShowFoodQuestions(true)}
          >
            Carnivore
          </button>
          <button
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
            onChange={(e) => setQuizzFoodResponse(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

export default QuizzFood;
