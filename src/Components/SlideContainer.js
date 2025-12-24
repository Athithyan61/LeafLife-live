import React from "react";
import Slide from "../Components/ProjectsInside.js";
import slidesData from "../data/SlideData.js";

export default function SlideContainer() {
  return (
    <>
      {slidesData.map((item) => (
        <Slide key={item.id} data={item} />
      ))}
    </>
  );
}
