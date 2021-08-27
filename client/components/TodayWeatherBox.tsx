import TemperatureGap from "./TemperatureGap";

interface TodayWeatherBoxProps {
  todayTemp?: number;
}

const TodayWeatherBox = ({ todayTemp = 28 }: TodayWeatherBoxProps) => {
  return (
    <div className="today-weather-box">
      <div className="temperature-box">
        <div className="current-value">{todayTemp}°C</div>
        <TemperatureGap />
      </div>
    </div>
  );
};

export default TodayWeatherBox;
