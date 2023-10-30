import React from "react";

const allResults = [
  {
    id: 1,
    title: "Bravo, vous êtes un Green Warrior!!",
    image: "",
    conclusion:
      "Bravo, vous êtes en dessous de la moyenne nationale !!! Vous avez totalement pris conscience du changement climatique et votre comportement s’en ressent. Vous faites des efforts au quotidien, et votre impact environnemental est très responsable ! Toutes nos félicitations !!",
    axes: "Avez-vous pensez à  ",
  },
  {
    id: 2,
    title: "Vous êtes un Green bof",
    image: "",
    conclusion:
      "Bravo, vous êtes dans la moyenne des français ! Vous avez quelques bons réflexes, et commencez à réaliser que nos comportements, même les plus petits, ont un impact réel sur notre environnement. Félicitations, vous êtes sur le bon chemin ! ",
    axes: "",
  },
  {
    id: 3,
    title: "Pas très Green tout ça!",
    image: "",
    conclusion:
      "Bon, vous n’êtes pas sur le podium des champions de l’empreinte carbone mais vous avez la chance d’avoir une marge de progression intéressante. En effet, vous êtes au dessus de la moyenne nationale mais pleins de petits gestes peuvent vous permettre d’améliorer votre impact environnemental.",
    axes: "",
  },
];
function Conclusion() {
  return (
    <div className="conclu-container">
      {allResults.map((result) => {
        return (
          <div>
            <h3>{result.title}</h3>
            <img src={result.image} alt={result.title} />
            <h3>{result.conclusion}</h3>
            <li>{result.axes}</li>
          </div>
        );
      })}
    </div>
  );
}

export default Conclusion;
