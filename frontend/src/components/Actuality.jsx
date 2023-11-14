import React from "react";
import "../styles/Actuality.scss";

const Events = [
  {
    title: "A DARWIN TOUS LES MERCREDIS",
    image: "src/assets/actuality-img/img-darwin.jpg",
    link: "https://darwin.camp/?doing_wp_cron=1697918702.9610590934753417968750",
  },
  {
    title: "LES APEROS ECOLOS SUR BORDEAUX",
    image: "src/assets/actuality-img/img-apero.png",
    link: "https://www.facebook.com/aperos.ecolos.Bordeaux",
  },
  {
    title: "SUIVEZ L'ASSO PROJECT RESCUE OCEAN",
    image: "src/assets/actuality-img/img-rescue.jpg",
    link: "https://projectrescueocean.org/",
  },
];

function Actuality() {
  return (
    <div className="container_actu">
      <h2 className="title-actu">ACTUALITÉS</h2>
      <div className="actu-container">
        {Events.map((event) => {
          return (
            <div className="event" key={event.title}>
              <a href={event.link} target="_blank" rel="noreferrer">
                <img className="img" src={event.image} alt={event.title} />
              </a>
              <h4 className="text-actu">{event.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Actuality;
