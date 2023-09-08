import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/consts";

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
    try {
        const response = await fetch(BASE_URL);
        if(!response.ok) {
            throw new Error('Ошибка при получении данных c сервера')
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
})

export const fetchOneImage = createAsyncThunk('oneImage/fetchCarImage', async (id) => {
    try {
        const response = await fetch(`https://online.moysklad.ru/api/remap/1.2/entity/product/${id}/images`);
        if(!response.ok) {
            throw new Error('Ошибка при получении картинок электромобиля проверьте id которое вы передаете.')
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    cars: [],
    status: "idle",
    error: null,
}

const carsSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCars.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchCars.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.cars = action.payload
        });
        builder.addCase(fetchCars.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.error.message
        })
    }
})

export default carsSlice.reducer

export const selectCars = (state) => state.cars.cars