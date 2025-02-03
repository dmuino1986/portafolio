import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import navbarReducer from './navBarSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    navbar: navbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;