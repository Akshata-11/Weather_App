import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setweatherInfo] = useState({
    city: "Wanderlust",
    feelsLike: 28,
    temp: 24,
    tempMin: 24,
    tempMax: 25.05,
    humidity: 55,
    weather: "haze",
  });
  let updateIno = (newInfo) => {
    setweatherInfo(newInfo);
  };
  return (
    <div>
      <h1>Clime</h1>
      <SearchBox updateIno={updateIno} />
      <InfoBox Info={weatherInfo} />
    </div>
  );
}
