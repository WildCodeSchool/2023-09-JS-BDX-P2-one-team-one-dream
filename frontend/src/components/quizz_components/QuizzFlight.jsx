import { useState } from "react";
import PropTypes from "prop-types";
import FlightSelect from "./FlightSelect";

function QuizzFlight({ setCurrentQuestion }) {
  const [showFlightQuestions, setShowFlightQuestions] = useState(false);
  const [showAirportSelectors, setShowAirportSelectors] = useState(false);
  const [numberOfFlights, setNumberOfFlights] = useState(0);

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
            <FlightSelect key={`id-${index + 1}`} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}

QuizzFlight.propTypes = {
  setCurrentQuestion: PropTypes.func.isRequired,
};

export default QuizzFlight;
