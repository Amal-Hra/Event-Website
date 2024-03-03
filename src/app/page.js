import React from "react";
import Image from "next/image";
import Card from "@/components/card/Card";
import styles from "./home.module.css";
<<<<<<< HEAD

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.topImageContainer}>
=======
import "../components/card/card.module.css";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Times New Roman', Times, serif",
      }}
    >
      <div
        style={{
          flex: "1",
          width: "100%",
          borderTop: "20px solid black",
          height: "400px",
        }}
      >
>>>>>>> 8bf1680e9d5a086f88058c74698ef858d3469f2a
        <Image
          src="/home.jpeg"
          alt="Top Image"
          layout="responsive"
          width={1200}
          height={300}
<<<<<<< HEAD
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
=======
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <div
        style={{
          flex: "1",
          width: "100%",
          backgroundColor: "#f5f1ec",
          marginTop: "30px",
          padding: "40px",
          borderTop: "2px solid black",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            fontStyle: "italic",
            fontFamily: "'Times New Roman', Times, serif",
            backgroundColor: "#fcfaf9",
            border: "2px",
            borderRadius: "10%",
          }}
        >
          Bienvenue sur ArtÉclat : Votre Portail Vers l'Art et la Culture
        </h2>
        <br />
        <div style={{ fontWeight: "bold", marginTop: "10px" }}>
          <p
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              color: "#c1a788",
              fontSize: "25px",
              textAlign: "left",
            }}
          >
            Découvrez un univers d'art et de culture avec ArtÉclat.
          </p>
          <p
            style={{
              marginBottom: "20px",
              color: "#a68256",
              fontSize: "20px",
              textAlign: "right",
            }}
          >
            Notre plateforme vous ouvre les portes d'un monde d'événements
            artistiques stimulants.
          </p>
          <p
            style={{
              marginBottom: "24px",
              color: "#745b3c",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Trouvez facilement des expositions, des concerts, des spectacles et
            bien plus encore, le tout réuni en un seul endroit.
          </p>
          <p
            style={{
              marginBottom: "20px",
              color: "#423322",
              fontSize: "18px",
              textAlign: "justify",
            }}
          >
            ArtÉclat simplifie votre expérience artistique en vous permettant de
            découvrir, réserver et partager vos événements préférés en toute
            simplicité.
          </p>
          <p
            style={{
              color: "#201911",
              fontSize: "25px",
              textAlign: "centert",
              marginTop: "40px",
            }}
          >
            Plongez dans l'art avec nous et laissez-vous inspirer par une
            multitude d'expériences uniques.
          </p>
        </div>
      </div>
      {/* Calendrier d'événements */}
      <div
        style={{
          flex: "1",
          width: "100%",
          height: "400px",
          textAlign: "center",
          backgroundColor: "#f5f1ec",
          borderBottom: "2px solid black",
        }}
      ></div>

      <h2
        style={{
          fontSize: "38px",
          marginBottom: "20px",
          marginTop: "30px",
          textAlign: "center",
        }}
      >
        Calendrier d'Événements
      </h2>
      <div
        style={{
          fontSize: "18px",
          textAlign: "center",
          marginRight: "20px",
          backgroundColor: "#efe4df",
          height: "200px",
          paddingTop: "35px",
        }}
      >
        <p
          style={{
            fontSize: "20px",
            textAlign: "center",
            marginRight: "20px",
            marginBottom: "18px",
          }}
        >
          Explorez dès maintenant les événements artistiques à venir !
        </p>
        <p
          style={{
            fontSize: "20px",
            textAlign: "center",
            marginRight: "20px",
            marginBottom: "18px",
            paddingLeft: "15px",
          }}
        >
          Notre calendrier en ligne vous réserve des festivals, des expositions
          artistiques, des spectacles et bien plus encore.
        </p>
        <p
          style={{
            fontSize: "20px",
            textAlign: "center",
            marginRight: "20px",
            marginBottom: "18px",
          }}
        >
          Ne manquez aucune occasion de découvrir l'art sous toutes ses formes !
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          flex: "1",
          margin: "100px 0 20px 2px",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Card
          title="Lumière Éphémère"
          src="/lumiereephemere3.jpeg"
          alt="image 1"
          description="  10 avril 2024, Heure : 18h00.
          Galerie d'Art Éphémère"
          isProfile
          buttonLink="/event1"
          style={{ flexBasis: "30%" }}
        />
        <Card
          title="Exposition d'Art Contemporain"
          src="/artcontemporain2.jpeg"
          alt="image 2"
          description="20 mai 2024, Heure : 16h00 .
				 Musée d'Art Moderne"
          isProfile
          buttonLink="/event2"
          style={{ flexBasis: "30%" }}
        />
        <Card
          title="Exposition de Sculptures"
          src="/sculpture2.jpeg"
          alt="image 3"
          description="5 juillet 2024 - 15 juillet 2024	.
          Musée des Arts Insolites"
          isProfile
          buttonLink="/event3"
          style={{ flexBasis: "30%" }}
        />
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          margin: "150px 0 20px 2px",
        }}
      >
        <div
          style={{
            flex: "1",
            marginRight: "20px",
            marginLeft: "20px",
            width: "50%",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Image
            src="/home2.jpeg"
            alt="Bottom Image"
            layout="responsive"
            width={300}
            height={600}
          />
        </div>
        <div style={{ flex: "1", width: "100%", padding: "0 20px" }}>
          <h2
            style={{
              fontSize: "38px",
              marginBottom: "20px",
              marginTop: "30px",
              textAlign: "left",
            }}
          >
            Explorez l'Art qui Vous Ressemble
          </h2>
          <p
            style={{
              fontSize: "20px",
              marginTop: "20px",
              textAlign: "left",
            }}
          >
            Explorez une multitude d'événements artistiques pour trouver celui
            qui éveillera votre passion. Que vous recherchiez une exposition
            captivante, un concert intimiste ou une performance théâtrale, notre
            plateforme regorge d'opportunités pour découvrir l'art qui vous
            parle. Laissez-vous inspirer par la créativité et trouvez votre
            prochaine aventure artistique dès aujourd'hui.
          </p>
>>>>>>> 8bf1680e9d5a086f88058c74698ef858d3469f2a
        </div>
      </div>
    </main>
  );
}
