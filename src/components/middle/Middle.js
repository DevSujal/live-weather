import EachTime from "./EachTime/EachTime"
import "./Middle.css"

const Middle = () => {
  return (
    <div className="middle">
      <span>Todays Forcast</span>
      <div className="all-time">
        <EachTime />
        <span className="border"></span>
        <EachTime />
        <span className="border"></span>
        <EachTime />
        <span className="border"></span>
        <EachTime />
        <span className="border"></span>
        <EachTime />
        <span className="border"></span>
        <EachTime />
      </div>
    </div>
  )
}

export default Middle
