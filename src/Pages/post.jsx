import "../styles/PostPage.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../utils/apiCalls";

const Post = () => {
  const [article, setArticle] = useState();
  const location = useLocation();
  let id = location.pathname?.split("/")[2];

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
      <main>
        <div className="default post">
          <div className="post_wrapper">
            <div className="post_image_container">
              <img src={article?.Image} alt="" className="post_image" />
            </div>
            <div className="post_actual">
              <div className="col"></div>
              <div className="col">
                <h2 className="header post_header">{article?.Title}</h2>
                <div className="post_refs">
                  <Link to="/">{article?.Category}</Link>
                  <Link to="">...</Link>
                  <Link to="">...</Link>
                  <Link to="">...</Link>
                  <Link to="">...</Link>
                  <span>{new Date(article?.createdAt).toDateString()}</span>
                </div>
                <p className="text_regular post_details">{article?.Article}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Post;
