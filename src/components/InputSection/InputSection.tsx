import classNames from "classnames";
import React, { FunctionComponent } from "react";
import "./InputSection.css";

export interface InputSectionProps {
  label: string;
  inputPlaceholder: string;
  buttonText: string;
}

export const InputSection: FunctionComponent<InputSectionProps> = ({
  label,
  inputPlaceholder,
  buttonText,
}) => {
  return (
    <div className="inputSectionContainer">
      <label>
        {label}
        <input placeholder={inputPlaceholder} />
      </label>
      <button>{buttonText}</button>
    </div>
  );
};
