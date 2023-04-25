import { Link } from "react-router-dom";
import "../styles/ArticleCard.css";

const ArticleCard = ({ article }) => {
  return (
    <div className="article_card fade_in">
      <Link to={`/article/${article._id}`}>
        <div className="image_container">
          <img
            src={article.Image}
            alt=""
            className="article_card_image"
            sizes="(max-width: 1220px) 100%"
          />
        </div>
        <p className="text_regular article_card_title">{article.Title}</p>
      </Link>
    </div>
  );
};

export default ArticleCard;
