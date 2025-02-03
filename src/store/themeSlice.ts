import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      document.documentElement.setAttribute(
        "data-theme",
        state.isDarkMode ? "dark" : "light"
      );
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
