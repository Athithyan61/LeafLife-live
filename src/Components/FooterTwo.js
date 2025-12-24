import React from 'react'
import styles from "../Styles/FooterTwo.module.css"
import Footer from "../Components/Footer1.js"
export default function FooterTwo() {
  return (
    <div>
      <div className={styles.FTDream}>
        <div className={styles.heroCard}>
          {/* Navigation Overlay */}
          <nav className={styles.nav}>
            <div className={styles.pills}>
              <button className={styles.pill}>Home</button>
              <button className={styles.pill}>Garden</button>
              <button className={styles.pill}>Landscape Design</button>
              <button className={styles.pill}>Expert</button>
            </div>
            <div className={styles.arrowCircle}>
              <span className={styles.arrowIcon}>↗</span>
            </div>
          </nav>

          {/* Headline */}
          <h1 className={styles.headline}>
            MAKE YOUR DREAM<br />
            GARDEN INTO REALITY
          </h1>
        </div>
      </div>

      <Footer />

    </div>
  )
}
