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
      {
        showFlightQuestions && (
          <div className="flightquestionscontent">
            <div>
              <label htmlFor="howManyFlight">
                Combien de vols avez-vous effectués ?
              </label>
              <input type="number" name="howManyFlight" id="howManyFlight" min="1" onChange={(e) => setShowAirportSelectors(true)} />
            </div>
          </div>
        )
      }
      {
        showAirportSelectors && (
          <div>
            <div>
              <label htmlFor="departures">Renseignez votre aéroport de départ :</label>
              <select name="departures" id="departures">
                <option value="mad">Madrid</option>
                <option value="cdg">Paris</option>
                <option value="lon">Londres</option>
                <option value="bod">Bordeaux</option>
                <option value="jfk">New-York</option>
                <option value="yul">Montreal</option>
                <option value="sin">Singapour</option>
              </select>
            </div>
            <div>
              <label htmlFor="arrivals">Renseignez votre aéroport d'arrivé :</label>
              <select name="arrivals" id="arrivals">
                <option value="mad">Madrid</option>
                <option value="mad">Bordeaux</option>
                <option value="cdg">Paris</option>
                <option value="lon">Londres</option>
                <option value="bod">Bordeaux</option>
                <option value="jfk">New-York</option>
                <option value="yul">Montreal</option>
                <option value="sin">Singapour</option>
              </select>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default QuizzFlight;