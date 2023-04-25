import "../styles/Publish.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../utils/apiCalls";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../utils/firebase";
import FormInput from "../Components/FormInput";
import PrimayButton from "../Components/PrimayButton";

const Publish = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState("");
  const [values, setValues] = useState({
    Title: "",
    Article: "",
    Category: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const createArticle = async (data) => {
    try {
      await publicRequest.post("/articles/create", data.data);
      navigate("/articles");
      setProgress("Article Generated");
    } catch (err) {
      console.log(err.message);
    }
  };

  // Upload to firebase
  const handleSubmit = (e) => {
    e.preventDefault();
    const filename = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, `articles/${filename}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(`File upload at ${Math.round(progress)}%`);
        switch (snapshot.state) {
          case "paused":
            setProgress("Upload stopped! Please retry.");
            break;
          case "running":
            // setProgress("Upload Started...");
            break;
          default:
            break;
        }
      },
      (error) => {
        setProgress("Server Error!");
      },
      () => {
        setProgress("Upload complete. Saving article to database...");
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          createArticle({ data: { ...values, Image: downloadURL } });
        });
      }
    );
  };

  return (
    <>
      <main className="default_padding fade_in publish">
        <div className="wrapper">
          <form className="publish_form" onSubmit={handleSubmit}>
            <div className="group">
              <label htmlFor="media" className="publish_label">
                Choose Media
              </label>
              <input
                type="file"
                name="Image"
                className="input publish_input"
                required
                onChange={(e) => setFile(e.target.files[0])}
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
              handleChange={handleChange}
            />
            <FormInput
              input={{
                name: "Article",
                cols: "30",
                rows: "10",
                placeholder: "Enter Article",
                label: "Enter article",
                required: true,
                errorMessage: "Article Description is required",
                fieldType: "TEXTAREA",
              }}
              handleChange={handleChange}
            />
            <FormInput
              input={{
                name: "Category",
                placeholder: "Choose a category. e.g: Food, Lifestyle, Travel",
                required: true,
                errorMessage: "Article Category is required",
                label: "Select a category",
              }}
              handleChange={handleChange}
            />
            {/* <div className="group">
              <label htmlFor="Category" className="publish_label">
                Select category
              </label>
              <select
                name="Category"
                id="category"
                className="input publish_input"
                required
                onChange={handleChange}
              >
                <option value="">category</option>
                <option value="lifestyle">lifestyle</option>
                <option value="food">food</option>
              </select>
            </div> */}
            {progress && (
              <p className="text-regular errorMessage">{progress}</p>
            )}
            <PrimayButton text={"publish article"} />
          </form>
        </div>
      </main>
    </>
  );
};

export default Publish;
