import { useApi } from "../context/RequestApi";

function Estimate() {
  const { estimate, responses } = useApi();
  return Object.keys(estimate).length > 0 ? (
    <div>
      <p>
        {" "}
        Résultat estimé :
        {estimate.elec.carbon_kg * 3.66 + estimate.flight.carbon_kg * 3.66} kg
        de CO2
      </p>
    </div>
  ) : (
    <div>
      <p>En attente d'estimation...</p>
    </div>
  );
}

export default Estimate;
