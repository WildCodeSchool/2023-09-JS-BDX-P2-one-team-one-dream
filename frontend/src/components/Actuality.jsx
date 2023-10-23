import React from "react";
import "./Actuality.scss";

const Events = [
  {
    title: "A Darwin, tous les mercredis",
    image: "src/assets/actuality-img/img-darwin.jpg",
    link: "https://darwin.camp/?doing_wp_cron=1697918702.9610590934753417968750",
  },
  {
    title: "Suivez l'asso Project Rescue Ocean",
    image: "src/assets/actuality-img/img-rescue.jpg",
    link: "https://projectrescueocean.org/",
  },
  {
    title: "Les apéros écolos sur Bordeaux",
    image: "src/assets/actuality-img/img-apero.png",
    link: "https://www.facebook.com/aperos.ecolos.Bordeaux",
  },
];

function Actuality() {
  return (
    <div className="container">
      <h1>ACTUALITÉS</h1>
      <div className="actu-container">
        {Events.map((event) => {
          return (
            <div className="event" key={event.title}>
              <a href={event.link}>
                <img className="img" src={event.image} alt={event.title} />
              </a>
              <h4>{event.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Actuality;
