import React from "react";
import Styles from "../assets/css/Header.module.css";

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className={Styles.items}>
            <a href="#home">Home</a>
          </li>
          <li className={Styles.items}>
            <a href="#services-container">Services</a>
          </li>
          <li className={Styles.items}>
            <a href="#client-section">Our Clients</a>
          </li>
          <li className={Styles.items}>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
