import React, { useState } from "react";
import styles from "../Styles/Faq.module.css";
import chair from "../Images/i-chairs.png";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(1);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className={styles.faqSection8}>
      <div className={styles.faqHeader8}>
        <h1>
          FREQUENTLY <br />
          <span>ASKED </span>QUESTIONS
        </h1>
        <span className={styles.faqTag8}>[ F.A.Q ]</span>
      </div>

      <div className={styles.faqContent8}>
        {/* IMAGE */}
        <div className={styles.faqImageWrap8}>
          <img src={chair} /* replace with your image */ alt="Garden chair" />
        </div>

        {/* QUESTIONS */}
        <div className={styles.faqList8}>
          {faqData.map((item, i) => {
            const active = openIndex === i;

            return (
              <div
                key={i}
                className={`${styles.faqItem8} ${active ? styles.active8 : ""}`}
              >
                <button
                  className={styles.faqQuestion8}
                  onClick={() => toggle(i)}
                >
                  {item.q}
                  <span className={styles.icon8}>{active ? "˄" : "˅"}</span>
                </button>

                <div className={styles.faqAnswer8}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const faqData = [
  {
    q: "How often do you perform maintenance visits?",
    a: "We typically perform maintenance visits weekly or bi-weekly depending on the package you choose.",
  },
  {
    q: "How long does it take to complete a garden design project?",
    a: "The timeline varies based on the project's complexity provide a more accurate estimate. We will design garden based on your own needs, budget, and time constraints.",
  },
  {
    q: "Do you offer organic pest control options?",
    a: "Yes, we offer eco-friendly and organic pest control solutions tailored to your garden.",
  },
  {
    q: "Do you offer maintenance packages?",
    a: "Yes, we provide flexible maintenance packages based on seasonal and client needs.",
  },
];
