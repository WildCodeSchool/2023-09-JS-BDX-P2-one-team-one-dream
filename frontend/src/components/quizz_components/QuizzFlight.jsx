import { useEffect, useState } from "react";
import { useApi } from "../../context/RequestApi";


function QuizzFlight({ setCurrentQuestion }) {
  const { setResponses } = useApi();
  const [showFlightQuestions, setShowFlightQuestions] = useState(false);
  const [showAirportSelectors, setShowAirportSelectors] = useState(false);
  const [numberOfFlights, setNumberOfFlights] = useState(0);
  const [selectOption1, setSelectOption1] = useState("");
  const [selectOption2, setSelectOption2] = useState("");

  useEffect(() => {
    const newFlightResponses = { selectOption1, selectOption2 };
    setResponses((responses) => ({
      ...responses, ...newFlightResponses
    }))
  }, [selectOption1, selectOption2]
  )


  const handleNumberOfFlightsChange = (e) => {
    const numFlights = parseInt(e.target.value, 10);
    setNumberOfFlights(numFlights);
    setShowAirportSelectors(true);
  };

  return (
    <div>
      <div>
        <label htmlFor="didYouTakeFlight">
          Avez-vous pris l'avion ce mois-ci ?
        </label>
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
              <select name={`departures-${index}`} id={`departures-${index}`} onChange={(e) => setSelectOption1(e.target.value)}>
                <option value="mad">Madrid</option>
                <option value="cdg">Paris</option>
                <option value="lcy">Londres</option>
                <option value="bod">Bordeaux</option>
                <option value="jfk">New-York</option>
                <option value="yul">Montreal</option>
                <option value="sin">Singapour</option>
              </select>
              <label htmlFor={`arrivals-${index}`}>
                Renseignez votre aéroport d'arrivée pour le vol {index + 1} :
              </label>
              <select name={`arrivals-${index}`} id={`arrivals-${index}`} onChange={(e) => setSelectOption2(e.target.value)}>
                <option value="mad">Madrid</option>
                <option value="cdg">Paris</option>
                <option value="lcy">Londres</option>
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
