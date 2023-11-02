import React, { useState } from "react";
import "../styles/Quiz.scss";

const questionList = [
  {
    id: 1,
    needCallAPI: true / false,
    question: "Dans quel pays vivez vous ?",
    type: "select",
  },
  {
    id: 2,
    question: "Quel est votre consommation d'électricité par mois (en kWh) ?",
    type: "input",
  },
  {
    id: 3,
    question: "Avez vous pris l'avion ce mois-ci ?",
    type: "input",
  },
  {
    id: 4,
    question: "Combien de vol avez vous effectuez ?",
    type: "button",
  },
  {
    id: 5,
    question: "Renseignez vos aéroports (Départ, Arrivée)",
    type: "select",
  },
  {
    id: 6,
    question: "Avez-vous une voiture ?",
    type: "button",
  },
  {
    id: 7,
    question: "Quel type de voiture ?",
    type: "button",
  },
  {
    id: 8,
    question: "Combien de km parcourez-vous chaque mois",
    type: "input",
  },
  {
    id: 9,
    question: "Quel est vorte régime alimentaire",
    type: "button",
  },
  {
    id: 10,
    question:
      "À quelle fréquence par semaine consommez-vous de la viande rouge",
    type: "inupt",
  },
  {
    id: 11,
    question: "Quel est votre consommation d'eay par mois ? (en litre)",
    type: "input",
  },
];

function Result() {
  const [electricityValue, setElectricityValue] = useState("");
  const [estimate, setEstimate] = useState(null);

  const handleChange = (e) => {
    setElectricityValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://www.carboninterface.com/api/v1/estimates",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer CtNR923u1EZPoVuyuENy3w",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "electricity",
          electricity_unit: "kwh",
          electricity_value: electricityValue,
          country: "us",
          state: "fl",
        }),
      }
    );

    const data = await response.json();
    setEstimate(data.data.attributes);
  };

  return (
    <div>
      <p>{questionList.question[1]}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={electricityValue} onChange={handleChange} />
        <button type="submit">Envoyer</button>
      </form>
      {estimate && <p>Résultat estimé : {estimate.carbon_kg} kg de carbone</p>}
    </div>
  );
}

function Quiz({ isOpenPopup, setIsOpenPopup }) {
  return (
    <div className={isOpenPopup ? "Popup" : "Popup hidden"}>
      <div className="content">
        <div className="header">
          <button
            className="close"
            type="button"
            onClick={() => setIsOpenPopup(false)}
          >
            X
          </button>
        </div>
        <div>
          <Result />
        </div>
      </div>
    </div>
  );
}

export default Quiz;
