import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Search from "./components/Search/Search";
import WeatherInfo from "./components/weatherInfo/WeatherInfo";
import Top from "./components/Top/Top";
import Middle from "./components/middle/Middle";
import Footer from "./components/Footer/Footer";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function App() {
  const myRef = useRef();

  const [city, setCity] = useState("");
  const [data, setData] = useState()
  useEffect(() => {
     myRef.current.addEventListener("keypress",(e) => {
      if (e.key === "Enter") {
        axios.get(
          `https://api.weatherapi.com/v1/current.json?key=b13989793f184149a91141538230103&q=${e.target.value}`
        ).then((response) => {
          setData(() => {
            return response.data
          })
        }).catch((err)=> {
          console.log("error occured", err?.message)
        }).finally(() =>{
          setCity("")
        })
      }
    });
  }, []);

  return (
    
    <div className="app">
      <Sidebar />
      <div className="main-container">
        <Search myRef={myRef} setCity = {setCity} city={city} />
        <Top data = {data}/>
        <Middle />
        <Footer data = {data}/>
      </div>
      <WeatherInfo />
    </div>
  );
}

export default App;
