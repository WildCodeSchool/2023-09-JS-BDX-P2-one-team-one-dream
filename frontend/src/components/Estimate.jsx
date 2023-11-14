import PropTypes from "prop-types";
import { useApi } from "../context/RequestApi";
import "../styles/Estimate.scss";

function Estimate({ allResults }) {
  const { responses, estimate } = useApi();
  const [option1, option2, option3] = allResults;
  let selectedOption = {};

  const FinalResult = parseInt(
    +estimate.elec.carbon_kg * 3.66 +
      +estimate.flight.carbon_kg * 3.66 +
      +responses.carResponse * 0.22 +
      +responses.waterResponse * 0.00013 +
      +responses.foodResponse * 4 * 12.5,
    10
  );

  if (FinalResult <= 550) {
    selectedOption = option1;
  } else if (FinalResult <= 751) {
    selectedOption = option2;
  } else {
    selectedOption = option3;
  }

  return (
    <div className="result">
      <div className="final_result">
        <img
          className="img_level"
          src={selectedOption.image}
          alt="green gauge"
        />
        <div className="bravo">
          <p> Résultat estimé : {FinalResult} kg de CO2</p>
          <br />
          <h3>{selectedOption.title}</h3>

          <p>
            Vous avez gagné <span>{selectedOption.greenpoint}</span> Green
            Points
          </p>
        </div>
      </div>
      <p className="conclusion">{selectedOption.conclusion}</p>
      <h4>Avez-vous pensé à :</h4>
      <ul className="axes">
        {selectedOption.axes.map((axis, index) => (
          <li key={`axis-${index + 1}`}>{axis}</li>
        ))}
      </ul>
    </div>
  );
}

Estimate.propTypes = {
  allResults: PropTypes.func.isRequired,
};

export default Estimate;
