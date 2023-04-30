import "../styles/GalleryItem.css";
import { Link } from "react-router-dom";

const GalleryItem = ({ article }) => {
  return (
    <li className="fade_in">
      <figure>
        <Link to={`/article/${article._id}`}>
          <img
            className="gallery_item_image"
            src={article.Image}
            alt=""
            loading="lazy"
          />
        </Link>
        <h2 className="article_title">{article.Title}</h2>
      </figure>
    </li>
  );
};

export default GalleryItem;
