import React from "react";

const SecondaryButton = ({ btn_styles, text, handleClick }) => {
  return (
    <button style={btn_styles} onClick={handleClick}>
      {text}
    </button>
  );
};

export default SecondaryButton;
