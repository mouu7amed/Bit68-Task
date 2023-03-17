import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  categories: {},
  error: "",
};

export const getCategories = createAsyncThunk("categories/fetch", async () => {
  const { data } = await axios.get(
    "https://api-task.bit68.com/en/api/categories/"
  );
  return data;
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
      state.error = "";
    });

    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = false;
      state.categories = {};
      state.error = action.error.message!;
    });
  },
  reducers: {},
});

export default categoriesSlice.reducer;
