import { createSlice } from "@reduxjs/toolkit";
import { TextLine } from "../../types/textLine";

interface State {
  textLines: TextLine[];
}

const initialState: State = {
  textLines: [],
};

const slice = createSlice({
  name: "textLines",
  initialState,
  reducers: {
    setTextLines: (state, { payload: textLines }) => {
      state.textLines = textLines;
    },
    addTextLine: (state, { payload: textLine }) => {
      state.textLines.push(textLine);
    },
  },
});

export const textLineReducer = slice.reducer;
export const textLineActions = slice.actions;
