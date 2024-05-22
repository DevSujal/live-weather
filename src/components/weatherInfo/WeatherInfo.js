import EachDay from "./EachDay/EachDay"
import "./WeatherInfo.css"

const WeatherInfo = () => {
  return (
    <div className='weather'>
        <span>7 Day Wether</span>
        <EachDay day = "Today" type= "sunny"/>
        <EachDay day = "Tue" type="cloudy"/>
        <EachDay day = "wed" type= "sunny"/>
        <EachDay day = "Thu" type= "sunny"/>
        <EachDay day = "Fri" type= "sunny"/>
        <EachDay day = "Sat" type="cloudy"/>
        <EachDay day = "Sun" type="cloudy"/>
    </div>
  )
}

export default WeatherInfo
