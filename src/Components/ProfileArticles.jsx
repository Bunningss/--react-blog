import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { publicRequest } from "../utils/apiCalls";

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
  console.log(articles);
  return <div className="fade_in">ProfileArticles</div>;
};

export default ProfileArticles;
