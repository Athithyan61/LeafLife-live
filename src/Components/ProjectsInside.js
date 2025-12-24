import React from "react";
import { useState } from "react";
import styles from "../Styles/Project.module.css";
import img1 from "../Images/i-img1.png";
import img2 from "../Images/i-img1.png";
import img3 from "../Images/i-img1.png";
import img4 from "../Images/i-img1.png";


const projects = [
  {
    title: "Evening Garden",
    year: "2023",
    location: "Sunnyvale, CA",
    service: "Garden Landscaping",
    image: img1,
  },
  {
    title: "Modern Zen Garden",
    year: "2022",
    location: "San Jose, CA",
    service: "Landscape Design",
    image: img2,
  },
  {
    title: "Minimal Courtyard",
    year: "2023",
    location: "Palo Alto, CA",
    service: "Hardscaping",
    image: img3,
  },
  {
    title: "Backyard Oasis",
    year: "2024",
    location: "Mountain View, CA",
    service: "Garden Renovation",
    image: img4,
  },
];
export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    // Click பண்ணா Active ஆகும், ஏற்கனவே Active ஆ இருந்தா Close ஆகும்
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>

      <section className={styles.wrapper}>
        {projects.map((project, index) => {
          const isActive = activeIndex === index;

          return (
            <div key={index} className={styles.cardWrap}>
              <div
                className={`${styles.project} ${
                  isActive ? styles.activeProject : ""
                }`}
                // Background image active ஆனால் மட்டும் தெரியும்
                style={
                  isActive
                    ? {
                        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url(${project.image})`,
                      }
                    : {}
                }
              >

                <div
                  className={`${styles.imageWrap} ${
                    isActive ? styles.imageHidden : ""
                  }`}
                  style={{ backgroundImage: `url(${project.image})` }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggle(index);
                  }}
                />

                {/* CONTENT */}
                <div className={styles.content}>
                  {/* Close button Logic added to Title */}
                  <h2
                    onClick={() => isActive && handleToggle(index)}
                    style={{ cursor: isActive ? "pointer" : "default" }}
                  >
                    {project.title}
                  </h2>

                  <div className={styles.meta}>
                    <div>
                      <span>YEAR</span>
                      <p>{project.year}</p>
                    </div>
                    <div>
                      <span>LOCATION</span>
                      <p>{project.location}</p>
                    </div>
                    <div>
                      <span>SERVICE</span>
                      <p>{project.service}</p>
                    </div>
                  </div>
                </div>

                {/* DESCRIPTION - இது Active ஆனால் விரியும் */}
                <div
                  className={`${styles.descriptionBox} ${
                    isActive ? styles.descVisible : ""
                  }`}
                >
                  <div className={styles.descInner}>
                    {" "}
                    {/* Inner div needed for smooth content fade */}
                    <div className={styles.descItem}>
                      <span>DESCRIPTION</span>
                      <p>
                        {project.description ||
                          "The charm of a hidden garden design evokes the shape of hidden potential."}
                      </p>
                    </div>
                    <div className={styles.descItem}>
                      <span>OUTCOME</span>
                      <p>
                        {project.outcome ||
                          "Improved curb appeal and increased privacy."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divider} />
            </div>
          );
        })}
      </section>
    </>
  );
}
