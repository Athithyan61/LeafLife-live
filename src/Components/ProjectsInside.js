import React, { useState } from "react";
import styles from "../Styles/ProjectInside.module.css";

export default function Slide({ data }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${styles.slide} ${open ? styles.open : ""}`}
      style={
        open
          ? { backgroundImage: `url(${data.image})` }
          : {}
      }
      onClick={() => setOpen(!open)}
    >
      {/* 🔹 Preview image (only before click) */}
      {!open && (
        <img
          src={data.image}
          alt={data.title}
          className={styles.previewImg}
        />
      )}

      {/* LEFT TEXT */}
      <div className={styles.textBlock}>
        <h1>
          {data.title.split(" ")[0]} <br />
          {data.title.split(" ")[1]}
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

      {/* RIGHT CONTENT */}
      <div className={styles.rightContent}>
        <h5>DESCRIPTION</h5>
        <p>{data.description}</p>

        <h5>OUTCOMES</h5>
        {data.outcomes.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    </div>
  );
}
