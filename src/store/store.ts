import { configureStore } from "@reduxjs/toolkit";
import catSlice from "../features/catSlice";

export const store = configureStore({
  reducer: {
    catSl: catSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
