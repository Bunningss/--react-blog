import styles from "../styles/Publish.module.css";
import Head from "next/head";
import FormInput from "@/Components/FormInput";
import PrimayButton from "@/Components/PrimayButton";

const Publish = () => {
  return (
    <>
      <Head>
        <title>Inner Thoughts - Publish An Article</title>
        <meta name="description" content="Write an article" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`default ${styles.publish}`}>
        <div className={styles.wrapper}>
          <form className={styles.publish_form}>
            <div className={styles.group}>
              <label htmlFor="media" className={styles.publish_label}>
                Choose Media
              </label>
              <input
                type="file"
                name="Image"
                className={`input ${styles.publish_input}`}
                required
              />
            </div>
            <FormInput
              input={{
                name: "Title",
                placeholder: "Enter Article Title",
                errorMessage: "Article title is required",
                required: true,
                label: "Enter a title",
              }}
            />
            <FormInput
              input={{
                name: "Article",
                cols: "30",
                rows: "10",
                placeholder: "Enter Article",
                required: true,
                errorMessage: "Article Description is required",
                fieldType: "TEXTAREA",
              }}
            />
            <div className={styles.group}>
              <label htmlFor="Category" className={styles.publish_label}>
                Select category
              </label>
              <select
                name="Category"
                id="category"
                className={`input ${styles.publish_input}`}
                required
              >
                <option value="">category</option>
                <option value="lifestyle">lifestyle</option>
                <option value="food">food</option>
              </select>
            </div>
            <PrimayButton text={"publish article"} />
          </form>
        </div>
      </main>
    </>
  );
};

export default Publish;
