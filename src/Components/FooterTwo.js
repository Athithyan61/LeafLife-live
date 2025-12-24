import React from 'react'
import styles from "../Styles/FooterTwo.module.css"
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
            <footer className={styles.FT}>
                <div className={styles.FTContainer}>
                    {/* LEFT SIDE */}
                    <div className={styles.FTLeft}>
                        <div className={styles.FTBrandRow}>
                            <div className={styles.FTLogoWrap}>
                                <span className={styles.FTLogoIcon}>🌿  </span>
                                <span className={styles.FTLogoText}>leaflife</span>
                            </div>

                            {/* vertical line */}
                            <span className={styles.FTLine}></span>

                            <p className={styles.FTBrandDesc}>
                                Stay updated with our latest projects and gardening tips.
                            </p>
                        </div>

                        <div className={styles.FTSubscribe}>
                            <input type="email"
                                placeholder="Email"
                                className={styles.FTInput}
                            />
                            <button className={styles.FTButton}>Sign Up</button>
                        </div>
                    </div>
                    {/* RIGHT SIDE */}
                    <div className={styles.FTRight}>
                        <div className={styles.FTColumn}>
                            <h4 className={styles.FTHeading}>LINKS</h4>
                            <ul>
                                <li>HOME</li>
                                <li>ABOUT US</li>
                                <li>SERVICES</li>
                                <li>PROJECTS</li>
                            </ul>
                        </div>

                        <div className={styles.FTColumn}>
                            <h4 className={styles.FTHeading}>SERVICES</h4>
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
                <div className={styles.FTBottom}>
                    COURTESY © 2023. ALL RIGHTS RESERVED.
                </div>
            </footer>

        </div>
    )
}
