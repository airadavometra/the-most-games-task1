import { createSlice } from "@reduxjs/toolkit";

interface State {
  message: string;
}

const initialState: State = {
  message: "",
};

const slice = createSlice({
  name: "errorMessage",
  initialState,
  reducers: {
    setMessage: (state, { payload: newMessage }) => {
      state.message = newMessage;
    },
  },
});

export const errorMessageReducer = slice.reducer;
export const errorMessageActions = slice.actions;
