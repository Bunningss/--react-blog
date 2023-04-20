import "../styles/Hero.css";
import landing from "../Images/landing.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={landing} alt="" fill className="hero_image" />
    </div>
  );
};

export default Hero;
