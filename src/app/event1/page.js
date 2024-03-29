import React from "react";
<<<<<<< HEAD
import Styles from "./event.module.css";

const Event1 = () => {
  const title = "Lumière Éphémère";
  const description =
    "Plongez dans un monde de lumière et d'éphémère avec l'exposition immersive <<Lumière Éphémère>>. Cette expérience artistique unique vous transporte dans un univers où la lumière prend vie, illuminant chaque coin de l'espace avec des couleurs vibrantes et des formes captivantes.";
  const src = "/lumiere1.jpeg";
  const artistes = ["Marina Abramović", "Yayoi Kusama", "Laurie Anderson"];
  const lieuDate =
    "Date : 10 avril 2024, Heure : 18h00, Lieu : Galerie d'art XYZ, ";
  const tarif = " Tarif : Gratuit";
  const aPropos =
    "Venez découvrir une exposition unique qui explore les différentes facettes de la lumière à travers des installations artistiques interactives et captivantes.";
  const galerie = "/lumiere2.jpeg";
  const boutonReservation = "Réservez maintenant";

  return (
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
import TemplatePage from "@/components/templatePage/TemplatePage";

const styles = {
  container: {
    marginBottom: "350px",
  },
};

const Event1 = () => {
  // Données spécifiques à votre événement
  const title = "Lumière Éphémère";
  const description =
    "Plongez dans un monde de lumière et d'éphémère avec l'exposition immersive <<Lumière Éphémère>>. Cette expérience artistique unique vous transporte dans un univers où la lumière prend vie, illuminant chaque coin de l'espace avec des couleurs vibrantes et des formes captivantes.";
  const src = "/lumiereephemere3.jpeg";
  const artistes = ["Marina Abramović", "Yayoi Kusama", "Laurie Anderson"];
  const lieuDate =
    "Date : 10 avril 2024, Heure : 18h00, Lieu : Galerie d'art XYZ";
  const tarif = "Tarif : Gratuit";
  const aPropos =
    "Venez découvrir une exposition unique qui explore les différentes facettes de la lumière à travers des installations artistiques interactives et captivantes.";
  const galerie = "/lumiereEphemere2.jpeg";
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
>>>>>>> 8bf1680e9d5a086f88058c74698ef858d3469f2a
    </div>
  );
};

export default Event1;
