import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  brands: {},
  error: "",
};

export const getBrands = createAsyncThunk("brands/fetch", async () => {
  const { data } = await axios.get("https://api-task.bit68.com/en/api/brands/");
  return data;
});

const brandSlice = createSlice({
  name: "brands",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBrands.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.loading = false;
      state.brands = action.payload;
      state.error = "";
    });

    builder.addCase(getBrands.rejected, (state, action) => {
      state.loading = false;
      state.brands = {};
      state.error = action.error.message!;
    });
  },
  reducers: {},
});

export default brandSlice.reducer;
