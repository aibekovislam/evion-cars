import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, DETAILS_URL } from "../../utils/consts";

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Ошибка при получении данных c сервера");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getOneCar = createAsyncThunk("cars/fetchCars", async (id) => {
  try {
    const response = await fetch(`${DETAILS_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Ошибка при получении данных c сервера");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  cars: [],
  status: "idle",
  error: null,
  oneCar: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.cars = action.payload;
    });
    builder.addCase(fetchCars.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });
  },
});

export default carsSlice.reducer;

export const selectCars = (state) => state.cars.cars;
