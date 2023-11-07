import { useState } from "react";
import "../styles/Quizz.scss";
import QuizzElectricity from "./quizz_components/QuizzElectricity";
import QuizzFlight from "./quizz_components/QuizzFlight";
import QuizzCar from "./quizz_components/QuizzCar";
import QuizzFood from "./quizz_components/QuizzFood";
import QuizzWater from "./quizz_components/QuizzWater";

function Quizz({ setTogglePopUp }) {
  let [currentQuestion, setCurrentQuestion] = useState(0);
  const [showSubmitButton, setShowSubmitButton] = useState(false);

  const handleNextClick = () => {
    if (currentQuestion < 4) {
      setCurrentQuestion(++currentQuestion);
    } else {
      setShowSubmitButton(true);
    }
  };


  return (
    <div className="modal">
      <div className="content">
        <div className="quizz_header">
          <h1>Calcule ton empreinte carbone!</h1>
          <button className="close" type="button" onClick={() => setTogglePopUp(false)}>X</button>
        </div>
        <div className="question_container">
          <div className="question">
            {currentQuestion === 0 && <QuizzElectricity />}
          </div>
          <div className="question">
            {currentQuestion === 1 && <QuizzFlight setCurrentQuestion={setCurrentQuestion} />}
          </div>
          <div className="question">
            {currentQuestion === 2 && <QuizzCar setCurrentQuestion={setCurrentQuestion} />}
          </div>
          <div className="question">
            {currentQuestion === 3 && <QuizzFood setCurrentQuestion={setCurrentQuestion} />}
          </div>
          <div className="question">
            {currentQuestion === 4 && <QuizzWater />}
          </div>
          {showSubmitButton ? (
            <button type="submit">Envoyer</button>
          ) : (
            <button onClick={handleNextClick}>Suivant</button>
          )}
        </div>
      </div>
    </div >
  )
}

export default Quizz;
