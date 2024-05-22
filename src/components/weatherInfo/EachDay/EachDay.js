import "./EachDay.css";
import { MdSunny } from "react-icons/md";

const EachDay = ({ day, type }) => {
  return (
    <>
      <div className="eachday">
        <span className="span">{day}</span>
        <div className="type">
          <MdSunny color="yellow" />
          <span>{type}</span>
        </div>
        <span>40</span>
      </div>
      {day !== "Sun" && <hr />}
    </>
  );
};

export default EachDay;
