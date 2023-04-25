import "../styles/Article.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { publicRequest } from "../utils/apiCalls";
import ImageModal from "../Components/ImageModal";

const Article = () => {
  const [article, setArticle] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const location = useLocation();
  let id = location.pathname?.split("/")[2];
  const user = useSelector((state) => state.user?.currentUser?.userData);

  useEffect(() => {
    try {
      const get_article = async () => {
        const res = await publicRequest.get(`/articles/${id}`);
        setArticle(res.data);
      };
      get_article();
    } catch (err) {
      console.log(err.message);
    }
  }, [id]);

  return (
    <>
      {selectedImage && (
        <ImageModal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
      <div className="default_padding fade_in post">
        <div className="post_wrapper">
          <div
            className="post_image_container"
            onClick={() => setSelectedImage(article?.Image)}
          >
            <img src={article?.Image} alt="" className="post_image" />
          </div>
          <div className="post_actual">
            <div className="col">hi</div>
            <div className="col">
              <h2 className="header post_header">{article?.Title}</h2>
              <div className="post_refs">
                <Link to="/">{article?.Category}</Link>
                <span>{new Date(article?.createdAt).toDateString()}</span>
                <Link to="">{article?.AuthorName}</Link>
                {user.Name === article?.AuthorName && (
                  <>
                    <Link to="">Modify</Link>
                    <Link to="">Delete</Link>
                    <Link to="">...</Link>
                  </>
                )}
              </div>
              <p className="text_regular post_details">{article?.Article}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
