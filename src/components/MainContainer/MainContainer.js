import React from "react";
import styles from "./MainContainer.module.css";
import { useState } from "react";

import AboutMe from "../AboutMe/AboutMe";

const MainContainer = () => {
  const [showAbout, setShowAbout] = useState(false);

  const handleShowAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <div className={styles.MainContainer}>
      <p className={styles.name}>Adam Blackwell</p>
      <AboutMe showAbout={showAbout} setShowAbout={handleShowAbout}></AboutMe>
      <a href="https://www.google.com" className={styles.linkText}>
        Resume
      </a>
      <a href="https://github.com/atb2119" className={styles.linkText}>
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/adam-blackwell-85918595/"
        className={styles.linkText}
      >
        LinkedIn
      </a>
    </div>
  );
};

export default MainContainer;
