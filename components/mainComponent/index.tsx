import React, { useState } from "react";
import { MyProfile } from "../myProfile";
import styles from "./styles.module.scss";

export function MainComponent() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${styles.main} ${darkMode ? styles.darkMode : ""}`}>
      <div className={styles.container}>
        <MyProfile darkMode={darkMode} />
      </div>
      <button onClick={() => handleDarkMode()}>clica</button>
    </div>
  );
}
