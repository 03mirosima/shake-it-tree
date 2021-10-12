import { createSlice } from "@reduxjs/toolkit";

const treeSlice = createSlice({
  name: "tree",
  initialState: {
    apples: [
      {
        id: 1,
        top: "102px",
        left: "814px",
        isDropped: false,
      },
      {
        id: 2,
        top: "124px",
        left: "940px",
        isDropped: false,
      },
      {
        id: 3,
        top: "168px",
        left: "961px",
        isDropped: false,
      },
      { id: 4, top: "61px", left: "934px", isDropped: false },
      { id: 5, top: "229px", left: "899px", isDropped: false },
      { id: 6, top: "229px", left: "858px", isDropped: false },
      { id: 7, top: "162px", left: "861px", isDropped: false },
      { id: 8, top: "108px", left: "879px", isDropped: false },
      { id: 9, top: "191px", left: "805px", isDropped: false },
    ],
    treeShake: false,
  },
  reducers: {
    setTreeShake: (state) => {
      state.treeShake = !state.treeShake;
    },
    setAppleDown: (state, action) => {
      const id = action.payload.id;
      const isDropped = action.payload.isDropped;
      state.apples[id].isDropped = action.payload.isDropped;
      if (isDropped) {
        state.apples[id].top = "600px";
        state.apples[id].transition = action.payload.transition;
      }
    },
    setAppleBasket: (state, action) => {
      const id = action.payload.id;
      const isDropped = state.apples[id].isDropped;

      if (isDropped) {
        state.apples[id].left = "1300px";
        state.apples[id].transition = action.payload.transition;
      }
    },
  },
  extraReducers: {},
});
export const selectAllApples = (state) => state.tree.apples;
export const { setTreeShake, setAppleDown, setAppleBasket } = treeSlice.actions;

export default treeSlice.reducer;
