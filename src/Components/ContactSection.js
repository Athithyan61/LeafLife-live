import React from "react";
import styles from "../Styles/ContactSection.module.css";

export default function ContactSection() {
  return (

    <>
    <section className={styles.contactWrap8}>
      {/* LEFT – MAP */}
      <div className={styles.mapWrap8}>
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Amsterdam&output=embed"
          loading="lazy"
        ></iframe>
      </div>

      {/* RIGHT – CONTENT */}
      <div className={styles.contentWrap8}>
        {/* INFO */}
        <div className={styles.info8}>
          <h2>Get in Touch</h2>
          <p>
            We're here to help! Reach out to us using the contact information
            below or fill out the form, and we'll get back to you as soon as
            possible.
          </p>

          <div className={styles.infoItem8}>
            <span>Email</span>
            <p>hallo@leaflife.com</p>
          </div>

          <div className={styles.infoItem8}>
            <span>Phone</span>
            <p>+123 456 7890</p>
          </div>

          <div className={styles.infoItem8}>
            <span>Address</span>
            <p>123 Any Where St, Any City, Any State</p>
          </div>
        </div>

        {/* FORM */}
        <div className={styles.formWrap8}>
          <h3>Send Us a Message</h3>

          <div className={styles.inputRow8}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>

          <textarea
            placeholder="Message"
            className={styles.textarea8}
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = e.target.scrollHeight + "px";
            }}
          ></textarea>

          <button>Sign Up</button>
        </div>
      </div>
    </section>
    </>
  );
}
