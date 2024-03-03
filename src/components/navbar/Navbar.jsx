import React from "react";
import Links from "./links/Links";
import Styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.logo}>
<<<<<<< HEAD
        <Logo />
=======
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/logo.png"
            alt="Image"
            style={{ width: "90px", marginRight: "10px" }}
          />
          <span>ARTÉCLAT</span>
        </div>
>>>>>>> 8bf1680e9d5a086f88058c74698ef858d3469f2a
      </div>
      <Links />
    </div>
  );
};

<<<<<<< HEAD
const Logo = () => {
  return (
    <div className={Styles.container}>
      <img src="/logo.png" alt="Image" className={Styles.logoImage} />
      <span>ARTÉCLAT</span>
    </div>
  );
};

=======
>>>>>>> 8bf1680e9d5a086f88058c74698ef858d3469f2a
export default Navbar;
