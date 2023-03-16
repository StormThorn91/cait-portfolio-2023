import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./theme/theme-slice";

export const store = configureStore({
  reducer: {
    themeSlice: themeReducer
  },
});