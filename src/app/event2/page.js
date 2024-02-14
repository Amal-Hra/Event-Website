import React from "react";
import TemplatePage from "@/components/templatePage/TemplatePage";

const styles = {
  container: {
    marginBottom: "400px",
  },
};

const Event2 = () => {
  // Données spécifiques à votre nouvel événement
  const title = "Exposition d'Art Contemporain";
  const description =
    "Explorez une exposition d'art contemporain fascinante qui présente des œuvres uniques de divers artistes émergents et établis. Plongez dans un voyage artistique où chaque pièce raconte une histoire captivante.";
  const src = "/artcontemporain2.jpeg";
  const artistes = ["Bansky", "Yoko Ono", "Jeff Koons"];
  const lieuDate =
    "Date : 20 mai 2024, Heure : 16h00, Lieu : Musée d'Art Moderne";
  const tarif = "Tarif : 10€ (adultes), Gratuit (enfants de moins de 12 ans)";
  const aPropos =
    "L'exposition d'art contemporain présente une variété de médias, y compris la peinture, la sculpture, la photographie et l'installation. Venez découvrir l'expression artistique moderne à son meilleur.";
  const galerie = "/artcontemporain1.jpeg";
  const boutonReservation = "Réservez maintenant";

  return (
    <div style={styles.container}>
      <TemplatePage
        title={title}
        description={description}
        src={src}
        artistes={artistes}
        lieuDate={lieuDate}
        tarif={tarif}
        aPropos={aPropos}
        galerie={galerie}
        boutonReservation={boutonReservation}
      />
    </div>
  );
};

export default Event2;
