import { createSlice } from "@reduxjs/toolkit";
import { TextLine } from "../../types/textLine";

//slice to store information for table rendering: array of data which contains text, amount of words ans vowels in it
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
    // reducer to simply set array of texts with amount of words and vowels
    setTextLines: (state, { payload: textLines }) => {
      state.textLines = textLines;
    },
  },
});

export const textLineReducer = slice.reducer;
export const textLineActions = slice.actions;
