import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "../features/location/locationSlice";

const rootReducer = {
  location: locationReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
