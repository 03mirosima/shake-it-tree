import { createSlice } from "@reduxjs/toolkit";

const treeSlice = createSlice({
  name: "tree",
  initialState: {
    apples: [
      {
        id: 1,
        top: "102px",
        left: "63px",
        isDropped: false,
      },
      {
        id: 2,
        top: "135px",
        left: "164px",
        isDropped: false,
      },
      {
        id: 3,
        top: "207px",
        left: "198px",
        isDropped: false,
      },
      { id: 4, top: "48px", left: "177px", isDropped: false },
      { id: 5, top: "229px", left: "100px", isDropped: false },
      { id: 6, top: "207px", left: "142px", isDropped: false },
      { id: 7, top: "100px", left: "125px", isDropped: false },
      { id: 8, top: "102px", left: "225px", isDropped: false },
      { id: 9, top: "156px", left: "116px", isDropped: false },
    ],
    treeShake: false,
  },
  reducers: {
    /* For toggling tree's shaking state */
    setTreeShake: (state) => {
      state.treeShake = !state.treeShake;
    },
    /* We check for apple's dropping state then we dropped the apple using top and transition */
    setAppleDown: (state, action) => {
      const id = action.payload.id;
      const isDropped = action.payload.isDropped;
      state.apples[id].isDropped = action.payload.isDropped;
      if (isDropped) {
        state.apples[id].top = "350px";
        state.apples[id].transition = action.payload.transition;
      }
    },
    /* We check for apple's dropping state then we slide the apple to the basket */
    setAppleBasket: (state, action) => {
      const id = action.payload.id;
      const isDropped = state.apples[id].isDropped;

      if (isDropped) {
        state.apples[id].top = "330px";
        state.apples[id].left = `${action.payload.left}px`;
        state.apples[id].transition = action.payload.transition;
      }
    },
  },
  extraReducers: {},
});
export const selectAllApples = (state) => state.tree.apples;
export const { setTreeShake, setAppleDown, setAppleBasket } = treeSlice.actions;

export default treeSlice.reducer;
