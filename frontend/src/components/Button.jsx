import React, { useState } from "react";
import "../styles/Button.scss";
import MyForm from "./Myform";

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
      {isOpenPopup && <MyForm setIsOpenPopup={setIsOpenPopup} />}
    </>
  );
}

export default Button;
