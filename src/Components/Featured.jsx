import "../styles/Featured.css";
import { Link } from "react-router-dom";
import { publicRequest } from "../utils/apiCalls";
import { useEffect, useState } from "react";
import arrow from "../Images/icons/arrow.webp";
import FeaturedArticleCard from "./FeaturedArticleCard";

const Featured = () => {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    const getFeatured = async () => {
      const res = await publicRequest.get("/articles?limit=4");
      setFeatured(res.data);
    };
    getFeatured();
  }, []);

  return (
    <div className="featured">
      <div className="heading default_padding">
        <div className="col">
          <p className="text_regular featured_text">
            Show your inner writer <br /> make an impression
          </p>
        </div>
        <div className="col">
          <h2 className="header featured_header">Most Popular</h2>
        </div>
        <div className="col">
          <Link to="/articles" className="text_regular featured_text">
            show me everything
            <img src={arrow} alt="" className="featured_icon" />
          </Link>
        </div>
      </div>
      <div className="posts default_padding">
        {featured.map((article, indx) => (
          <FeaturedArticleCard article={article} key={indx} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
