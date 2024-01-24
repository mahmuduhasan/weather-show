import { useDispatch, useSelector } from "react-redux";
import Weather from "./components/weather/Weather";
import { useEffect, useState } from "react";
import {
  fetchAddress,
  API_KEY,
  BASE_URL,
} from "./components/weather/weatherSlice";

function App() {
  const dispatch = useDispatch();
  const { city } = useSelector((state) => state.weather);
  const [cityKey, setCityKey] = useState("");
  useEffect(() => {
    dispatch(fetchAddress());
  }, [dispatch]);
  useEffect(() => {
    async function getLocationKey() {
      const res = await fetch(
        `${BASE_URL}/locations/v1/cities/search?apikey=${API_KEY}&q=${city.toLowerCase()}`
      );
      const data = await res.json();
      setCityKey(data[0].Key);
    }
    if (city !== "") {
      getLocationKey();
    }
  }, [city]);
  return (
    <div className="bg-gradient-to-l from-cyan-500 to-blue-500 h-screen flex items-center justify-center">
      {cityKey && <Weather cityKey={cityKey} />}
    </div>
  );
}

export default App;
