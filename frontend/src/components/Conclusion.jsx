import React from "react";
import "../styles/Result.scss";

const allResults = [
  {
    id: 1,
    title: "Bravo, vous êtes un Green Warrior!!",
    image: "./src/assets/jauge5.png",
    conclusion:
      "Bravo, vous êtes en dessous de la moyenne nationale !!! Vous avez totalement pris conscience du changement climatique et votre comportement s’en ressent. Vous faites des efforts au quotidien, et votre impact environnemental est très responsable ! Toutes nos félicitations !!",
    axes: "Avez-vous pensez à  ",
  },
  {
    id: 2,
    title: "Vous êtes un Green bof",
    image: "./src/assets/jauge3.png",
    conclusion:
      "Bravo, vous êtes dans la moyenne des français ! Vous avez quelques bons réflexes, et commencez à réaliser que nos comportements, même les plus petits, ont un impact réel sur notre environnement. Félicitations, vous êtes sur le bon chemin ! ",
    axes: "",
  },
  {
    id: 3,
    title: "Pas très Green tout ça!",
    image: "./src/assets/jauge1.png",
    conclusion:
      "Bon, vous n’êtes pas sur le podium des champions de l’empreinte carbone mais vous avez la chance d’avoir une marge de progression intéressante. En effet, vous êtes au dessus de la moyenne nationale mais pleins de petits gestes peuvent vous permettre d’améliorer votre impact environnemental.",
    axes: "",
  },
];

function Conclusion() {
  const result = 80;
  let selectedOption = null;

  if (result >= 60) {
    selectedOption = allResults[0];
  } else if (result >= 30) {
    selectedOption = allResults[1];
  } else {
    selectedOption = allResults[2];
  }

  return (
    <div className="conclu-container">
      <div>
        <img
          src={selectedOption.image}
          alt={selectedOption.title}
          className="img_level"
        />
        <h3>{selectedOption.title}</h3>
        <p className="conclusion">{selectedOption.conclusion}</p>
        <p>{selectedOption.axes}</p>
      </div>
    </div>
  );
}
export default Conclusion;
