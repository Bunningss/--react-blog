import "../styles/PrimayButton.css";

const PrimayButton = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick} className="button primary_button">
      {text}
    </button>
  );
};

export default PrimayButton;
