const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      console.log(state, action.payload);
    },
  },
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;
