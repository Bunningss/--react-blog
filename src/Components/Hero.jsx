import "../styles/Hero.css";
import landing from "../Images/landing.webp";

const Hero = () => {
  return (
    <div className="hero">
      <img src={landing} alt="" className="hero_image" />
    </div>
  );
};

export default Hero;
