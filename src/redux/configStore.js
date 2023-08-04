import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    title: (state = "React Template", action) => {
      return state;
    },
  },
});
