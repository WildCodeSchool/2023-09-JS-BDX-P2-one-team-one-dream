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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              color="red"
              className="close"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
        {components.map((Component, index) =>
          index === currentQuestion ? (
            <Component
              key={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
            />
          ) : null
        )}

        {isLastQuestion ? (
          <button type="submit" onClick={handleSubmit} className="quizz_button">
            Envoyer
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNextClick}
            className="quizz_button"
          >
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
