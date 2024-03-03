import React from "react";
import Image from "next/image";
import Card from "@/components/card/Card";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.topImageContainer}>
        <Image
          src="/home.jpeg"
          alt="Top Image"
          layout="responsive"
          width={1200}
          height={300}
          className={styles.topImage}
        />
      </div>
      <div className={styles.welcomeContainer}>
        <h2 className={styles.welcomeTitle}>
          Bienvenue sur ArtÉclat : Votre Portail Vers l&apos;Art et la Culture
        </h2>
        <div className={styles.welcomeContent}>
          <p className={styles.welcomeText}>
            Découvrez un univers d&apos;art et de culture avec ArtÉclat.
          </p>
          <p className={styles.welcomeText}>
            Notre plateforme vous ouvre les portes d&apos;un monde
            d&apos;événements artistiques stimulants.
          </p>
          <p className={styles.welcomeText}>
            Trouvez facilement des expositions, des concerts, des spectacles et
            bien plus encore, le tout réuni en un seul endroit.
          </p>
          <p className={styles.welcomeText}>
            ArtÉclat simplifie votre expérience artistique en vous permettant de
            découvrir, réserver et partager vos événements préférés en toute
            simplicité.
          </p>
          <p className={styles.welcomeText}>
            Plongez dans l&apos;art avec nous et laissez-vous inspirer par une
            multitude d&apos;expériences uniques.
          </p>
        </div>
      </div>
      {/* Calendrier d&apos;événements */}
      <div className={styles.eventCalendar}></div>

      <h2 className={styles.calendarTitle}>Calendrier d&apos;Événements</h2>
      <div className={styles.calendarContent}>
        <p className={styles.calendarText}>
          Explorez dès maintenant les événements artistiques à venir !
        </p>
        <p className={styles.calendarText}>
          Notre calendrier en ligne vous réserve des festivals, des expositions
          artistiques, des spectacles et bien plus encore.
        </p>
        <p className={styles.calendarText}>
          Ne manquez aucune occasion de découvrir l&apos;art sous toutes ses
          formes !
        </p>
      </div>

      {/* Cards */}
      <div className={styles.cardContainer}>
        <Card
          title="Lumière Éphémère"
          src="/lumiere.jpeg"
          alt="image 1"
          description="10 avril 2024, Heure : 18h00. Galerie d'Art Éphémère"
          isProfile
          buttonLink="/event1"
        />
        <Card
          title="Exposition d'Art Contemporain"
          src="/artcontemporain2.jpeg"
          alt="image 2"
          description="20 mai 2024, Heure : 16h00. Musée d'Art Moderne"
          isProfile
          buttonLink="/event2"
        />
        <Card
          title="Exposition de Sculptures"
          src="/sculpture.webp"
          alt="image 3"
          description="5 juillet 2024 - 15 juillet 2024. Musée des Arts Insolites"
          isProfile
          buttonLink="/event3"
        />
      </div>
      <div className={styles.exploreArt}>
        <div className={styles.bottomImageContainer}>
          <Image
            src="/home2.jpeg"
            alt="Bottom Image"
            layout="responsive"
            width={300}
            height={600}
            className={styles.bottomImage}
          />
        </div>
        <div className={styles.exploreArtContent}>
          <h2 className={styles.exploreArtTitle}>
            Explorez l&apos;Art qui Vous Ressemble
          </h2>
          <p className={styles.exploreArtText}>
            Explorez une multitude d&apos;événements artistiques pour trouver
            celui qui éveillera votre passion.
            <p>
              {" "}
              Que vous recherchiez une exposition captivante, un concert
              intimiste ou une performance théâtrale, notre plateforme regorge
              d&apos;opportunités pour découvrir l&apos;art qui vous parle.{" "}
            </p>
            <p>
              Laissez-vous inspirer par la créativité et trouvez votre prochaine
              aventure artistique dès aujourd&apos;hui.
            </p>
          </p>
        </div>
      </div>
    </main>
  );
}
