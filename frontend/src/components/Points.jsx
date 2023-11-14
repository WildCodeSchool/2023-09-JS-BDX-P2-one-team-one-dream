import "../styles/Points.scss";

function Points() {
  return (
    <div className="container Container_Points">
      <h2 className="Title_Points">Et mes GREENPoints, j'en fais quoi?</h2>
      <div className="Points_Cards">
        <div className="Cards">
          <a
            href="https://www.infotbm.com/fr/tarificationsolidaire"
            target="_blank"
            rel="noreferrer"
          >
            <div className="container_img">
              <img
                className="image_Cards"
                src="./src/assets/LogoTBM.png"
                alt="Promo 1"
              />
            </div>
          </a>
          <div className="Title_Cards">
            <h3>Pour 300 Points</h3>
            <h5>-20% sur votre pass Mensuel</h5>
          </div>
        </div>
        <div className="Cards">
          <a
            href="https://www.visiter-bordeaux.com/fr/bordeaux-citypass.html"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="image_Cards"
              src="./src/assets/citypass.jpeg"
              alt="Promo 2"
            />
          </a>
          <div className="Title_Cards">
            <h3>Pour 100 Points</h3>
            <h5>-15% sur votre CityPass 24h</h5>
          </div>
        </div>
        <div className="Cards">
          <a href="https://www.ouigo.com/" target="_blank" rel="noreferrer">
            <div className="container_img">
              <img
                className="image_Cards"
                src="./src/assets/blabla.jpeg"
                alt="Promo 3"
              />
            </div>
          </a>
          <div className="Title_Cards">
            <h3>Pour 230 Points</h3>
            <h5>-10 euros sur votre prochain trajet BlablaCar</h5>
          </div>
        </div>
        <div className="Cards">
          <a
            href="https://www.ouigo.com/bons-plans"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="image_Cards"
              src="./src/assets/ouigo.png"
              alt="Promo 4"
            />
          </a>
          <div className="Title_Cards">
            <h3>Pour 100 Points</h3>
            <h5>
              Un bon de réduction de 8 euros pour un trajet Bordeaux-Paris
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Points;
