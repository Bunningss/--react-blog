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

const Publish = ({ setError }) => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState("");
  const [status, setStatus] = useState(false);
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
      setStatus(true);
      await publicRequest.post("/articles/create", data.data);
      navigate("/articles");
      setProgress("Article Generated");
    } catch (err) {
      setProgress("");
      setStatus(false);
      setError(err.response.data);
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
        setStatus(true);
        switch (snapshot.state) {
          case "paused":
            setProgress("");
            setError("Upload stopped! Please retry.");
            setStatus(false);
            break;
          case "running":
            // setProgress("Upload Started...");
            break;
          default:
            break;
        }
      },
      (error) => {
        setProgress("");
        setError("Server Error!");
        setStatus(false);
      },
      () => {
        setProgress("Upload complete. Saving article to database...");
        setStatus(true);
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
            {progress && (
              <p className="text-regular errorMessage">{progress}</p>
            )}
            <PrimayButton text={"publish article"} status={status} />
          </form>
        </div>
      </main>
    </>
  );
};

export default Publish;
