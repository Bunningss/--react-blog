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
        <div className="item_tags">
          {article?.Tags?.map((tag, indx) => (
            <p className="item_tag" key={indx}>
              {tag}
            </p>
          ))}
        </div>
        <h2 className="header item_title">{article?.Title}</h2>
        <p className="item_rating">rating: 4.92</p>
      </div>
    </div>
  );
};

export default FeaturedArticleCard;
