import styles from "@/styles/Articles.module.css";
import Head from "next/head";
import Post from "@/Components/ArticleCard";
import { categories, temPosts } from "static";

const Articles = () => {
  return (
    <>
      <Head>
        <title>Inner Thoughts - All Posts</title>
        <meta name="description" content="Blog posts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`default ${styles.all_posts}`}>
        <div className={styles.wrapper}>
          {/* Category */}
          <div className={styles.col}>
            <div className={styles.filter}>
              <h2 className={`header ${styles.filter_header}`}>Filter posts</h2>
              <div className={styles.filter_content}>
                <div className={styles.group}>
                  <label
                    htmlFor="search"
                    className={`text_regular ${styles.filter_text}`}
                  >
                    Search by title
                  </label>
                  <input
                    type="text"
                    className={`input ${styles.filter_input}`}
                    placeholder="enter post title"
                    name="search"
                  />
                </div>
                <div className={styles.group}>
                  <label
                    htmlFor="category"
                    className={`text_regular ${styles.filter_text}`}
                  >
                    filter by category
                  </label>
                  <select
                    name="category"
                    id="category"
                    className={`input ${styles.filter_input}`}
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
          <div className={styles.col}>
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
