import { createSlice } from "@reduxjs/toolkit";
import { SelectedOption } from "../common/types";
import { RootState } from ".";

export const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    selectedOptions: [] as SelectedOption[],
  },
  reducers: {
    updateSelectedOptions: (state, action) => {
      state.selectedOptions = action.payload;
    },
  },
});

export const { updateSelectedOptions } = questionsSlice.actions;

export default questionsSlice.reducer;

export const questionsSelector = (state: RootState) => state.question;
