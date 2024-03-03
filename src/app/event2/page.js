import React from "react";
<<<<<<< HEAD
import Styles from "./event2.module.css";

const Event2 = () => {
=======
import TemplatePage from "@/components/templatePage/TemplatePage";

const styles = {
  container: {
    marginBottom: "400px",
  },
};

const Event2 = () => {
  // Données spécifiques à votre nouvel événement
>>>>>>> 8bf1680e9d5a086f88058c74698ef858d3469f2a
  const title = "Exposition d'Art Contemporain";
  const description =
    "Explorez une exposition d'art contemporain fascinante qui présente des œuvres uniques de divers artistes émergents et établis. Plongez dans un voyage artistique où chaque pièce raconte une histoire captivante.";
  const src = "/artcontemporain2.jpeg";
  const artistes = ["Bansky", "Yoko Ono", "Jeff Koons"];
  const lieuDate =
<<<<<<< HEAD
    "Date : 20 mai 2024, Heure : 16h00, Lieu : Musée d'Art Moderne,";
  const tarif = "Tarif : 10$ (adultes), Gratuit (enfants de moins de 12 ans)";
=======
    "Date : 20 mai 2024, Heure : 16h00, Lieu : Musée d'Art Moderne";
  const tarif = "Tarif : 10€ (adultes), Gratuit (enfants de moins de 12 ans)";
>>>>>>> 8bf1680e9d5a086f88058c74698ef858d3469f2a
  const aPropos =
    "L'exposition d'art contemporain présente une variété de médias, y compris la peinture, la sculpture, la photographie et l'installation. Venez découvrir l'expression artistique moderne à son meilleur.";
  const galerie = "/artcontemporain1.jpeg";
  const boutonReservation = "Réservez maintenant";

  return (
<<<<<<< HEAD
    <div className={Styles.container}>
      <div className={Styles.content}>
        <h1 className={Styles.title}>{title}</h1>
        <img src={src} alt="Event" className={Styles.image} />
        <p className={Styles.description}>{description} </p>
        <h3 className={Styles.artistTitle}>Artistes:</h3>
        <ul className={Styles.artistList}>
          {artistes.map((artiste, index) => (
            <li key={index}>{artiste}</li>
          ))}
        </ul>
        <p className={Styles.eventDetails}>{lieuDate}</p>
        <p className={Styles.eventDetails}>{tarif}</p>
        <p className={Styles.aboutDescription}>{aPropos}</p>
        <img src={galerie} alt="Gallery" className={Styles.gallery} />
        <button className={Styles.reservationButton}>
          {boutonReservation}
        </button>
      </div>
=======
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
>>>>>>> 8bf1680e9d5a086f88058c74698ef858d3469f2a
    </div>
  );
};

export default Event2;
