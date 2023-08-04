import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import courseSlice from "./slices/courseSlice";

export const store = configureStore({
  reducer: {
    title: (state = "Cyber ELearning", action) => {
      return state;
    },
    user: userSlice,
    course: courseSlice,
  },
});
