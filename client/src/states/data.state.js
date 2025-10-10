import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  userId: "63701cc1f03239b7f700000e",
};

export const dataSlice = createSlice({
  name: "dataGlobal",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setId } = dataSlice.actions;
export default dataSlice.reducer;
