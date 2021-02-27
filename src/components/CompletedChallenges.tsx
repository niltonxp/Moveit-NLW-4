import { useContext } from "react";
import { ChallengsContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/CompletedChallenges.module.css";

const CompletedChallenges = () => {
  const { challengsComppleted } = useContext(ChallengsContext);

  return (
    <div className={styles.completedChallangesContainer}>
      <span>Desafios completos</span>
      <span>{challengsComppleted}</span>
    </div>
  );
};

export default CompletedChallenges;
