import React from "react";
import styles from "./Footer.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>Recommended</h3>
          <p>realme C75</p>
          <p>GT 7 pro</p>
          <p>realme 13+ 5G</p>
          <p>realme Note 60</p>
          <p>realme C61</p>
          <p>realme Gt 6</p>

        </div>

        <div className={styles.section}>
          <h3>Support</h3>
          <p>FAQ</p>
          <p>Troubleshooting</p>
        </div>

        <div className={styles.section2}>
          <h3>About realme          </h3>
          <p>Our Brand</p>
          <p>Newsroom</p>
        </div>

        <div className={styles.section3}>
          <h3>Contact realme</h3>
          <p>Whatsapp</p>
          <p>service.pk@realme.com</p>
        </div>

        <div className={styles.section}>
          <h3>04238048018</h3>
          <p>09:30 - 18:00， MON - SAT</p>
         <p> Exclude Holidays</p>
          <ul className={styles.socialLinks}>
            <li><a href="https://wwww.facebook.com?Pakistanrealme" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com/realmepakistanofficial?igsh=MXExczBjdHZiaDFsNQ==" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Pakistan ( English / PKR )</p>
      </div>
      <div className={styles.bottommm}>
      <p> © 2019-2024 realme. All Rights Reserved.</p>
      </div>
      <div className={styles.bottommm2}>
      <p> User Agreement | Privacy Policy | Terms of Sales | Warranty Terms</p>
      </div>
    </footer>
  );
};

export default Footer;