import React, { useContext } from "react";
import { ChallengsContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/Profile.module.css";

const Profile = () => {
  const { level } = useContext(ChallengsContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/niltonxp.png" alt="Niltonxp" />
      <div>
        <strong>Ivan Silva</strong>
        <p>
          <img src="icons/level.svg" alt="Level" /> Level {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
