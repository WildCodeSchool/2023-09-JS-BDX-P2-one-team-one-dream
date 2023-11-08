import { useApi } from "../context/RequestApi";

function Estimate() {
  const { estimate } = useApi()


  //  dans le return on avait juste mis estimate mais estimate etait un objet vide. 
  //  Object.keys nous permet de recuperer les clés d'un objet qu'on précise entre () donc la: estimate
  //  et on vérifie si sa longueur est plus grand que 0. dans le cas ou il l'est, on affiche le resultat. 
  return Object.keys(estimate).length > 0 ? (
    <div>
      <p> Résultat estimé :
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