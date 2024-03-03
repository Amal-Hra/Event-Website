import React from "react";
import Link from "next/link";
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
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
