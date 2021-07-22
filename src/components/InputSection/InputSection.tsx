import classNames from "classnames";
import React, { FunctionComponent, useState } from "react";
import "./InputSection.css";

export interface InputSectionProps {
  label: string;
  inputPlaceholder: string;
  buttonText: string;
  errorMessage: string;
  onButtonClick(ids: string): void;
}

export const InputSection: FunctionComponent<InputSectionProps> = ({
  label,
  inputPlaceholder,
  buttonText,
  errorMessage,
  onButtonClick,
}) => {
  const [inputValue, setinputValue] = useState("");
  console.log(errorMessage);
  return (
    <div>
      <div className="inputContainer">
        <label className="label" htmlFor="ids">
          {label}
        </label>
        <input
          className="input"
          id="ids"
          placeholder={inputPlaceholder}
          onChange={(e) => setinputValue(e.target.value)}
        />
        <button className="button" onClick={() => onButtonClick(inputValue)}>
          {buttonText}
        </button>
      </div>
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
    </div>
  );
};
