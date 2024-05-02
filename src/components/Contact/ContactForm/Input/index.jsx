import "./styles.scss";
import PropTypes from "prop-types";
import { forwardRef, useState } from "react";
import { useController } from "react-hook-form";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { IoMdCheckboxOutline } from "react-icons/io";

const Input = forwardRef(
  (
    { inputName, inputLabel, textarea, checkBox = false, ...props },

    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const regex = {
      user_name: {
        value: /^[a-zA-ZÀ-ÿ '-]+$/,
        message: "Caractères numériques et spéciaux interdits",
      },
      user_email: {
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
        pattern: regex[inputName]
          ? regex[inputName]
          : {
              value: "",
              message: "",
            },
      },
    });
    const classNameInput = textarea
      ? "input__field input__field--textarea"
      : checkBox
      ? "input__field input__field--checkBox"
      : "input__field ";
    const classNameLabel = checkBox
      ? "input__label input__label--checkbox"
      : "input__label";
    const inputAttributes = {
      name: inputName,
      id: inputName,
      className: classNameInput,
      onFocus: () => {
        setIsFocused(true);
      },
      onChange: onChange,
      value: value || "",
    };

    return (
      <div className="input" ref={ref}>
        {!checkBox && (
          <label
            htmlFor={inputName}
            className={
              isFocused || value !== ""
                ? classNameLabel + " input__label--focused"
                : classNameLabel
            }
          >
            {inputLabel}
          </label>
        )}

        {textarea ? (
          <textarea
            {...inputAttributes}
            {...props}
            onBlur={() => {
              onBlur();
              setIsFocused(false);
            }}
          />
        ) : (
          <input
            {...inputAttributes}
            {...props}
            type={checkBox ? "checkbox" : "text"}
            onBlur={() => {
              onBlur();
              setIsFocused(false);
            }}
          />
        )}
        {checkBox && (
          <div className="input__checkbox">
            <div className="input__checkbox--icon">
              {value ? <IoMdCheckboxOutline /> : <RiCheckboxBlankLine />}
            </div>

            <label htmlFor={inputName}>{inputLabel}</label>
          </div>
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
  checkBox: PropTypes.bool,
  inputName: PropTypes.string,
  inputLabel: PropTypes.string,
  textarea: PropTypes.bool,
};

export default Input;
