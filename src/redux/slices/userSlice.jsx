import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "../../services/userServices";
import { getLocal } from "../../utils/localStorage";

const initialState = {
  users: [],
  loggedUser: getLocal("user"),
  selectedUser: {},
};

export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  const res = await userService.getAllUsers();
  return res.data.content;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedUser: (state, action) => {
      if (state.loggedUser === "") {
        state.loggedUser = action.payload;
      }
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    })
  }
});

export const { setLoggedUser, setSelectedUser } = userSlice.actions;
export default userSlice.reducer;
