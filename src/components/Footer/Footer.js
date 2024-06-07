import "./Footer.css";
import { FaWind } from "react-icons/fa";
import { IoIosRainy } from "react-icons/io";
const Footer = ({
  data
}) => {
  return (
    <div className="footer">
      <div className="top">
        <span>Air Conditions</span>
        <button className="button">see more</button>
      </div>
      <div className="info">
        <div className="first">
          <div>
            <FaWind />
            <span>Wind</span>
          </div>
          <div><span style={{fontSize : "20px"}}>{data ? data.current.wind_mph :  0.3} mph</span></div>
        </div>
        <div className="first">
          <div>
            <IoIosRainy />
            <span>Feels Like</span>
          </div>
          <div><span style={{fontSize : "20px"}}>{data ? data.current.feelslike_c : 30} &deg; C</span></div>
        </div>
      </div>
      </div>
  );
};

export default Footer;
