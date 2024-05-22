import "./Top.css";
import { MdSunny } from "react-icons/md";
const Top = () => {
  return (
    <div className="top">
      <div className="left">
        <span className="city">Nagpur</span>
        <span>chance of rain 0%</span>
        <span className="city">30</span>
      </div>
      <div className="right">
        <MdSunny color="yellow" />
      </div>
    </div>
  );
};

export default Top;
