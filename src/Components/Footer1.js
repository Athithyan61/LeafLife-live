import { useEffect, useState } from "react";
import styles from "../Styles/Footer.module.css";

const Footer = () => {
  
  return (
    <>
      <footer className={styles.footer6}>
        <div className={styles.container6}>
          {/* LEFT SIDE */}
          <div className={styles.left6}>
            <div className={styles.brandRow6}>
              <div className={styles.logoWrap6}>
                <span className={styles.logoIcon6}>🌿</span>
                <span className={styles.logoText6}>leaflife</span>
              </div>

              {/* vertical line */}
              <span className={styles.line6}></span>

              <p className={styles.brandDesc6}>
                Stay updated with our latest projects and gardening tips.
              </p>
            </div>

            <div className={styles.subscribe6}>
              <input
                type="email"
                placeholder="Email"
                className={styles.input6}
              />
              <button className={styles.button6}>Sign Up</button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className={styles.right6}>
            <div className={styles.column6}>
              <h4 className={styles.heading6}>LINKS</h4>
              <ul>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>SERVICES</li>
                <li>PROJECTS</li>
              </ul>
            </div>

            <div className={styles.column6}>
              <h4 className={styles.heading6}>SERVICES</h4>
              <ul>
                <li>HARDSCAPING</li>
                <li>PLANT SELECTION</li>
                <li>GARDEN DESIGN</li>
                <li>GARDEN CONSULTANT</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className={styles.bottom6}>
          COURTESY © 2023. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </>
  );
};

export default Footer;
