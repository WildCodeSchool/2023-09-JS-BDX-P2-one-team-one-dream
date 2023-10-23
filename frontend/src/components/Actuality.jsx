import React from "react";

const Events = [
  {
    title: "A Darwin, tous les mercredis",
    image: "src/assets/img-actus/img-darwin.jpg",
    link: "https://darwin.camp/?doing_wp_cron=1697918702.9610590934753417968750",
  },
  {
    title: "Suivez l'asso Project Rescue Ocean",
    image: "src/assets/img-actus/img-rescue.jpg",
    link: "https://projectrescueocean.org/",
  },
  {
    title: "Les apéros écolos sur Bordeaux",
    image: "src/assets/actuality-img/img-aperos.png",
    link: "https://www.facebook.com/aperos.ecolos.Bordeaux",
  },
];

function Actuality() {
  return (
    <>
      <h1>ACTUALITÉS</h1>
      {Events.map((event) => {
        return (
          <div className="event" key={event.title}>
            <a href={event.link}>
              <img src={event.image} alt={event.title} />
            </a>
            <h4>{event.title}</h4>
          </div>
        );
      })}
    </>
  );
}

export default Actuality;
