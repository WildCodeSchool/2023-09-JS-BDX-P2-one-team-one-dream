import { useState } from "react";

function QuizzFlight({ setCurrentQuestion }) {
  const [quizzFlightResponse, setQuizzFlightResponse] = useState({});
  const [showFlightQuestions, setShowFlightQuestions] = useState(false);
  const [showAirportSelectors, setShowAirportSelectors] = useState(false);
  const [numberOfFlights, setNumberOfFlights] = useState(0);

  const handleNumberOfFlightsChange = (e) => {
    const numFlights = parseInt(e.target.value, 10);
    setNumberOfFlights(numFlights);
    setShowAirportSelectors(true);
    // console.log([...Array(numFlights)]);
  };

  return (
    <div>
      <div>
        <label htmlFor="didYouTakeFlight">
          Avez-vous pris l'avion ce mois-ci ?
        </label>
        <button
          type="button"
          name="didYouTakeFlight"
          id="didYouTakeFlight"
          onClick={(e) => setShowFlightQuestions(true)}
        >
          Oui
        </button>
        <button
          type="button"
          name="didYouTakeFlight"
          id="didYouTakeFlight"
          onClick={(e) => setCurrentQuestion(2)}
        >
          Non
        </button>
      </div>
      {showFlightQuestions && (
        <div className="flightquestionscontent">
          <div>
            <label htmlFor="howManyFlight">
              Combien de vols avez-vous effectués ?
            </label>
            <input
              type="number"
              name="howManyFlight"
              id="howManyFlight"
              min="1"
              onChange={handleNumberOfFlightsChange}
            />
          </div>
        </div>
      )}
      {showAirportSelectors && numberOfFlights > 0 && (
        <div>
          {[...Array(numberOfFlights)].map((_, index) => (
            <div key={index}>
              <label htmlFor={`departures-${index}`}>
                Renseignez votre aéroport de départ pour le vol {index + 1} :
              </label>
              <select name={`departures-${index}`} id={`departures-${index}`}>
                <option value="mad">Madrid</option>
                <option value="cdg">Paris</option>
                <option value="lon">Londres</option>
                <option value="bod">Bordeaux</option>
                <option value="jfk">New-York</option>
                <option value="yul">Montreal</option>
                <option value="sin">Singapour</option>
              </select>
              <label htmlFor={`arrivals-${index}`}>
                Renseignez votre aéroport d'arrivée pour le vol {index + 1} :
              </label>
              <select name={`arrivals-${index}`} id={`arrivals-${index}`}>
                <option value="mad">Madrid</option>
                <option value="cdg">Paris</option>
                <option value="lon">Londres</option>
                <option value="bod">Bordeaux</option>
                <option value="jfk">New-York</option>
                <option value="yul">Montreal</option>
                <option value="sin">Singapour</option>
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuizzFlight;
