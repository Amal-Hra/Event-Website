import React from "react";
import Links from "./links/Links";
import Styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.logo}>
        <Logo />
      </div>
      <Links />
    </div>
  );
};

const Logo = () => {
  return (
    <div className={Styles.container}>
      <img src="/logo.png" alt="Image" className={Styles.logoImage} />
      <span>ARTÉCLAT</span>
    </div>
  );
};

export default Navbar;
