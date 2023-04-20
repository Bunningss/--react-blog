import styles from "../styles/PrimayButton.module.css";

const PrimayButton = ({ text }) => {
  return <button className={`button ${styles.primary_button}`}>{text}</button>;
};

export default PrimayButton;
