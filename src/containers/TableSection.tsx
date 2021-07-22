import { TableSection } from "../components/TableSection/TableSection";
import React, { FunctionComponent } from "react";
import { useAppSelector } from "../store/hooks";

export const TableSectionContainer: FunctionComponent = () => {
  const state = useAppSelector((state) => state);

  return (
    <TableSection
      headers={["Текст", "Количество слов", "Количество гласных"]}
      textLines={state.textLines.textLines}
    />
  );
};
