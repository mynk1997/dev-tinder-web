import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    addFeed: (state, action) => {
      state.user = action.payload;
    },
    removeUserFromFeed: (state, action) => {
      const newFeed = state.filter((user) => user._id !== action.payload);
      return newFeed;
    },
  },
});

export const { addFeed, removeUserFromFeed } = feedSlice.actions;
export default feedSlice.reducer;
