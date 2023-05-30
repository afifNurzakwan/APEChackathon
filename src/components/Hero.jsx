import { Link } from "react-router-dom";
import { rumahPanjang } from "../assets/img";
import { longHouse } from "../assets/img";
import "../css/Homepage.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-background"></div>
      <div className="hero-content">
        <h1 className="hero-heading">Enter Rumah Panjang</h1>

        <button className="VRbutton">Immersive</button>
      </div>
    </div>
  );
};

export default Hero;