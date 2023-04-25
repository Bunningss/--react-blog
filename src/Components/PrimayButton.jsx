import "../styles/PrimayButton.css";

const PrimayButton = ({ text, handleClick, status }) => {
  return (
    <button
      onClick={handleClick}
      className={
        status ? "button primary_button button_active" : "button primary_button"
      }
      disabled={status ?? status}
    >
      <span className="button_text">{text}</span>
    </button>
  );
};

export default PrimayButton;
