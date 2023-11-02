/* eslint-disable no-restricted-syntax */
/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import "../styles/Quiz.scss";

const questionList = [
  {
    id: 1,
    question: "Dans quel pays vivez-vous ?",
    type: "select",
    possibilities: ["France", "Angleterre", "Espagne", "Etats-Unis"],
  },
  {
    id: 2,
    question: "Quel est votre consommation d'électricité par mois (en kWh) ?",
    type: "input",
  },
  {
    id: 3,
    question: "Avez-vous pris l'avion ce mois-ci ?",
    type: "button",
    possibilities: ["Oui", "Non"],
  },
  {
    id: 4,
    question: "Combien de vols avez-vous effectués ?",
    type: "input",
  },
  {
    id: 5,
    question: "Aéroport de départ",
    type: "select",
    possibilities: ["cdg", "lhr", "sfo", "yyz"],
  },
  {
    id: 6,
    question: "Aéroport d'arrivée",
    type: "select",
    possibilities: ["cdg", "lhr", "sfo", "yyz"],
  },
  {
    id: 7,
    question: "Avez-vous une voiture ?",
    type: "button",
    possibilities: ["Oui", "Non"],
  },
  {
    id: 8,
    question: "Quel type de voiture ?",
    type: "button",
    possibilities: ["Electrique", "Diesel", "Essence"],
  },
  {
    id: 9,
    question: "Combien de kilomètres parcourez-vous chaque mois",
    type: "input",
  },
  {
    id: 10,
    question: "Quel est votre régime alimentaire",
    type: "button",
    possibilities: ["Carnivore", "Vegan"],
  },
  {
    id: 11,
    question:
      "À quelle fréquence par semaine consommez-vous de la viande rouge",
    type: "input",
  },
  {
    id: 12,
    question: "Quel est votre consommation d'eau par mois ? (en litre)",
    type: "input",
  },
];

function Result({ estimate }) {
  console.log("Estimate:", estimate); // Ajoutez ce log pour vérifier si `estimate` est correct

  return estimate ? (
    <div>
      <p>Résultat estimé : {estimate.carbon_kg} kg de carbone</p>
    </div>
  ) : (
    <div>
      <p>En attente d'estimation...</p>
    </div>
  );
}

function Quiz() {
  const [responses, setResponses] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [estimate, setEstimate] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const electricityValue = responses[2];
    const hasTakenFlight = responses[3] === "Oui";
    const flightDetails = hasTakenFlight
      ? {
          departure_airport: [responses[4], responses[5]],
          destination_airport: [responses[5], responses[4]],
        }
      : null;

    if (electricityValue) {
      const electricityResponse = await fetch(
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

      const electricityData = await electricityResponse.json();
      console.log("Estimation pour l'électricité : ", electricityData);
      setEstimate(electricityData.data.attributes);
    }

    if (hasTakenFlight && flightDetails) {
      const flightResponse = await fetch(
        "https://www.carboninterface.com/api/v1/estimates",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer CtNR923u1EZPoVuyuENy3w",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "flight",
            passengers: 1,
            legs: [flightDetails],
          }),
        }
      );

      const flightData = await flightResponse.json();
      setEstimate((prevEstimate) => {
        return {
          ...prevEstimate,
          flight: flightData,
        };
      });
    }
  };
  const handleNextQuestion = () => {
    if (currentQuestion < questionList.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div>
      <div>
        <h1>Formulaire</h1>
        <form onSubmit={handleSubmit}>
          {questionList.map((q, index) => (
            <div
              key={q.id}
              style={{
                display: index === currentQuestion ? "block" : "none",
              }}
            >
              <p>{q.question}</p>
              {q.type === "button" ? (
                q.possibilities.map((possibility) => (
                  <label key={possibility}>
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value={possibility}
                      checked={responses[q.id] === possibility}
                      onChange={(e) =>
                        setResponses({ ...responses, [q.id]: e.target.value })
                      }
                    />
                    {possibility}
                  </label>
                ))
              ) : q.type === "input" ? (
                <input
                  type="text"
                  value={responses[q.id] || ""}
                  onChange={(e) =>
                    setResponses({ ...responses, [q.id]: e.target.value })
                  }
                />
              ) : q.type === "select" ? (
                <select
                  value={responses[q.id] || ""}
                  onChange={(e) =>
                    setResponses({ ...responses, [q.id]: e.target.value })
                  }
                >
                  <option value="">Sélectionnez une option</option>
                  {q.possibilities.map((possibility) => (
                    <option key={possibility} value={possibility}>
                      {possibility}
                    </option>
                  ))}
                </select>
              ) : null}
              {index < questionList.length - 1 && (
                <button type="button" onClick={handleNextQuestion}>
                  Suivant
                </button>
              )}
            </div>
          ))}
          {currentQuestion === questionList.length - 1 && (
            <button type="submit">Envoyer</button>
          )}
        </form>
      </div>
      <div>{estimate && <Result estimate={estimate} />}</div>
    </div>
  );
}

export default Quiz;
