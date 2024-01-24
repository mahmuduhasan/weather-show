import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../../apiGeocoding";

export const API_KEY = "qLnFxr9ADdHFUv4Zr2jiFT6GBZxceAqo";
export const BASE_URL = "https://dataservice.accuweather.com";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk(
  "weather/fetchAddress",
  async function () {
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };
    const addressObj = await getAddress(position);
    const city = addressObj?.city;
    return city;
  }
);

const initialState = {
  city: "",
  status: "",
  error: "",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = "idle";
        state.city = action.payload;
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { city, status, error } = weatherSlice.actions;

export default weatherSlice.reducer;
