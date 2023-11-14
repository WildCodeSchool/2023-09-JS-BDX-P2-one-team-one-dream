import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useApi } from "../../context/RequestApi";

function FlightSelect({ index }) {
  const [departure, setDeparture] = useState(null);
  const [arrival, setArrival] = useState(null);

  const { addFlight } = useApi();

  useEffect(() => {
    if (!arrival || !departure) {
      return;
    }
    addFlight(index, {
      departure_airport: departure,
      destination_airport: arrival,
    });
  }, [arrival, departure]);

  return (
    <div className="flight_select" key={`index - ${index}`}>
      <label className="label_flight" htmlFor={`departures-${index}`}>
        Renseignez votre aéroport de départ pour le vol {index + 1} :
      </label>
      <select
        name={`departures-${index}`}
        id={`departures-${index}`}
        onChange={(e) => setDeparture(e.target.value)}
      >
        <option value="mad">Madrid</option>
        <option value="cdg">Paris</option>
        <option value="lcy">Londres</option>
        <option value="bod">Bordeaux</option>
        <option value="jfk">New-York</option>
        <option value="yul">Montreal</option>
        <option value="sin">Singapour</option>
      </select>
      <label className="label_flight" htmlFor={`arrivals-${index}`}>
        Renseignez votre aéroport d'arrivée pour le vol {index + 1} :
      </label>
      <select
        name={`arrivals-${index}`}
        id={`arrivals-${index}`}
        onChange={(e) => setArrival(e.target.value)}
      >
        <option value="mad">Madrid</option>
        <option value="cdg">Paris</option>
        <option value="lcy">Londres</option>
        <option value="bod">Bordeaux</option>
        <option value="jfk">New-York</option>
        <option value="yul">Montreal</option>
        <option value="sin">Singapour</option>
      </select>
    </div>
  );
}

FlightSelect.propTypes = {
  index: PropTypes.number.isRequired,
};
export default FlightSelect;
