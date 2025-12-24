import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Contact.module.css";
import bgImage from "../Images/main-bg";
import ContactSection from "./ContactSection";
import Footer from "./Footer1";

export default function ContactUs() {
  return (
    <>
      <section className={styles.hero}>
        {/* Background Image */}
        <div
          className={styles.bg}
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* Dark Overlay */}
        <div className={styles.overlay} />

        {/* NAVBAR */}
        <nav className={styles.navbar}>
          <Link to="/" className={styles.logo}>
            🌿 Sky Eagle
          </Link>
          <ul className={styles.navLinks}>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
            <li>
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li>
              <Link to="/contactus">CONTACT</Link>
            </li>
          </ul>

          <div className={styles.search}>🔍</div>
        </nav>

        <div className={styles.heroContent}>
          <p className={styles.breadcrumb}>
            <Link to="/" className={styles.breadLink}>
              Home
            </Link>
            <span>|</span>
            <Link to="/contactus" className={styles.breadLink}>
              Contact
            </Link>
          </p>

          <h1 className={styles.title}>CONTACT US</h1>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </>
  );
}
