import { createSlice } from '@reduxjs/toolkit';

interface NavbarState {
  isVisible: boolean;
}

const initialState: NavbarState = {
  isVisible: false,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    showNavbar: (state) => {
      state.isVisible = true;
    },
    hideNavbar: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showNavbar, hideNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;