import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGeobase = createAsyncThunk('geobase/fetchGeobase', async (filePath) => {
  const response = await fetch(filePath);
  return response.json();
})

const geobaseSlice = createSlice({
  name: 'geobase',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    // добавление
    addGeoObject: (state, action) => {
      state.data.push(action.payload)
    },
    // удаление
    deleteGeoObject: (state, action) => {
      state.data = state.data.filter(obj => obj.properties.id != action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGeobase.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGeobase.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(fetchGeobase.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },

});

// для компонентов
export const { addGeoObject, deleteGeoObject } = geobaseSlice.actions;
// для стора
export default geobaseSlice.reducer;