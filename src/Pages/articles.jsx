import "../styles/Articles.css";
import { categories, temPosts } from "../static";
import Post from "../Components/ArticleCard";

const Articles = () => {
  return (
    <>
      <main className="default all_posts">
        <div className="wrapper">
          {/* Category */}
          <div className="col">
            <div className="filter">
              <h2 className="header filter_header">Filter posts</h2>
              <div className="filter_content">
                <div className="group">
                  <label htmlFor="search" className="text_regular filter_text">
                    Search by title
                  </label>
                  <input
                    type="text"
                    className="input filter_input"
                    placeholder="enter post title"
                    name="search"
                  />
                </div>
                <div className="group">
                  <label
                    htmlFor="category"
                    className="text_regular filter_text"
                  >
                    filter by category
                  </label>
                  <select
                    name="category"
                    id="category"
                    className="input filter_input"
                  >
                    <option value="">Select category</option>
                    {categories.map((category, indx) => (
                      <option key={indx} value={category.value}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* All Posts */}
          <div className="col">
            {temPosts.map((post, indx) => (
              <Post key={indx} post={post} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Articles;
