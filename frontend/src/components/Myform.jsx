import React, { useState } from "react";

const questionList = [
  {
    id: 1,
    needCallAPI: true,
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
    question: "Renseignez vos aéroports (Départ, Arrivée)",
    type: "select",
    possibilities: ["Option 1", "Option 2", "Option 3"],
  },
  {
    id: 6,
    question: "Avez-vous une voiture ?",
    type: "button",
    possibilities: ["Oui", "Non"],
  },
  {
    id: 7,
    question: "Quel type de voiture ?",
    type: "button",
    possibilities: ["Electrique", "Diesel", "Essence"],
  },
  {
    id: 8,
    question: "Combien de kilomètres parcourez-vous chaque mois ?",
    type: "input",
  },
  {
    id: 9,
    question: "Quel est votre régime alimentaire ?",
    type: "button",
    possibilities: ["Carnivore", "Vegan"],
  },
  {
    id: 10,
    question:
      "À quelle fréquence par semaine consommez-vous de la viande rouge ?",
    type: "input",
  },
  {
    id: 11,
    question: "Quel est votre consommation d'eau par mois ? (en litre)",
    type: "input",
  },
];

function MyForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleNextQuestion = () => {
    if (currentQuestion < questionList.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleChange = (questionId, value) => {
    setResponses({
      ...responses,
      [questionId]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNextQuestion();
  };

  return (
    <div>
      <h2>Formulaire d'empreinte carbone</h2>
      {showResult ? (
        <div>
          <h2>Réponses stockées :</h2>
          <pre>{JSON.stringify(responses, null, 2)}</pre>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <p>{questionList[currentQuestion].question}</p>
            {questionList[currentQuestion].type === "input" && (
              <input
                type="text"
                value={responses[questionList[currentQuestion].id] || ""}
                onChange={(e) =>
                  handleChange(questionList[currentQuestion].id, e.target.value)
                }
              />
            )}
            {questionList[currentQuestion].type === "select" && (
              <select
                value={responses[questionList[currentQuestion].id] || ""}
                onChange={(e) =>
                  handleChange(questionList[currentQuestion].id, e.target.value)
                }
              >
                <option value="">Sélectionnez une option</option>
                {questionList[currentQuestion].possibilities.map(
                  (possibility) => (
                    <option value={possibility}> {possibility} </option>
                  )
                )}
              </select>
            )}
            {questionList[currentQuestion].type === "button" && (
              <div>
                {questionList[currentQuestion].possibilities.map(
                  (possibility) => (
                    <button
                      type="submit"
                      onClick={() =>
                        handleChange(
                          questionList[currentQuestion].id,
                          possibility
                        )
                      }
                    >
                      {possibility}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
          <button type="submit">Suivant</button>
        </form>
      )}
    </div>
  );
}

export default MyForm;
