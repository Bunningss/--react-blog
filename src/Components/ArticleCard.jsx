import { Link } from "react-router-dom";
import "../styles/ArticleCard.css";

const ArticleCard = ({ post }) => {
  return (
    <div className="article_card">
      <Link to={`/article/${post._id}`}>
        <div className="image_container">
          <img
            src={post.Image}
            alt=""
            className="article_card_image"
            fill
            sizes="(max-width: 1220px) 100%"
          />
        </div>
        <p className="text_regular article_card_title">{post.Title}</p>
      </Link>
    </div>
  );
};

export default ArticleCard;
