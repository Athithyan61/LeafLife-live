import React, { useState } from "react";
import styles from "../Styles/ProjectInside.module.css";

export default function Slide({ data }) {
  const [open, setOpen] = useState(false);

  if (!data) return null; // ✅ IMPORTANT

  return (
    <div
      className={`${styles.slide} ${open ? styles.open : ""}`}
      onClick={() => setOpen(!open)}
    >
      <img src={data.image} alt="img" className={styles.bgImage} />

      <div className={styles.textBlock}>
        <h1>
          {data.title.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h1>

        <div className={styles.info}>
          <div>
            <span>YEAR</span>
            <p>{data.year}</p>
          </div>
          <div>
            <span>LOCATION</span>
            <p>{data.location}</p>
          </div>
          <div>
            <span>SERVICE</span>
            <p>{data.service}</p>
          </div>
        </div>
      </div>

      <div className={styles.rightContent}>
        <h5>DESCRIPTION</h5>
        <p>{data.description}</p>

        <h5>OUTCOMES</h5>
        {data.outcomes?.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <hr/>
    </div>
  );
}
