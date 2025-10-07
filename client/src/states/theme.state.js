import { createSlice } from "@reduxjs/toolkit";

export const initState = {
  mode: "light",
};

export const globalSlice = createSlice({
  name: "global",
  initState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
