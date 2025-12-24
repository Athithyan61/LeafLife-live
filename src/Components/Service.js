import React from "react";
import styles from "../Styles/Service.module.css";
import services from "../data/Service.json";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import bgImage from "../Images/main-bg";
import Footer from "./Footer1";

export default function Service() {
  const navigate = useNavigate();
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

        {/* HERO CONTENT (Framer styles) */}
        <div className={styles.heroContent}>
          <p className={styles.breadcrumb}>
            <Link to="/" className={styles.breadLink}>
              Home
            </Link>
            <span>|</span>
            <Link to="/services" className={styles.breadLink}>
              Services
            </Link>
          </p>

          <h1 className={styles.title}>OUR SERVICES</h1>
        </div>
      </section>
      <section>
        <div className={styles.service}>
          <div className={styles.serviceCards}>
            <div className={styles.grid}>
              {services.map((service) => (
                <div
                  key={service.id}
                  className={styles.Scard}
                  onClick={() => navigate(`/services/${service.id}`)}
                >
                  <img src={service.image} alt={service.title} />

                  {/* Arrow Icon */}
                  <span className={styles.icon}>
                    <FiArrowUpRight size={40} />
                  </span>

                  <div className={styles.overlay}>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
