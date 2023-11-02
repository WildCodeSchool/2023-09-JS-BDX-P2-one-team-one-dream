import React, { useState } from "react";
import "../styles/Button.scss";
import Quiz from "./Quiz";

function Button() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  return (
    <>
      <button
        type="button"
        className="buttonQuiz"
        onClick={() => setIsOpenPopup(true)}
      >
        Calcule ton CO2
      </button>
      {isOpenPopup && <Quiz setIsOpenPopup={setIsOpenPopup} />}
    </>
  );
}

export default Button;
