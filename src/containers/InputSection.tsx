import { InputSection } from "../components/InputSection/InputSection";
import React, { FunctionComponent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  errorMessageActions,
  identifiersActions,
  textLineActions,
} from "../store/slices";
import { getTextsWithData } from "../api/getTexts";
import { TextLine } from "../types/textLine";

export const InputSectionContainer: FunctionComponent = () => {
  const {
    identifiers: { correctIds, incorrectIds },
    errorMessage: { message },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (correctIds.length > 0) {
      (async () => {
        let texts: TextLine[] = [];
        try {
          texts = await getTextsWithData(correctIds);
        } catch {
          dispatch(
            errorMessageActions.setMessage(
              "При получении данных с сервера произошла ошибка"
            )
          );
        }
        dispatch(textLineActions.setTextLines(texts));
      })();
    }
  }, [correctIds, dispatch]);

  useEffect(() => {
    if (incorrectIds.length > 0) {
      dispatch(
        errorMessageActions.setMessage(
          `Некоторые идентификаторы введены некорректно: ${incorrectIds.join(
            ", "
          )}. Идентификаторами должны быть числа, перечисленные через , или ;`
        )
      );
    }
  }, [incorrectIds, dispatch]);

  const setIdsAndGetTexts = (idsInput: string) => {
    dispatch(identifiersActions.setIds(idsInput));
  };

  return (
    <InputSection
      label="Идентификаторы строк:"
      inputPlaceholder="1, 2, 3..."
      buttonText="Подсчитать"
      errorMessage={message}
      onButtonClick={(ids: string) => setIdsAndGetTexts(ids)}
    />
  );
};
