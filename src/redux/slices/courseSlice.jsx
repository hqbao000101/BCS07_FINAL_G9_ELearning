import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      console.log(state, action.payload);
    },
  },
});

export const { setCourses } = courseSlice.actions;
export default courseSlice.reducer;
