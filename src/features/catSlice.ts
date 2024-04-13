import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ICats } from "../types/types";
import axios from "axios";

export const fetchCats = createAsyncThunk("catSl/fetchCats", async () => {
  const response = await axios.get("https://cataas.com/api/cats?tags=cute");
  const responseData: ICats[] = response.data;
  return responseData;
});

const initialState: ICats[] = [];

export const catSlice = createSlice({
  name: "catSl",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchCats.fulfilled,
      (state, action: PayloadAction<ICats[]>) => {
        state.push(action.payload);
      }
    );
  },
});

export default catSlice.reducer;
export const {} = catSlice.actions;
