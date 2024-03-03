import React from "react";
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
    </div>
  );
};

export default Event1;
