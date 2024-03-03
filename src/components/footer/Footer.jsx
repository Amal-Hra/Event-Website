import React from "react";
import Link from "next/link";
<<<<<<< HEAD
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <img src="/logo2-home.png" alt="Logo" className={styles.footerLogo} />
        <p className={styles.footerTitle}>College la cité</p>
        <p className={styles.footerAuthors}>
          Aissiou Sabrina, Amal Hra, Igor Ulrich
        </p>
      </div>
      <div className={styles.footerInfo}>
        <p className={styles.footerCopyright}>© 2024 Tous droits réservés.</p>
        <p className={styles.footerContact}>
          <Link href="/contact">
            <span className={styles.footerLink}>Contact</span>
=======

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#E4D8CA",
        color: "black",
        padding: "5px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          marginBottom: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="/logo2-home.png"
          alt="Logo"
          style={{ width: "250px", marginBottom: "10px" }}
        />
        <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          College la cité
        </p>
        <p style={{ fontSize: "1rem" }}>
          Aissiou Sabrina, Amal Hra, Igor Ulrich
        </p>
      </div>
      <div>
        <p style={{ fontSize: "0.9rem" }}>© 2024 Tous droits réservés.</p>
        <p style={{ fontSize: "0.9rem" }}>
          <Link href="/contact">
            <span style={{ cursor: "pointer", textDecoration: "underline" }}>
              Contact
            </span>
>>>>>>> 8bf1680e9d5a086f88058c74698ef858d3469f2a
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
