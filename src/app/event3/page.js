import React from "react";
<<<<<<< HEAD
import styles from "../event3/event3.module.css";

const Event3 = () => {
  const title = "Exposition de Sculptures";
  const description =
    "Plongez dans le monde fascinant de la sculpture lors de notre exposition annuelle. Découvrez des œuvres sculpturales uniques et innovantes créées par des artistes talentueux du monde entier.";
  const src = "/sculpture5.jpeg";
  const artistes = ["Auguste Rodin", "Louise Bourgeois", "Anish Kapoor"];
  const lieuDate =
    "Date : 5 juillet 2024 - 15 juillet 2024, Lieu : Musée des Beaux-Arts,";
=======
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
>>>>>>> 8bf1680e9d5a086f88058c74698ef858d3469f2a
  const tarif = "Tarif : Entrée gratuite";
  const aPropos =
    "L'exposition de sculptures met en valeur la diversité des styles et des techniques utilisées dans le domaine de la sculpture, offrant aux visiteurs une expérience artistique immersive.";
  const galerie = "/sculpture1.jpeg";
  const boutonReservation = "Réservez maintenant";
<<<<<<< HEAD
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <img src={src} alt="Event" className={styles.image} />
        <p className={styles.description}>{description} </p>
        <h3 className={styles.artistTitle}>Artistes:</h3>
        <ul className={styles.artistList}>
          {artistes.map((artiste, index) => (
            <li key={index}>{artiste}</li>
          ))}
        </ul>
        <p className={styles.eventDetails}>{lieuDate}</p>
        <p className={styles.eventDetails}>{tarif}</p>
        <p className={styles.aboutDescription}>{aPropos}</p>
        <img src={galerie} alt="Gallery" className={styles.gallery} />
        <button className={styles.reservationButton}>
          {boutonReservation}
        </button>
      </div>
=======

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
>>>>>>> 8bf1680e9d5a086f88058c74698ef858d3469f2a
    </div>
  );
};

export default Event3;
