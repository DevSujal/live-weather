import "./Top.css";
import { MdSunny } from "react-icons/md";
const Top = ({
  data
}) => {
  return (
    <div className="top">
      <div className="left">
        {
          console.log(data)}
        <span className="city">{data ? data.location.name : "Nagpur"}</span>
        <span>humidity {data ? data.current.humidity : 40}</span>
        <span className="city">{data ? data.current.temp_c : 30}&deg; C</span>
      </div>
      <div className="right">
        {data ? <img src={data.current.condition.icon} width={300} height={300} alt="icon" /> : <MdSunny color="yellow" />}
      </div>
    </div>
  );
};

export default Top;
