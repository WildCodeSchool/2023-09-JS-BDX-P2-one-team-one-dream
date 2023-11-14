import React from "react";
import "../styles/Result.scss";

const allResults = [
  {
    id: 1,
    title: "Bravo, vous êtes un Green Warrior!!",
    image: "./src/assets/jauge5.png",
    conclusion:
      "Vous êtes un warrior GreenPoint ! Bravo, vous êtes en dessous de la moyenne nationale!!! Vous avez totalement pris conscience du changement climatique et votre comportement s’en ressent.Vous faites des efforts au quotidien, et votre impact environnemental est très responsable! Toutes nos félicitations!!",
    axes: `Avez -vous pensé à : _SPACE_\n
    -Attendre que le lave- vaisselle et le lave - linge soient remplis pour lacer la machine. \n\n
    -Arrêter de multiplier les sources d’éclairage, même si « c’est joli les ambiances tamisées »\n
    -Mieux placer les appareils froids chez soi pour éviter qu’ils se retrouvent à coté d’une source de chaleur, ce qui les incite à surconsommer.\n
    -Revoir votre isolation surtout si vous avez un logement ancien.Oui, cela a un coût mais réconfortez vous en vous rappelant que c’est un investissement sur le long terme.\n
    -Réduire votre consommation de chauffage, lancez - vous un défi : réduisez votre chauffage de 1° !\n
    Votre porte - monnaie vous remerciera, cela réduira votre facture de 7 % !! \n
    -Prenez des douches plus courtes \n
    -Favoriser des machines à 30° \n
    -Installation d’un brise - jet réduisant le volume d’eau _SPACE_\n
  `,
  },
  {
    id: 2,
    title: "Vous êtes un Green bof",
    image: "./src/assets/jauge3.png",
    conclusion: `Vous êtes un bon GreenPoint !
      Bravo, vous êtes dans la moyenne des français ! Vous avez quelques bons réflexes, et commencez à réaliser que nos comportements, même les plus petits, ont un impact réel sur notre environnement. Félicitations, vous êtes sur le bon chemin !`,
    axes: `Eviter les emballages plastique et les produits jetables, achetez par exemple dans des épiceries qui vous permettent des ramener vos contenants. Ex : « La Recharge » à Bordeaux
    Planter des arbres et des plantes
    Privilégier les produits biologiques
    Composter ses déchets et recycler
    Limiter l’utilisation de la voiture
    Acheter responsable et localement
    Manger moins de viande
    Prenez des douches plus courtes
    Favoriser les bains aux douches
    Favoriser des machines à 30°
    Installation d’un brise-jet réduisant le volume d’eau
    Poser un récupérateur d’eau de pluie pour arroser les plantes du jardin
    Baisser la température de votre chauffe-eau, souvent surestimée, 55°C suffisent
    Privilégiez l’achat d’électroménager avec une étiquette énergie attestant une consommation raisonnable. La catégorie A, de couleur verte, est la meilleure !
    Installer des panneaux solaires
    Préférer un bon vieux ventilo à la clim l’été
    Fermer les volets la nuit ou installer des rideaux isolants.
    Réduire votre consommation de chauffage, lancez-vous un défi : réduisez votre chauffage de 1° ! Votre porte-monnaie vous remerciera, cela réduira votre facture de 7% !!
    Débrancher chaque appareil électronique lorsqu’il n’est pas utilisé. N’hésitez pas à vous entourer de multiprises à interrupteur, en un clic, le tour est joué.
    Revoir votre isolation surtout si vous avez un logement ancien. Oui, cela a un coût mais réconfortez-vous en vous rappelant que c’est un investissement sur le long terme.
    Attendre que le lave-vaisselle et le lave-linge soient remplis pour lacer la machine.
    Arrêter de multiplier les sources d’éclairage, même si « c’est joli les ambiances tamisées »`,
  },
  {
    id: 3,
    title: "Pas très Green tout ça!",
    image: "./src/assets/jauge1.png",
    conclusion: `Vous allez enfin pouvoir faire des progrès !
    Franchement ce n’est pas très Green ! Bon, vous n’êtes pas sur le podium des champions de l’empreinte carbone mais vous avez la chance d’avoir une marge de progression intéressante. En effet, vous êtes au dessus de la moyenne nationale mais pleins de petits gestes peuvent vous permettre d’améliorer votre impact environnemental.`,
    axes: `Arrêter de multiplier les sources d’éclairage, même si « c’est joli les ambiances tamisées »
    Débrancher chaque appareil électronique lorsqu’il n’est pas utilisé. N’hésitez pas à vous entourer de multiprises à interrupteur, en un clic, le tour est joué.
    Pour les petits budgets, vous pouvez calfeutrer les portes et les fenêtres, histoire de bannir les courants d’air.
    Fermer les volets la nuit ou installer des rideaux isolants.
    Réduire votre consommation de chauffage, lancez-vous un défi : réduisez votre chauffage de 1° ! Votre porte-monnaie vous remerciera, cela réduira votre facture de 7% !!
    Prenez des douches plus courtes
    Favoriser les bains aux douches
    Favoriser des machines à 30°
    Installation d’un brise-jet réduisant le volume d’eau
    Préférer un bon vieux ventilo à la clim l’été
    Utiliser les transports en commun
    Composter ses déchets et recycler
    Limiter l’utilisation de la voiture
    Limiter le transport aérien`,
  },
];

function Conclusion() {
  const result = 400;
  let selectedOption = null;

  if (result <= 551) {
    selectedOption = allResults[0];
  } else if (result <= 751) {
    selectedOption = allResults[1];
  } else {
    selectedOption = allResults[2];
  }

  function formatParagraphs(text) {
    const paragraphs = text.split('\n\n');
    const result = [];
  
    paragraphs.forEach((paragraph, index) => {
      // Ajoutez un espace entre les paragraphes si le texte contient le string spécial
      if (paragraph.includes('_SPACE_')) {
        result.push(<p key={index}>{paragraph.replace('_SPACE_', '')}</p>);
        result.push(<br key={`${index}-br`} />);
      } else {
        result.push(<p key={index}>{paragraph}</p>);
      }
    });
  
    return result;
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
        <p className="conclusion">{formatParagraphs(selectedOption.conclusion)}</p>
        <div className="axes">{formatParagraphs(selectedOption.axes)}</div>
      </div>
    </div>
  );
}
export default Conclusion;
