import { createSlice } from "@reduxjs/toolkit";

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
    setIds: (state, { payload: idsInput }) => {
      const ids = idsInput.split(/\s*[;,]\s*/gm);
      const correctIds = new Set<number>();
      const incorrectIds = new Set<string>();
      for (const id of ids) {
        if (isNaN(id)) {
          incorrectIds.add(id);
        } else {
          correctIds.add(Number(id));
        }
      }
      state.correctIds = Array.from(correctIds);
      state.incorrectIds = Array.from(incorrectIds);
    },
  },
});

export const identifiersReducer = slice.reducer;
export const identifiersActions = slice.actions;
