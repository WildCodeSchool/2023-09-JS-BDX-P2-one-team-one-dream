import Estimate from "../components/Estimate";
import Points from "../components/Points";
import jauge5 from "../assets/jauge5.png";
import jauge3 from "../assets/jauge3.png";
import jauge1 from "../assets/jauge1.png";
import "../styles/Estimate.scss";

const allResults = [
  {
    id: 1,
    greenpoint: 300,
    title: "Bravo, vous êtes un Green Warrior!!",
    image: { jauge5 },
    conclusion:
      "Vous êtes un warrior GreenPoint ! Bravo, vous êtes en dessous de la moyenne nationale!!! Vous avez totalement pris conscience du changement climatique et votre comportement s’en ressent. Vous faites des efforts au quotidien, et votre impact environnemental est très responsable! Toutes nos félicitations!!",
    axes: [
      "Attendre que le lave-vaisselle et le lave-linge soient remplis pour lancer la machine.",
      "Arrêter de multiplier les sources d’éclairage, même si « c’est joli les ambiances tamisées »",
      "Réduire votre consommation de chauffage, lancez-vous un défi : réduisez votre chauffage de 1°! Votre porte-monnaie vous remerciera, cela réduira votre facture de 7% !",
      "Installation d’un brise-jet réduisant le volume d’eau",
      "Poser un récupérateur d’eau de pluie pour arroser les plantes du jardin",
      "Baisser la température de votre chauffe-eau, souvent surestimée, 55°C suffisent",
      "Privilégiez l’achat d’électroménager avec une étiquette énergie attestant une consommation raisonnable. La catégorie A, de couleur verte, est la meilleure!",
      "Acheter responsable et localement",
      "Planter des arbres et des plantes",
      "Privilégier les produits biologiques",
      "Eviter les emballages plastique et les produits jetables, achetez par exemple dans des épiceries qui vous permettent des ramener vos contenants. Ex: «La Recharge» à Bordeaux",
    ],
  },
  {
    id: 2,
    greenpoint: 150,
    title: "Vous êtes un Green bof",
    image: { jauge3 },
    conclusion: `Vous êtes un bon GreenPoint !
      Bravo, vous êtes dans la moyenne des français ! Vous avez quelques bons réflexes, et commencez à réaliser que nos comportements, même les plus petits, ont un impact réel sur notre environnement. Félicitations, vous êtes sur le bon chemin !`,
    axes: [
      "Eviter les emballages plastique et les produits jetables, achetez par exemple dans des épiceries qui vous permettent des ramener vos contenants. Ex: «La Recharge» à Bordeaux",
      "Privilégier les produits biologiques",
      "Composter ses déchets et recycler",
      "Limiter l’utilisation de la voiture",
      "Manger moins de viande",
      "Favoriser les douches plus courtes aux bains",
      "Favoriser des machines à 30°",
      "Baisser la température de votre chauffe-eau, souvent surestimée, 55°C suffisent",
      "Privilégiez l’achat d’électroménager avec une étiquette énergie attestant une consommation raisonnable. La catégorie A, de couleur verte, est la meilleure !",
      "Préférer un bon vieux ventilo à la clim l’été",
      "Débrancher chaque appareil électronique lorsqu’il n’est pas utilisé. N’hésitez pas à vous entourer de multiprises à interrupteur, en un clic, le tour est joué.",
      "Arrêter de multiplier les sources d’éclairage, même si «c’est joli les ambiances tamisées»",
    ],
  },
  {
    id: 3,
    greenpoint: 50,
    title: "Pas très Green tout ça!",
    image: { jauge1 },
    conclusion: `Vous allez enfin pouvoir faire des progrès !
    Franchement ce n’est pas très Green ! Bon, vous n’êtes pas sur le podium des champions de l’empreinte carbone mais vous avez la chance d’avoir une marge de progression intéressante. En effet, vous êtes au dessus de la moyenne nationale mais pleins de petits gestes peuvent vous permettre d’améliorer votre impact environnemental.`,
    axes: [
      "Arrêter de multiplier les sources d’éclairage, même si «c’est joli les ambiances tamisées»",
      "Débrancher chaque appareil électronique lorsqu’il n’est pas utilisé. N’hésitez pas à vous entourer de multiprises à interrupteur, en un clic, le tour est joué.",
      "Pour les petits budgets, vous pouvez calfeutrer les portes et les fenêtres, histoire de bannir les courants d’air.",
      "Fermer les volets la nuit ou installer des rideaux isolants.",
      "Réduire votre consommation de chauffage, lancez-vous un défi : réduisez votre chauffage de 1° ! Votre porte-monnaie vous remerciera, cela réduira votre facture de 7% !!",
      "Favoriser des machines à 30°",
      "Favoriser les douches plus courtes aux bains",
      "Préférer un bon vieux ventilo à la clim l’été",
      "Utiliser les transports en commun",
      "Composter ses déchets et recycler",
      "Limiter l’utilisation de la voiture",
      "Limiter le transport aérien",
    ],
  },
];

export default function Result() {
  return (
    <>
      <Estimate allResults={allResults} />
      <Points />
    </>
  );
}
