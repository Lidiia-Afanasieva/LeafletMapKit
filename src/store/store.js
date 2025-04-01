import { configureStore } from "@reduxjs/toolkit";
import geobaseReducer from '../features/geobase/geobaseSlice'

export const store = configureStore({
  reducer: {
    geobase: geobaseReducer,
  }
});