import classNames from "classnames";
import React, { FunctionComponent } from "react";
import "./TableSection.css";

export interface TableSectionProps {
  headers: string[];
}

export const TableSection: FunctionComponent<TableSectionProps> = ({
  headers,
}) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};
