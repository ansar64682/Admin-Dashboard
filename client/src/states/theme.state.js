import { createSlice } from "@reduxjs/toolkit";

export const initState = {
  mode: "dark",
};

export const themelSlice = createSlice({
  name: "themeGlobal",
  initialState: initState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = themelSlice.actions;

export default themelSlice.reducer;
