import React from "react";
import Slide from "../Components/ProjectsInside.js";
import { slidesData } from "../data/SlideData";
import styles from "../Styles/ProjectInside.module.css";

export default function SlidesSection() {
  return (
    <>
      <div className={styles.slidesWrapper}>
        {slidesData.map((slide) => (
          <Slide key={slide.id} data={slide} />
        ))}
      </div>
    </>
  );
}
