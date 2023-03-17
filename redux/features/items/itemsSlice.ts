import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  items: {},
  error: "",
};

export const getItems = createAsyncThunk("items/fetch", async () => {
  const { data } = await axios.get("https://api-task.bit68.com/en/api/items/");
  return data;
});

const itemsSlice = createSlice({
  name: "items",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getItems.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getItems.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.error = "";
    });

    builder.addCase(getItems.rejected, (state, action) => {
      state.loading = false;
      state.items = {};
      state.error = action.error.message!;
    });
  },
  reducers: {},
});

export default itemsSlice.reducer;
