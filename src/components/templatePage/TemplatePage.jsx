import React from "react";
import styles from "./templatePage.module.css";
import ImageComponent from "./ImageComponent";

const TemplatePage = ({
  title,
  description,
  src,
  altImg = "test",
  artistes,
  lieuDate,
  tarif,
  aPropos,
  galerie,
  boutonReservation,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.sections}>
          <section>
            <h2>Artistes Participants</h2>
            <ul>
              {artistes &&
                artistes.length > 0 &&
                artistes.map((artiste, index) => (
                  <li key={index}>{artiste}</li>
                ))}
            </ul>
          </section>

          <section>
            <h2>Lieu et Date</h2>
            <p>{lieuDate}</p>
          </section>

          <section>
            <h2>Tarif</h2>
            <p>{tarif}</p>
          </section>

          <section>
            <h2>À Propos de l'Événement</h2>
            <p>{aPropos}</p>
          </section>

          <section>
            <h2>Galerie</h2>
            <div className={styles.gallery}>
              <img src={galerie} alt="Image de l'événement" />
            </div>
          </section>

          <section>
            <button>{boutonReservation}</button>
          </section>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <ImageComponent srcImg={src} alt={altImg} />
      </div>
    </div>
  );
};

export default TemplatePage;
