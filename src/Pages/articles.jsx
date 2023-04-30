import "../styles/Articles.css";
import { useEffect, useState } from "react";
import { publicRequest } from "../utils/apiCalls";
import GalleryItem from "../Components/GalleryItem";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await publicRequest.get("/articles");
      setArticles(res.data);
    };
    getArticles();
  }, []);

  return (
    <>
      <main className="gallery default_padding">
        <ul className="gallery__list">
          {articles.map((article, indx) => (
            <GalleryItem article={article} key={indx} />
          ))}
        </ul>
      </main>
    </>
  );
};

export default Articles;
