import { useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <p className="bg-violet-400 text-center rounded-l-md font-bold">{time}</p>
  );
}

export default Time;
