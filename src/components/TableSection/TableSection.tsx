import React, { FunctionComponent } from "react";
import { TextLine } from "../../types/textLine";
import "./TableSection.css";

export interface TableSectionProps {
  headers: string[];
  textLines: TextLine[];
}

export const TableSection: FunctionComponent<TableSectionProps> = ({
  headers,
  textLines,
}) => {
  return (
    <>
      {textLines.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {textLines.map((textLine, index) => (
              <tr key={index}>
                {/* convert each text into the row */}
                {Object.values(textLine).map((value, index) => (
                  <td key={index} className="tableCell">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
