import { createContext, useContext, useState, React, useMemo } from "react";
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
    const newEstimate = { elec: null, flight: null };
    if (electricityValue && electricityValue.length > 0) {
      try {
        const electricityResponse = await fetch(
          "https://www.carboninterface.com/api/v1/estimates",
          {
            method: "POST",
            headers: {
              Authorization: "Bearer PWvZf3Gf1KeAheUNolalw",
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
    if (responses.flightResponses && responses.flightResponses.length > 0) {
      try {
        const flightResponse = await fetch(
          "https://www.carboninterface.com/api/v1/estimates",
          {
            method: "POST",
            headers: {
              Authorization: "Bearer PWvZf3Gf1KeAheUNolalw",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              type: "flight",
              passengers: 1,
              legs: responses.flightResponses,
            }),
          }
        );
        const flightData = await flightResponse.json();
        newEstimate.flight = flightData.data.attributes;
        setEstimate({ ...newEstimate });
      } catch (error) {
        console.error("Error fetching flight estimate:", error);
      }
    }

    navigate("/result");
  };

  const addFlight = (index, selectFlightData) => {
    if (!responses.flightResponses) {
      responses.flightResponses = [];
    }

    responses.flightResponses[index] = selectFlightData;
    setResponses(responses);
  };
  const contextValues = useMemo(
    () => ({ setResponses, handleSubmit, estimate, addFlight, responses }),
    [setResponses, handleSubmit, estimate, addFlight, responses]
  );
  return (
    <RequestApi.Provider value={contextValues}>{children}</RequestApi.Provider>
  );
}
RequestApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useApi = () => useContext(RequestApi);
