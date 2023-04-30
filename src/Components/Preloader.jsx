import "../styles/Preloader.css";

const Preloader = () => {
  return (
    <div className="loaders">
      <div className="loader loader_ac">
        <div className="spinner">
          <span className="spans"></span>
          <span className="spans"></span>
          <span className="spans"></span>
          <span className="spans"></span>
          <span className="spans"></span>
          <span className="spans"></span>
          <span className="spans"></span>
          <span className="spans"></span>
        </div>
        <svg>
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="8"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Preloader;
