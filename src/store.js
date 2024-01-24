import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./components/weather/weatherSlice";
const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default store;
