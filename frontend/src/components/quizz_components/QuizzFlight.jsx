import { useState } from "react";
import PropTypes from "prop-types";
import FlightSelect from "./FlightSelect";

function QuizzFlight({ setCurrentQuestion }) {
  const [showFlightQuestions, setShowFlightQuestions] = useState(false);
  const [showAirportSelectors, setShowAirportSelectors] = useState(false);
  const [numberOfFlights, setNumberOfFlights] = useState(0);

  const handleNumberOfFlightsChange = (e) => {
    const numFlights = parseInt(e.target.value, 10);
    const limitedNumberOfFlights = Math.min(numFlights, 2);
    setNumberOfFlights(limitedNumberOfFlights);
    setShowAirportSelectors(true);
  };

  const handleNumberOfFlightsInput = (e) => {
    const inputValue = e.target.value;
    if (parseInt(inputValue, 10) > 2) {
      e.preventDefault();
      e.target.value = "2";
    }
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
            className="flight_button"
          >
            Oui
          </button>
          <button
            type="button"
            name="didYouTakeFlight"
            id="didYouTakeFlight"
            onClick={() => setCurrentQuestion(2)}
            className="flight_button"
          >
            Non
          </button>
        </div>
      </div>
      {showFlightQuestions && (
        <div className="flightquestionscontent">
          <label htmlFor="howManyFlight">
            Combien de vols avez-vous effectués ?
          </label>
          <input
            className="flight_input"
            type="number"
            name="howManyFlight"
            id="howManyFlight"
            min="1"
            max="2"
            onChange={handleNumberOfFlightsChange}
            onInput={handleNumberOfFlightsInput}
          />
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
