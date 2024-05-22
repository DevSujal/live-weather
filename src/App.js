import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Search from "./components/Search/Search";
import WeatherInfo from "./components/weatherInfo/WeatherInfo";
import Top from "./components/Top/Top";
import Middle from "./components/middle/Middle";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
        <Sidebar />
        <div className="main-container">
          <Search />
          <Top />
          <Middle />
          <Footer />
        </div>
        <WeatherInfo />
    </div>
  );
}

export default App;
