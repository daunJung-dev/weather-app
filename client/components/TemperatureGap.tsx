interface TemperatureGapProps {
  highTemp?: number;
  lowTemp?: number;
}

type TempBoxProps = {
  value: number;
  label: string;
  className?: string;
};

const TempBox = ({ value, label, className }: TempBoxProps) => (
  <li className={`${className}-temp-box`}>
    <div className="label">{label}:</div>
    <div className="value">{value}°C</div>
  </li>
);

const TemperatureGap = (props: TemperatureGapProps) => {
  const tempDatas = [
    { label: "최고", value: props.highTemp || 30, className: "high" },
    { label: "최저", value: props.lowTemp || 20, className: "low" }
  ];
  return (
    <ul className="temperature-gap">
      {tempDatas.map((data, index) => (
        <TempBox key={"temp" + index} value={data.value} label={data.label} />
      ))}
    </ul>
  );
};

export default TemperatureGap;
