import styles from "../styles/FormInput.module.css";
import { useState } from "react";

const FormInput = ({ input, handleChange }) => {
  const [focused, setFocused] = useState(false);
  const { fieldType, errorMessage, label, ...others } = input;

  return (
    <div className={styles.input_group}>
      <label htmlFor="" className={`text_regular`}>
        {label}
      </label>
      {fieldType === "TEXTAREA" ? (
        <textarea
          className={`input ${styles.form_input}`}
          {...others}
          onBlur={() => setFocused(true)}
          focused={focused.toString()}
          onChange={handleChange}
        ></textarea>
      ) : (
        <input
          {...others}
          className={`input ${styles.form_input}`}
          onBlur={() => setFocused(true)}
          focused={focused.toString()}
          onChange={handleChange}
        />
      )}
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
