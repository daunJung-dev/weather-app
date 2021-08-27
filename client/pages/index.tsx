import Region from "../components/Region";
import TemperatureGap from "../components/TemperatureGap";
import TodayWeatherBox from "../components/TodayWeatherBox";

export default function Home() {
  return (
    <div className="app">
      <main className="main-title">{"Weather app"}</main>
      <div className="main-container">
        <Region />
        <TodayWeatherBox />
      </div>
    </div>
  );
}
