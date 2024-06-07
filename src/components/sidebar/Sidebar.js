import "./Sidebar.css";
import { RiWindyLine } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { IoIosOptions } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMapSharp } from "react-icons/io5";
import { useRef, useState } from "react";

const Sidebar = () => {
  const [toggle, setoggle] = useState(false)
  const sideRef = useRef()

  const handleClick = () => {

    if(window.innerWidth > 600){
      return
    }
    if(!toggle) {
      sideRef.current.style.height = "fit-content"
      sideRef.current.style.background = "rgb(50, 57, 57)"
      setoggle(!toggle)
    }else {
      sideRef.current.style.height = "50px"
      sideRef.current.style.background = "black"
      setoggle(!toggle)
    }
  }

  return (
    <div className="sidebar"  ref={sideRef}>
      <div className="icon main" onClick={handleClick}>
        <RiWindyLine  />
      </div>
      <div className="icon">
        <TiWeatherPartlySunny />
        <span>weather</span>
      </div>
      <div className="icon">
        <IoIosOptions />
        <span>Cities</span>
      </div>
      <div className="icon">
        <IoMapSharp />
        <span>map</span>
      </div>
      <div className="icon">
        <IoSettingsSharp />
        <span>Settings</span>
      </div>
    </div>
  );
};
export default Sidebar;
