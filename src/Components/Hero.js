import { useEffect, useState } from "react";
import styles from "../Styles/Hero.module.css";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import img1 from "../Images/i-img1.png";
import img2 from "../Images/i-img2.png";
import img3 from "../Images/i-img3.png";
import sectionImg from "../Images/i-img4.png";
import service1 from "../Images/service1.png";
import service2 from "../Images/service2.png";
import service3 from "../Images/service3.png";
import gardenImg from "../Images/i-img3.png";
import bgImage from "../Images/chair-bg.png";

const images = [img1, img2, img3];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  const services = [
    {
      title: "GARDEN DESIGN",
      desc: "Crafting the perfect garden space. We will design a garden that suits your lifestyle.",
      img: service1,
      tags: ["Garden", "Inner Court", "Home"],
    },
    {
      title: "PLANT SELECTION",
      desc: "Hand-picked greenery for your oasis. Our experts select the right plants.",
      img: service2,
      tags: ["Plant", "Garden", "Landscape Design"],
    },
    {
      title: "HARDSCAPING",
      desc: "Adding structure to your landscape. We create functional  hardscape features.",
      img: service3,
      tags: ["Home", "Garden", "Landscape Design"],
    },
  ];

  return (
    <>
      <section className={styles.hero}>
        {/* Background Carousel */}
        {images.map((img, i) => (
          <div
            key={i}
            className={`${styles.bg} ${i === index ? styles.active : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className={styles.overlay} />

        {/* NAVBAR */}
        <nav className={styles.navbar}>
          <div className={styles.logo}>🌿 leaflife</div>

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

        {/* HERO CONTENT */}
        <div className={styles.content}>
          <h1>
            CREATE YOUR <br /> DREAM GARDEN
          </h1>

          <p>
            Crafting dream gardens with passion, creativity, and sustainability
            for over a decade with our experienced landscape artists.
          </p>

          <div className={styles.actions}>
            <Link to="/contact" className={styles.primary}>
              Get Started
            </Link>

            <Link to="/projects" className={styles.secondary}>
              Explore Projects
            </Link>
          </div>
        </div>

        {/* STATS CARD */}
        <div className={styles.statsCard}>
          <h3>500+</h3>
          <p>Satisfied Clients</p>

          <div className={styles.circles}>
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* LOCATION CARD */}
        <div className={styles.locationCard}>
          <div>
            <span className={styles.pin}>📍</span>
            <h4>Hachioji Garden</h4>
            <p>
              We design Hachioji Garden as a part of our new Landscape Design
              Commission.
            </p>
          </div>

          <Link to="/projects" className={styles.arrow}>
            ↗
          </Link>
        </div>
      </section>

      <section className={styles.section1}>
        {/* Top Row */}
        <div className={styles.topRow1}>
          <h2>
            WE ARE <span>DIFFERENT</span> <br /> IN EVERY WAYS
          </h2>

          <button className={styles.cta1}>Get Started</button>
        </div>

        {/* Content */}
        <div className={styles.content1}>
          {/* Left Image */}
          <div className={styles.imageWrapper1}>
            <img src={sectionImg} alt="Garden lifestyle" />
          </div>

          {/* Right Features */}
          <div className={styles.features1}>
            <div className={styles.feature1}>
              <div className={styles.icon1}>♡</div>
              <h4>Passion in every work</h4>
              <p>
                We are deeply passionate about creating beautiful, sustainable
                green landscapes for our clients.
              </p>
            </div>

            <div className={styles.feature1}>
              <div className={styles.icon1}>🔗</div>
              <h4>Collaboration on top</h4>
              <p>
                We make your dream design come true by combining your ideas with
                our 10+ years of garden design expertise.
              </p>
            </div>

            <div className={styles.feature1}>
              <div className={styles.icon1}>🍃</div>
              <h4>Sustainability in check</h4>
              <p>
                We love nurturing nature, one garden at a time, so that you can
                enjoy the beautiful landscape even longer.
              </p>
            </div>

            <div className={styles.feature1}>
              <div className={styles.icon1}>✦</div>
              <h4>Creativity unleashed</h4>
              <p>
                We only deliver innovative designs that stand out and make sure
                your garden is never like the others.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section2}>
        {/* HEADER */}
        <div className={styles.header2}>
          <h2>
            SIMPLE STEPS FOR <br />
            OUR <span>LANDSCAPE</span> WORK
          </h2>
          <div className={styles.tag2}>[ HOW IT WORKS ]</div>
        </div>

        {/* TIMELINE */}
        <div className={styles.timeline2}>
          {/* TOP ROW */}
          <div className={`${styles.step2} ${styles.right}`}>
            <h4>02 | Design & planning</h4>
            <p>
              Our team of experts meticulously crafts a custom garden design
              that aligns with your desires and your space characteristics.
            </p>
          </div>

          <div className={`${styles.step2} ${styles.right}`}>
            <h4>04 | Garden decorating</h4>
            <p>
              With your design finalized, we put on our gardening gloves and
              work, creating your garden to be as beautiful as envisioned.
            </p>
          </div>

          {/* HORIZONTAL LINE */}
          <span className={styles.horizontalLine} />

          {/* BOTTOM ROW */}
          <div className={`${styles.step2} ${styles.left}`}>
            <h4>01 | Design consultation</h4>
            <p>
              In the initial step, we sit down with you to have a detailed
              discussion about your gardening vision and preferences.
            </p>
          </div>

          <div className={`${styles.step2} ${styles.left}`}>
            <h4>03 | Implement construction</h4>
            <p>
              We present the design to you for review. Once approved, we move
              forward to implement the plan with construction.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        {/* HEADER */}
        <div className={styles.header}>
          <span className={styles.label}>[ SERVICES ]</span>
          <a href="/services" className={styles.link}>
            See More Services
          </a>
        </div>

        {/* CARDS */}
        <div className={styles.cards}>
          {services.map((item, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {/* TAGS */}
              <div className={styles.tags}>
                {item.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              {/* ARROW */}
              <div className={styles.arrows1}>
                <FiArrowUpRight />
              </div>

              {/* CONTENT */}
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section4}>
        {/* Header */}
        <div className={styles.header4}>
          <h2 className={styles.title4}>
            GET TO KNOW OUR <br />
            LATEST GARDEN <span>WORKS</span>
          </h2>

          <a href="/projects" className={styles.link4}>
            Explore Projects
          </a>
        </div>

        {/* Image */}
        <div className={styles.imageWrapper4}>
          <img src={gardenImg} alt="Garden Work" className={styles.image4} />
        </div>

        {/* Details */}
        <div className={styles.details4}>
          <div className={styles.info4}>
            <span className={styles.label4}>NAME</span>
            <h4 className={styles.value4}>SERENE RETREAT</h4>
          </div>

          <div className={styles.info4}>
            <span className={styles.label4}>LOCATION</span>
            <h4 className={styles.value4}>SUNNYVALE, CA</h4>
          </div>

          <p className={styles.description4}>
            A tranquil garden oasis perfect for your relaxation time with family
            or alone within your comfortable home.
          </p>
        </div>
      </section>

      <section
        className={styles.section5}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className={styles.overlay5}></div>

        <div className={styles.content5}>
          <h2 className={styles.title5}>
            READY TO TRANSFORM <br /> YOUR GARDEN?
          </h2>

          <button className={styles.button5}>Get Started</button>
        </div>
      </section>

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

export default Hero;
