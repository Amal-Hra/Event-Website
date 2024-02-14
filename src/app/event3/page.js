import React from "react";
import TemplatePage from "@/components/templatePage/TemplatePage";

const styles = {
  container: {
    marginBottom: "350px",
  },
};

const Event3 = () => {
  // Données spécifiques à votre nouvel événement
  const title = "Exposition de Sculptures";
  const description =
    "Plongez dans le monde fascinant de la sculpture lors de notre exposition annuelle. Découvrez des œuvres sculpturales uniques et innovantes créées par des artistes talentueux du monde entier.";
  const src = "/sculpture2.jpeg";
  const artistes = ["Auguste Rodin", "Louise Bourgeois", "Anish Kapoor"];
  const lieuDate =
    "Date : 5 juillet 2024 - 15 juillet 2024, Lieu : Musée des Beaux-Arts";
  const tarif = "Tarif : Entrée gratuite";
  const aPropos =
    "L'exposition de sculptures met en valeur la diversité des styles et des techniques utilisées dans le domaine de la sculpture, offrant aux visiteurs une expérience artistique immersive.";
  const galerie = "/sculpture1.jpeg";
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

export default Event3;
