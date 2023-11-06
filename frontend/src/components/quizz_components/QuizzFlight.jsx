import { useState } from "react";


function QuizzFlight({ setCurrentQuestion }) {
  const [quizzFlightResponse, setQuizzFlightResponse] = useState({});
  const [showFlightQuestions, setShowFlightQuestions] = useState(false);
  const [showAirportSelectors, setShowAirportSelectors] = useState(false);

  return (
    <div>
      <div>
        <label htmlFor="didYouTakeFlight">
          Avez-vous pris l'avion ce mois-ci ?
        </label>
        <button type="button" name="didYouTakeFlight" id="didYouTakeFlight" onClick={(e) => setShowFlightQuestions(true)}>
          Oui
        </button>
        <button type="button" name="didYouTakeFlight" id="didYouTakeFlight" onClick={(e) => setCurrentQuestion(2)}>
          Non
        </button>
      </div>
      {showFlightQuestions && (
        <div className="flightquestionscontent">
          <div>
            <label htmlFor="howManyFlight">
              Combien de vols avez-vous effectués ?
            </label>
            <input type="number" name="howManyFlight" id="howManyFlight" />
            {/* En fonction du nombre de vol effectués, afficher un certains nombre de select. 4 select = 1 aller retour */}
          </div>
        </div>
      )}
    </div >
    // Stocker les valeurs de départ et d'arrivée selectionné et en fonction du nombre de vol multiplier la réponse du kilos de carbone
  )

}

export default QuizzFlight;