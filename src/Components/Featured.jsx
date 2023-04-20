import "../styles/Featured.css";
import { Link } from "react-router-dom";
import { newPosts } from "../static";
import arrow from "../Images/icons/arrow.png";
import Post from "./ArticleCard";

const Featured = () => {
  return (
    <div className="featured">
      <div className="heading">
        <div className="col">
          <p className="text_regular featured_text">
            Show your inner writer <br /> make an impression
          </p>
        </div>
        <div className="col">
          <h2 className="header featured_header">featured posts</h2>
        </div>
        <div className="col">
          <Link href="/articles" className="text_regular featured_text">
            show me everything
            <img src={arrow} alt="" className="featured_icon" />
          </Link>
        </div>
      </div>
      <div className="posts">
        {newPosts.map((post, indx) => (
          <Post key={indx} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
