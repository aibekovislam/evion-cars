import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./slices/carsSlice";
import carImagesReducer from "./slices/imagesSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    images: carImagesReducer,
  },
});

export default store;
