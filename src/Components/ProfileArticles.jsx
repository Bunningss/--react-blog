import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { publicRequest } from "../utils/apiCalls";
import ProfileArticleCard from "./ProfileArticleCard";

const ProfileArticles = ({ setError }) => {
  const [articles, setArticles] = useState([]);
  const user = useSelector((state) => state.user?.currentUser?.userData);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const res = await publicRequest.get(
          `/articles/user-articles?userId=${user?._id}`
        );
        setArticles(res.data);
      } catch (err) {
        setError(err.response.data);
      }
    };
    getArticles();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="fade_in">
      {articles.map((item, indx) => (
        <ProfileArticleCard article={item} key={indx} />
      ))}
    </div>
  );
};

export default ProfileArticles;
