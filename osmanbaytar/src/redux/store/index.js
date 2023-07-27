import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "../slices/languageSlice";
import themeSlice from "../slices/themeSlice";

const store = configureStore({
  reducer: {
    language: languageSlice,
    theme: themeSlice,
  },
});

export default store;
