import { createSlice } from "@reduxjs/toolkit";

//Slice to store an error message. We can get it from input or from server.
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
    // reducer to simply set error message
    setMessage: (state, { payload: newMessage }) => {
      state.message = newMessage;
    },
  },
});

export const errorMessageReducer = slice.reducer;
export const errorMessageActions = slice.actions;
