import classNames from "classnames";
import React, { FunctionComponent } from "react";
import "./TableRow.css";

export interface TableRowProps {
  text: string;
  className?: string;
}

export const TableRow: FunctionComponent<TableRowProps> = ({
  text,
  className,
}) => {
  return (
    <div className={classNames(className, "sectionContainer")}>
      <h1 className={classNames("section")}>{text}</h1>
    </div>
  );
};