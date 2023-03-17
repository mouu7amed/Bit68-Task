import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  slider: {},
  error: "",
};

export const getSliderImages = createAsyncThunk("slider/fetch", async () => {
  const { data } = await axios.get(
    "https://api-task.bit68.com/en/api/slider_image/"
  );
  return data;
});

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSliderImages.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getSliderImages.fulfilled, (state, action) => {
      state.loading = false;
      state.slider = action.payload;
      state.error = "";
    });

    builder.addCase(getSliderImages.rejected, (state, action) => {
      state.loading = false;
      state.slider = {};
      state.error = action.error.message!;
    });
  },
  reducers: {},
});

export default sliderSlice.reducer;
