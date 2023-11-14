import { createSlice } from "@reduxjs/toolkit";

const initialYearState = { searchYear: null };

const searchSlice = createSlice({
  name: "search",
  initialState: initialYearState,
  reducers: {
    setYear(state, action) {
      state.searchYear = action.payload;
    },
    removeYear(state) {
      state.searchYear = null;

    },
  },
});

export default searchSlice;
