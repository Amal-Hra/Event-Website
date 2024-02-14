import React from "react";
import Link from "next/link";

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
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
