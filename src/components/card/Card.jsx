import React from "react";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({
  src,
  alt = "artist",
  title,
  description,
  buttonLink,
  isProfile,
}) => {
  return (
    <div className={styles.cardContainer}>
      {isProfile ? (
        <img className={styles.avatar} src={src} alt={alt} />
      ) : (
        <img className={styles.cardImg} src={src} alt={alt} />
      )}

      <h1 className={styles.cardTitle}>{title}</h1>
      <p className={styles.cardDescription}>{description}</p>
      <Link href={buttonLink}>
        <button className={styles.cardButton}>Savoir Plus</button>
      </Link>
    </div>
  );
};
export default Card;
