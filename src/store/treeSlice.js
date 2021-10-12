import { createSlice } from "@reduxjs/toolkit";

const treeSlice = createSlice({
  name: "tree",
  initialState: {
    apples: [
      {
        id: 1,
        top: "102px",
        left: "814px",
      },
      {
        id: 2,
        top: "124px",
        left: "940px",
      },
      {
        id: 3,
        top: "168px",
        left: "961px",
      },
      { id: 4, top: "61px", left: "934px" },
      { id: 5, top: "229px", left: "899px" },
      { id: 6, top: "229px", left: "858px" },
      { id: 7, top: "162px", left: "861px" },
      { id: 8, top: "108px", left: "879px" },
      { id: 9, top: "191px", left: "805px" },
    ],
    treeShake: false,
  },
  reducers: {
    setTreeShake: (state) => {
      state.treeShake = !state.treeShake;
    },
    setAppleDown: (state, action) => {
      const item_ = state.apples.find((item) => item.id === action.payload.id);
      if (item_) {
        item_.top = "600px";
        item_.transition = action.payload.transition;
      }
    },
    setAppleBasket: (state, action) => {
      const item_ = state.apples.find((item) => item.id === action.payload.id);
      if (item_) {
        item_.left = "1300px";
        item_.transition = action.payload.transition;
      }
    },
  },
  extraReducers: {},
});
export const selectAllApples = (state) => state.tree.apples;
export const { setTreeShake, setAppleDown, setAppleBasket } = treeSlice.actions;

export default treeSlice.reducer;
