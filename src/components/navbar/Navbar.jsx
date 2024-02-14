import React from "react";
import Links from "./links/Links";
import Styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.logo}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/logo.png"
            alt="Image"
            style={{ width: "90px", marginRight: "10px" }}
          />
          <span>ARTÉCLAT</span>
        </div>
      </div>
      <Links />
    </div>
  );
};

export default Navbar;
