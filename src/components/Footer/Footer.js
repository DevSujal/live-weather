import "./Footer.css";
import { FaWind } from "react-icons/fa";
import { IoIosRainy } from "react-icons/io";
const Footer = () => {
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
          <div><span style={{fontSize : "20px"}}>0.3 m/s</span></div>
        </div>
        <div className="first">
          <div>
            <IoIosRainy />
            <span>Chance Of Rain</span>
          </div>
          <div><span style={{fontSize : "20px"}}>0%</span></div>
        </div>
      </div>
      </div>
  );
};

export default Footer;
