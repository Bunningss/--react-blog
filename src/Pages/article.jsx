import "../styles/Article.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { publicRequest } from "../utils/apiCalls";
import ImageModal from "../Components/ImageModal";
import SecondaryButton from "../Components/SecondaryButton";
import { secondary_button } from "../Components/Navbar";

const Article = () => {
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
        const res = await publicRequest.get(`/articles/${id}`);
        setArticle(res.data);
      };
      get_article();
    } catch (err) {
      console.log(err.message);
    }
  }, [id]);

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await publicRequest.post(`/articles/delete/${id}`);
      navigate("/articles");
    } catch (err) {
      console.log(err.message);
    }
  };
  // console.log(admin);
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
              <div className="post_refs">
                <Link to="/">{article?.Category}</Link>
                {/* <Link to="">{article?.AuthorName}</Link> */}
                <span>{new Date(article?.createdAt).toDateString()}</span>
                {userName === article?.AuthorName || admin ? (
                  <>
                    {/* <span>...</span> */}
                    <span>Modify</span>
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
