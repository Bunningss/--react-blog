import "../styles/Article.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { publicRequest } from "../utils/apiCalls";
import { secondary_button } from "../Components/Navbar";
import ImageModal from "../Components/ImageModal";
import SecondaryButton from "../Components/SecondaryButton";

const Article = ({ setError }) => {
  const [article, setArticle] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  let id = location.pathname?.split("/")[2];
  const user = useSelector((state) => state.user?.currentUser);
  const userName = user && user?.userData?.Name;
  const admin = user && user?.userData?.IsAdmin;

  useEffect(() => {
    try {
      const get_article = async () => {
        const res = await publicRequest.get(`/articles/article/${id}`);
        setArticle(res.data);
      };
      get_article();
    } catch (err) {
      setError(err.response.data);
    }
    // eslint-disable-next-line
  }, [id]);

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await publicRequest.delete(
        `/articles/delete/${id}?userId=${user?.userData?._id}`
      );
      navigate("/articles");
    } catch (err) {
      setError(err.response.data);
    }
  };

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
            <div className="col"></div>
            <div className="col">
              <h2 className="header post_header">{article?.Title}</h2>
              <div className="article_tags">
                {article?.Tags?.map((tag, indx) => (
                  <span className="tag" key={indx}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="post_refs">
                <span>
                  Posted by {article?.AuthorName} on{" "}
                  {new Date(article?.createdAt).toDateString()}
                </span>
                {userName === article?.AuthorName || admin ? (
                  <>
                    <SecondaryButton
                      text={"modify"}
                      btn_styles={{
                        ...secondary_button,
                        color: "var(--primary)",
                        backgroundColor: "var(--content-bg)",
                        fontSize: "14px",
                      }}
                    />
                    <SecondaryButton
                      text={"delete"}
                      btn_styles={{
                        ...secondary_button,
                        color: "var(--body-bg)",
                        backgroundColor: "red",
                        fontSize: "14px",
                      }}
                      handleClick={handleDelete}
                    />
                  </>
                ) : null}
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
