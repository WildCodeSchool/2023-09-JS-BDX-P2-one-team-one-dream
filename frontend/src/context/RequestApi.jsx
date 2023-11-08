import { createContext, useContext } from "react";
import { useState } from "react";

const RequestApi = createContext();


export function RequestApiProvider({ children }) {
  const [responses, setResponses] = useState({});
  const [estimate, setEstimate] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const electricityValue = responses.electricityResponse;
    const flightDetails = [
      {
        departure_airport: responses.selectOption1,
        destination_airport: responses.selectOption2,
      },
    ];
    console.log(responses);
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
          })

        const electricityData = await electricityResponse.json();
        console.log('Estimation pour l\'électricité : ', electricityData);
        newEstimate.elec = electricityData.data.attributes;
      } catch (error) {
        console.error('Error fetching electricity estimate:', error);
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

          });
        const flightData = await flightResponse.json();
        console.log(flightData);
        newEstimate.flight = flightData.data.attributes;
        setEstimate(newEstimate);
      } catch (error) {
        console.error('Error fetching flight estimate:', error);
      }
    }
    console.log(newEstimate);

    console.log(estimate);

    // if (estimate) {
    //   window.location.href = "/result";
    // }
  };

  return (
    <RequestApi.Provider value={{ responses, setResponses, handleSubmit }}>
      {children}
    </RequestApi.Provider>
  )

}

export const useApi = () => useContext(RequestApi);
