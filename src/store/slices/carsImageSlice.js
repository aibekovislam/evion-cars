import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOneImage = createAsyncThunk('oneImage/fetchCarImage', async (id) => {
    try {
        const response = await fetch(`https://online.moysklad.ru/api/remap/1.2/entity/product/${id}/images`);
        if(!response.ok) {
            throw new Error('Ошибка при получении картинок электромобиля проверьте id которое вы передаете.')
        }
        const data = await response.json();
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    carImage: [],
    status: "idle",
    error: null,
}

const carImage = createSlice({
    name: "carImage",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOneImage.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchOneImage.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.carImage = action.payload
        });
        builder.addCase(fetchOneImage.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.error.message
        })
    }
})

export default carImage.reducer

export const selectCarImage = (state) => state.carImage.carImage