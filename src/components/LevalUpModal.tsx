import { useContext } from "react";
import { ChallengsContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/LevalUpModal.module.css";

const LevalUpModal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengsContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
      ;
    </div>
  );
};

export default LevalUpModal;
