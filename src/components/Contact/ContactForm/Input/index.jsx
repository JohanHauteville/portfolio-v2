import "./styles.scss";
import PropTypes from "prop-types";
import { forwardRef, useState } from "react";
import { useController } from "react-hook-form";

const Input = forwardRef(
  ({ inputName, inputLabel, textarea, ...props }, ref) => {
    // function Input({ inputName, inputLabel, textarea, ...props }) {
    const [isFocused, setIsFocused] = useState(false);
    const regex = {
      name: {
        value: /^[a-zA-ZÀ-ÿ '-]+$/,
        message: "Caractères numériques et spéciaux interdits",
      },
      email: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Merci de respecter le format ---@---.---",
      },
    };
    const {
      field: { onChange, onBlur, value = "" },
      formState: { errors },
    } = useController({
      name: inputName,
      rules: {
        required: "Merci de remplir le champ",
        minLength: {
          value: 3,
          message: "3 caractères minimum.",
        },
        pattern: {
          value: regex[inputName] ? regex[inputName].value : "",
          message: regex[inputName] ? regex[inputName].message : "kjkjb",
        },
      },
    });

    return (
      <div className="input">
        <label
          htmlFor={inputName}
          className={
            isFocused || value !== ""
              ? "input__label input__label--focused"
              : "input__label"
          }
        >
          {inputLabel}
        </label>
        {textarea ? (
          <textarea
            name={inputName}
            id={inputName}
            {...props}
            className="input__field input__field--textarea"
            onFocus={() => setIsFocused(true)}
            onChange={onChange}
            onBlur={() => {
              setIsFocused(false);
              onBlur();
            }}
            value={value || ""}
          />
        ) : (
          <input
            name={inputName}
            id={inputName}
            {...props}
            className="input__field"
            onFocus={() => setIsFocused(true)}
            onChange={onChange}
            onBlur={() => {
              setIsFocused(false);
              onBlur();
            }}
            value={value || ""}
          />
        )}
        {errors[inputName]?.message && (
          <p className="input__error">{errors[inputName].message}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
Input.propTypes = {
  inputName: PropTypes.string,
  inputLabel: PropTypes.string,
  textarea: PropTypes.bool,
};

export default Input;
