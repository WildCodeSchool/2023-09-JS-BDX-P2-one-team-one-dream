import { createContext, useContext, useState, React } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const RequestApi = createContext();

export function RequestApiProvider({ children }) {
  const [responses, setResponses] = useState({});
  const [estimate, setEstimate] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const electricityValue = responses.electricityResponse;
    const flightDetails = [
      {
        departure_airport: responses.selectOption1,
        destination_airport: responses.selectOption2,
      },
    ];
    const newEstimate = { elec: null, flight: null };
    if (electricityValue) {
      try {
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
              country: "fr",
            }),
          }
        );

        const electricityData = await electricityResponse.json();
        newEstimate.elec = electricityData.data.attributes;
      } catch (error) {
        console.error("Error fetching electricity estimate:", error);
      }
    }
    if (flightDetails) {
      try {
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
              legs: flightDetails,
            }),
          }
        );
        const flightData = await flightResponse.json();
        newEstimate.flight = flightData.data.attributes;
        // on a rajouté un spread operator à newEstimate entre moustache pour dire:
        // remet moi à jour setEstimate en initialisant un nouvel objet en prenant toutes les valeurs de newEstimate
        // ca permet de s'assurer qu'il y a bien une mise à jour fait au niveau de l'affichage du composant qui utilise estimate donc : Estimate.
        setEstimate({ ...newEstimate });
      } catch (error) {
        console.error("Error fetching flight estimate:", error);
      }
    }

    // On avait un window.location.href mais celui là rechargait la page à chaque fois en la remettant à zero donc en resetant toutes les valeurs stockées donc sur la page result obligatoirement on avait plus les données.
    // on a utilisé le Hook UseNaviguate qu'on a importé en haut et qu'on a stocké dans une variable ligne 11
    navigate("/result");
  };

  // dans les valeurs du provider on avait oublié de passer estimate donc on le recuperait pas sur ses enfants
  return (
    <RequestApi.Provider
      value={React.useMemo(
        () => ({ responses, setResponses, handleSubmit, estimate }),
        [responses, setResponses, handleSubmit, estimate]
      )}
    >
      {children}
    </RequestApi.Provider>
  );
}

RequestApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export const useApi = () => useContext(RequestApi);
