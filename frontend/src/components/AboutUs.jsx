import "../AboutUsStyle.scss";

function AboutUs() {
  return (
    <div className="Container_AboutUs">
      <h2 className="Title_AboutUs">A Propos...</h2>
      <p className="Description_AboutUs">
        Fredd, Claire, Cassioppé, Matthieu et Adam ont créé un site pour
        calculer l'empreinte carbone des citoyens dans le but de sensibiliser et
        d'encourager la réduction des émissions de carbone, contribuant ainsi à
        la lutte contre le changement climatique. Leur site fournit un outil
        convivial pour évaluer l'impact environnemental individuel et offre des
        conseils pour adopter un mode de vie plus durable, visant ainsi à
        favoriser une société plus respectueuse de l'environnement.
      </p>
      <img
        className="Image_AboutUs"
        src="https://placehold.co/200x100.png"
        alt="Equipe des créateurs du site"
      />
    </div>
  );
}
export default AboutUs;
