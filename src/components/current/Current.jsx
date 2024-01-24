import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../weather/weatherSlice";
import { useSelector } from "react-redux";
import Time from "../time/Time";
function Current({ cityKey }) {
  const { city } = useSelector((state) => state.weather);
  const [currentTemp, setCurrentTemp] = useState(null);
  const date = new Date(currentTemp?.LocalObservationDateTime).toDateString();
  useEffect(() => {
    async function getCurrentData() {
      try {
        const res = await fetch(
          `${BASE_URL}/currentconditions/v1/${cityKey}?apikey=${API_KEY}`
        );
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await res.json();
        setCurrentTemp(data[0]);
      } catch (error) {
        console.log(error.message);
      }
    }
    getCurrentData();
  }, [cityKey]);
  console.log(currentTemp);
  return (
    currentTemp && (
      <div className="h-4/6 flex items-center justify-center rounded-xl flex-wrap">
        <img
          src={`./icons/${currentTemp.WeatherIcon}.svg`}
          alt={currentTemp.WeatherText}
          className="w-1/2 h-80"
        />
        <div className="w-1/2 flex flex-col gap-1">
          <h3 className="font-semibold text-3xl bg-purple-400 rounded-l-md text-center text-white">
            {city}
          </h3>
          <div className="flex flex-col gap-1 text-white">
            <p className="bg-violet-400 text-center rounded-l-md font-bold">
              {date}
            </p>
            <Time />
            <div className="bg-purple-400 rounded-l-md text-center py-1">
              <h2 className="text-3xl md:text-8xl">
                {Math.floor(currentTemp.Temperature.Metric.Value)}&deg;
                {currentTemp.Temperature.Metric.Unit}
              </h2>
              <p className="uppercase font-semibold">
                {currentTemp.WeatherText}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Current;
