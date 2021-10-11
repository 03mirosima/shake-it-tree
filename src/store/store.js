import { configureStore } from "@reduxjs/toolkit";
import treeReducer from "./treeSlice";

export default configureStore({
  reducer: { tree: treeReducer },
});
