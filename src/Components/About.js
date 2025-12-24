import React from "react";
import bgImage from "../Images/d-bg.png";
import tree from "../Images/d-tree.png";
import im1 from "../Images/d-girl1.png";
import im2 from "../Images/d-green.png";
import im4 from "../Images/d-home.png";
import im3 from "../Images/d-red.png";
import im5 from "../Images/d-ngirl.png";
import style from "../Styles/About.module.css";
import { Link } from "react-router-dom";
import sectionImg from "../Images/i-img4.png";
import Footer from "./Footer1";

function About() {
  return (
    <>
      <section className={style.hero}>
        {/* Background Image */}
        <div
          className={style.bg}
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* Dark Overlay */}
        <div className={style.overlay} />

        {/* NAVBAR */}
        <nav className={style.navbar}>
          <Link to="/" className={style.logo}>
            🌿 Sky Eagle
          </Link>
          <ul className={style.navLinks}>
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

          <div className={style.search}>🔍</div>
        </nav>

        {/* HERO CONTENT (Framer style) */}
        <div className={style.heroContent}>
          <p className={style.breadcrumb}>
            <Link to="/" className={style.breadLink}>
              Home
            </Link>
            <span>|</span>
            <Link to="/about" className={style.breadLink}>
              About
            </Link>
          </p>

          <h1 className={style.title}>ABOUTUS</h1>
        </div>
      </section>
      <div
        className="col-md-12 d-flex container-fluid"
        id={style.main2}
        style={{ padding: "40px 80px" }}
      >
        <div className="col-md-4">
          <h3 className={style.cr1}>
            CRAFTING <br></br>
            <span className={style.sp}>DREAM GARDENS</span> <br></br>
            INTO REALITY
          </h3>
        </div>
        <div className="col-md-4">
          <p className={style.cr2}>
            At LeafLife, we are passionate about transforming outdoor spaces
            into breathtaking gardens that tell a unique story. Our journey
            began over a decade ago, driven by a shared love for nature
          </p>
        </div>
        <div className="col-md-4">
          <p className={style.cr3}>
            and design. Since then, we have dedicated ourselves to creating
            gardens that enhance your property. Our solid commitment to
            sustainability, innovation, and collaboration has been the
            foundation of our success.
          </p>
        </div>
      </div>
      <div
        className="row container-fluid  mx-auto"
        style={{ padding: "40px 80px" }}
      >
        <div className="col-md-4">
          <div className={style.videoWrapper}>
            <video
              src="https://framerusercontent.com/assets/JZwjeTcKnqPdQFGvOrFoxeYKtIk.mp4"
              autoPlay
              loop
              muted
              playsInline
              className={style.videoCard}
            />
          </div>
        </div>
        <div className="col-md-8">
          <div className={style.videoWrapper}>
            <img src={tree} alt="" className={style.videoCard} />
          </div>
        </div>
      </div>
      <div className={style.main3}>
        {/* <div className={style.leftimg}>
        <img src={imgleft} alt="Reading in garden" />
      </div> */}
        <section className={style.section1}>
          {/* Top Row */}
          <div className={style.topRow1}>
            <h2>
              WE ARE <span>DIFFERENT</span> <br /> IN EVERY WAYS
            </h2>

            <button className={style.cta1}>Get Started</button>
          </div>

          {/* Content */}
          <div className={style.content1}>
            {/* Left Image */}
            <div className={style.imageWrapper1}>
              <img src={sectionImg} alt="Garden lifestyle" />
            </div>

            {/* Right Features */}
            <div className={style.features1}>
              <div className={style.feature1}>
                <div className={style.icon1}>♡</div>
                <h4>Passion in every work</h4>
                <p>
                  We are deeply passionate about creating beautiful, sustainable
                  green landscapes for our clients.
                </p>
              </div>

              <div className={style.feature1}>
                <div className={style.icon1}>🔗</div>
                <h4>Collaboration on top</h4>
                <p>
                  We make your dream design come true by combining your ideas
                  with our 10+ years of garden design expertise.
                </p>
              </div>

              <div className={style.feature1}>
                <div className={style.icon1}>🍃</div>
                <h4>Sustainability in check</h4>
                <p>
                  We love nurturing nature, one garden at a time, so that you
                  can enjoy the beautiful landscape even longer.
                </p>
              </div>

              <div className={style.feature1}>
                <div className={style.icon1}>✦</div>
                <h4>Creativity unleashed</h4>
                <p>
                  We only deliver innovative designs that stand out and make
                  sure your garden is never like the others.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={style.galleryContainer}>
        <div className={style.leftText}>
          <p>[ GALLERY ]</p>
          <h2>
            OUR <br />
            WORK
          </h2>
        </div>
        <div className={style.grid}>
          <div className={style.c1}>
            <img src={im1} alt="Art painting" />
          </div>
          <div className={style.c2}>
            <img src={im2} alt="Plants on shelf" />
          </div>
          <div className={style.c3}>
            <img src={im3} alt="Wooden benches" />
          </div>
          <div className={style.c4}>
            <img src={im4} alt="Greenhouse" />
          </div>
          <div className={style.c5}>
            <img src={im5} alt="Gardening" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
