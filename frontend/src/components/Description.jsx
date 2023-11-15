import "../styles/Description.scss";

function Description() {
  return (
    <div>
      <h3 className="title_description">
        Bienvenue sur notre site GreenPoint <br /> Votre guide pour une planète
        plus verte
      </h3>
      <p className="bio">
        Cette plateforme, conviviale et intuitive, est conçue pour vous aider à
        calculer votre empreinte carbone. Cela vous encouragera à adopter des
        comportements plus durables et respectueux de l'environnement. <br />{" "}
        <br />
        Notre mission est de vous éveiller à votre impact quotidien sur la
        planète et de vous inspirer pour prendre des mesures concrètes afin de
        réduire votre empreinte carbone. <br /> <br />
        Notre empreinte carbone, oui, tout le monde en parle, mais qu'est ce que
        c'est ? <br /> <br />
        L'empreinte carbone est la mesure des émissions totales de gaz à effet
        de serre liées à une personne, une organisation ou une activité. <br />
        Greenpoint vous invite à répondre à notre questionnaire afin de vous
        lancer dans votre démarche environnementale dès maintenant!
      </p>
    </div>
  );
}

export default Description;
