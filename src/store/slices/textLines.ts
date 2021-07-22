import { createSlice } from "@reduxjs/toolkit";

interface State {
  textLine: string;
}

const initialState: State = {
  textLine: "",
};

const slice = createSlice({
  name: "textLines",
  initialState,
  reducers: {
    setFilter: (state, { payload: newFilter }) => {
      state.textLine = newFilter;
    },
  },
});

export const textLineReducer = slice.reducer;
export const textLineActions = slice.actions;
