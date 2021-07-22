import { createSlice } from "@reduxjs/toolkit";

//slice to store information to get data from back-end and inform user about error in input: array of correct ids and array of incorrect ids
interface State {
  correctIds: number[];
  incorrectIds: string[];
}

const initialState: State = {
  correctIds: [],
  incorrectIds: [],
};

const slice = createSlice({
  name: "identifiers",
  initialState,
  reducers: {
    // reducer to convert the input string to arrays of correct and incorrect ids
    setIds: (state, { payload: idsInput }) => {
      //split the input string to array by comma and semicolon
      const ids = idsInput.split(/\s*[;,]\s*/gm);
      //need sets to remove duplicates
      const correctIds = new Set<number>();
      const incorrectIds = new Set<string>();
      //check every array item for correctness
      for (const id of ids) {
        //if NaN, then incorrect, else - ok
        if (isNaN(id)) {
          incorrectIds.add(id);
        } else {
          correctIds.add(Number(id));
        }
      }
      //assign sets to state
      state.correctIds = Array.from(correctIds);
      state.incorrectIds = Array.from(incorrectIds);
    },
  },
});

export const identifiersReducer = slice.reducer;
export const identifiersActions = slice.actions;
