import "../styles/Articles.css";
import { useEffect, useState } from "react";
import { publicRequest } from "../utils/apiCalls";
import ArticleCard from "../Components/ArticleCard";

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
      <main className="default_padding fade_in all_posts">
        <div className="wrapper">
          {/* All Posts */}
          {articles.map((article, indx) => (
            <ArticleCard key={indx} article={article} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Articles;
