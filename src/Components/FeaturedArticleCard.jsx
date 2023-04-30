import "../styles/FeaturedArticleCard.css";

const FeaturedArticleCard = ({ article }) => {
  return (
    <div className="featured_article_card fade_in">
      <div className="col">
        <img
          className="featured_article_image"
          src={article.Image}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="col">
        <p className="item_tag">japanese food</p>
        <h2 className="header item_title">{article?.Title}</h2>
        <p className="item_rating">rating: 4.92</p>
      </div>
    </div>
  );
};

export default FeaturedArticleCard;
