import { errorMessageReducer } from "./slices/errorMessage";
import { textLineReducer } from "./slices/textLines";
import { identifiersReducer } from "./slices/identifiers";
import { configureStore } from "@reduxjs/toolkit";

const reducer = {
  identifiers: identifiersReducer,
  textLines: textLineReducer,
  errorMessage: errorMessageReducer,
};

export const store = configureStore({
  reducer,
});
