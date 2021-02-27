import React, { useContext } from "react";
import { ChallengsContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/ExpirienceBar.module.css";

const ExpirienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengsContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.expirienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span
          className={styles.currentExpirience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
};

export default ExpirienceBar;
