import { createSlice } from "@reduxjs/toolkit";
import { getTsBuildInfoEmitOutputFilePath } from "typescript";

interface NavbarState {
  isVisible: boolean;
  isMenuActive: boolean;
}

const initialState: NavbarState = {
  isVisible: false,
  isMenuActive: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    showNavbar: (state) => {
      state.isVisible = true;
    },
    hideNavbar: (state) => {
      state.isVisible = false;
    },
    showMenu: (state) => {
      state.isMenuActive = true;
    },
    hideMenu: (state) => {
      state.isMenuActive = false;
    },
  },
});

export const { showNavbar, hideNavbar, showMenu, hideMenu } =
  navbarSlice.actions;
export default navbarSlice.reducer;
