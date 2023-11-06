import { useState } from "react";
import "../styles/Button.scss";
import Quizz from "./Quizz";

function Button() {
  const [togglePopUp, setTogglePopUp] = useState(false);

  return (
    <div>
      <button
        className="buttonQuiz"
        type="button"
        onClick={() => setTogglePopUp(true)}      >
        Calcule ton CO2
      </button>
      <div>
        {togglePopUp && <Quizz setTogglePopUp={setTogglePopUp} />}
      </div>
    </div>
  );
}

export default Button;
