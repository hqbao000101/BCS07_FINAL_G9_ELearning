import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { courseService } from "../../services/courseServices";

const initialState = {
  courses: [],
  selectedCourse: {},
};

export const getAllCourses = createAsyncThunk(
  "course/getAllCourses",
  async (tenKhoaHoc = "") => {
    const res = await courseService.getAllCourses(tenKhoaHoc);
    return res.data.content;
  }
);

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setSelectedCourse: (state, action) => {
      state.selectedCourse = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      state.courses = action.payload;
    });
  },
});

export const { setSelectedCourse } = courseSlice.actions;
export default courseSlice.reducer;
