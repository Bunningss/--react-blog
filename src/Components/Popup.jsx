import "../styles/Popup.css";

const Popup = ({ error }) => {
  return <div className="popup fade_in">{error}</div>;
};

export default Popup;
