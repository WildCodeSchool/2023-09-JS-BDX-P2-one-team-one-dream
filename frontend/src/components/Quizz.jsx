import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Quizz.scss";
import QuizzElectricity from "./quizz_components/QuizzElectricity";
import QuizzFlight from "./quizz_components/QuizzFlight";
import QuizzCar from "./quizz_components/QuizzCar";
import QuizzFood from "./quizz_components/QuizzFood";
import QuizzWater from "./quizz_components/QuizzWater";
import { useApi } from "../context/RequestApi";

const components = [
  QuizzElectricity,
  QuizzFlight,
  QuizzCar,
  QuizzFood,
  QuizzWater,
];

function Quizz({ setTogglePopUp }) {
  const { handleSubmit } = useApi();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const isLastQuestion = currentQuestion === components.length - 1;

  const handleNextClick = () => {
    if (!isLastQuestion) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="modal">
      <div className="content">
        <div className="quizz_header">
          <h1>Calcule ton empreinte carbone!</h1>
          <button
            className="close"
            type="button"
            onClick={() => setTogglePopUp(false)}
          >
            X
          </button>
        </div>
        {components.map((Component, index) =>
          index === currentQuestion ? (
            <div>
              <Component setCurrentQuestion={setCurrentQuestion} />
            </div>
          ) : null
        )}
        {isLastQuestion ? (
          <button type="submit" onClick={handleSubmit}>
            Envoyer
          </button>
        ) : (
          <button type="button" onClick={handleNextClick}>
            Suivant
          </button>
        )}
      </div>
    </div>
  );
}

Quizz.propTypes = {
  setTogglePopUp: PropTypes.func.isRequired,
};
export default Quizz;
