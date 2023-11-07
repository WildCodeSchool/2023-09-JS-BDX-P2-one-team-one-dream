import { useState } from "react";

function QuizzFlight({ setCurrentQuestion }) {
  const [quizzFlightResponse, setQuizzFlightResponse] = useState({});
  const [showFlightQuestions, setShowFlightQuestions] = useState(false);
  const [showAirportSelectors, setShowAirportSelectors] = useState(false);
<<<<<<< HEAD

  return (
    <div className="question">
=======
  const [numberOfFlights, setNumberOfFlights] = useState(0);

  const handleNumberOfFlightsChange = (e) => {
    const numFlights = parseInt(e.target.value, 10);
    setNumberOfFlights(numFlights);
    setShowAirportSelectors(true);
    // console.log([...Array(numFlights)]);
  };

  return (
    <div>
>>>>>>> 29bb7391b6649f4a50333697df968dcb3cf21215
      <div>
        <label htmlFor="didYouTakeFlight">
          Avez-vous pris l'avion ce mois-ci ?
        </label>
<<<<<<< HEAD
        <div>
          <button
            type="button"
            name="didYouTakeFlight"
            id="didYouTakeFlight"
            onClick={() => setShowFlightQuestions(true)}
          >
            Oui
          </button>
          <button
            type="button"
            name="didYouTakeFlight"
            id="didYouTakeFlight"
            onClick={() => setCurrentQuestion(2)}
          >
            Non
          </button>
        </div>
=======
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
>>>>>>> 29bb7391b6649f4a50333697df968dcb3cf21215
      </div>
      {showFlightQuestions && (
        <div className="flightquestionscontent">
          <div>
            <label htmlFor="howManyFlight">
              Combien de vols avez-vous effectués ?
            </label>
<<<<<<< HEAD
          </div>
          <input
            type="number"
            name="howManyFlight"
            id="howManyFlight"
            min="1"
            onChange={() => setShowAirportSelectors(true)}
          />
        </div>
      )}
      {showAirportSelectors && (
        <div>
          <div className="question">
            <label htmlFor="departures">
              Renseignez votre aéroport de départ :
            </label>
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
          <div className="question">
            <label htmlFor="arrivals">
              Renseignez votre aéroport d'arrivé :
            </label>
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
=======
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
>>>>>>> 29bb7391b6649f4a50333697df968dcb3cf21215
        </div>
      )}
    </div>
  );
}

export default QuizzFlight;
