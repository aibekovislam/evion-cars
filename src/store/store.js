import { configureStore } from "@reduxjs/toolkit";
import carsReducer from './slices/carsSlice'
import carImageReducer from './slices/carsImageSlice'

const store = configureStore({
    reducer: {
        cars: carsReducer,
        carImage: carImageReducer
    }
})

export default store