import "../styles/Points.scss";

function Points() {
  return (
    <div className="container Container_Points">
      <h2 className="Title_Points">Et mes GREENPoints, j'en fais quoi?</h2>
      <div className="Points_Cards">
        <div className="Cards">
          <img
            className="image_Cards"
            src="./src/assets/LogoTBM.png"
            alt="Promo 1"
          />
          <div className="Title_Cards">
            <h3>Pour 300 Points</h3>
            <h5>-20% sur votre pass Mensuel</h5>
          </div>
        </div>
        <div className="Cards">
          <img
            className="image_Cards"
            src="https://placehold.co/200x100.png"
            alt="Promo 2"
          />
          <div className="Title_Cards">
            <h3>Pour 70 Points</h3>
            <h5>-15% sur une consommation au Darwin</h5>
          </div>
        </div>
        <div className="Cards">
          <a href="https://www.ouigo.com/">
            <img
              className="image_Cards"
              src="https://placehold.co/200x100.png"
              alt="Promo 3"
            />
          </a>
          <div className="Title_Cards">
            <h3>Pour 230 Points</h3>
            <h5>-20% sur quelque chose</h5>
          </div>
        </div>
        <div className="Cards">
          <a href="https://www.blablacar.fr/">
            <img
              className="image_Cards"
              src="https://placehold.co/200x100.png"
              alt="Promo 4"
            />
          </a>
          <div className="Title_Cards">
            <h3>Pour 100 Points</h3>
            <h5>encore une reduction pour OUIGO</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Points;
