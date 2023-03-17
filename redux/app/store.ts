import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categories/categoriesSlice";
import sliderReducer from "../features/slider/sliderSlice";
import brandsReducer from "../features/brands/brandsSlice";
import itemsReducer from "../features/items/itemsSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    slider: sliderReducer,
    brands: brandsReducer,
    items: itemsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
