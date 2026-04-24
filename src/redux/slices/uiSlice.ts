import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileMenu: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.mobileMenu = !state.mobileMenu;
    },
  },
});

export const { toggleMenu } = uiSlice.actions;
export default uiSlice.reducer;