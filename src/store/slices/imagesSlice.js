import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IMAGES_URL } from "../../utils/consts";

export const getImages = createAsyncThunk("images/fetchImages", async (id) => {
  try {
    const response = await fetch(`${IMAGES_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Ошибка при получении данных c сервера");
    }
    const data = await response.json();
    return data.rows;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error so it can be handled in the component.
  }
});

const initialState = {
  images: [],
  status: "idle",
  error: null,
};

const carImagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getImages.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getImages.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.images = action.payload; // Update the images array, not cars
    });
    builder.addCase(getImages.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });
  },
});

export default carImagesSlice.reducer;

export const selectImages = (state) => state.images;
