import Frame from "./Frame";
import TempMinMax from "./TempMinMax";

function ForecastShow({ forecast }) {
  const date = new Date(forecast.Date).toDateString();
  return (
    <div className="bg-stone-200 p-2 flex flex-col rounded-xl">
      <h4 className="text-xl">{date}</h4>
      <div className="flex items-center gap-5 justify-center">
        <Frame data={forecast.Day} time="Day" />
        <Frame data={forecast.Night} time="Night" />
      </div>
      <div className="flex items-center gap-5 justify-center">
        <TempMinMax data={forecast.Temperature.Minimum.Value} type="Minimum" />
        <TempMinMax data={forecast.Temperature.Maximum.Value} type="Maximum" />
      </div>
    </div>
  );
}

export default ForecastShow;
