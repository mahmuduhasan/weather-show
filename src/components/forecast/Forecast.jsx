import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../weather/weatherSlice";
import ForecastShow from "./ForecastShow";

function Forecast({ cityKey }) {
  const [forecastData, setForecastData] = useState(null);
  useEffect(() => {
    async function getCurrentData() {
      try {
        const res = await fetch(
          `${BASE_URL}/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}`
        );
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await res.json();
        setForecastData(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getCurrentData();
  }, [cityKey]);
  return (
    forecastData && (
      <div className="h-3/6 rounded-xl mt-3 text-center">
        <h1 className="text-3xl p-5 font-semibold capitalize text-white">
          {forecastData.Headline.Text}
        </h1>
        <div className="flex justify-around flex-wrap px-1 gap-1">
          {forecastData.DailyForecasts.map((forecast) => (
            <ForecastShow forecast={forecast} key={forecast.Date} />
          ))}
        </div>
      </div>
    )
  );
}

export default Forecast;
