import React from "react";
import styles from "../event3/event3.module.css";

const Event3 = () => {
  const title = "Exposition de Sculptures";
  const description =
    "Plongez dans le monde fascinant de la sculpture lors de notre exposition annuelle. Découvrez des œuvres sculpturales uniques et innovantes créées par des artistes talentueux du monde entier.";
  const src = "/sculpture5.jpeg";
  const artistes = ["Auguste Rodin", "Louise Bourgeois", "Anish Kapoor"];
  const lieuDate =
    "Date : 5 juillet 2024 - 15 juillet 2024, Lieu : Musée des Beaux-Arts,";
  const tarif = "Tarif : Entrée gratuite";
  const aPropos =
    "L'exposition de sculptures met en valeur la diversité des styles et des techniques utilisées dans le domaine de la sculpture, offrant aux visiteurs une expérience artistique immersive.";
  const galerie = "/sculpture1.jpeg";
  const boutonReservation = "Réservez maintenant";
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
    </div>
  );
};

export default Event3;
