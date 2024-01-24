import Current from "../current/Current";
import Forecast from "../forecast/Forecast";

function Weather({ cityKey }) {
  return (
    <div className="h-full flex flex-col">
      <Current cityKey={cityKey} />
      <Forecast cityKey={cityKey} />
    </div>
  );
}

export default Weather;
