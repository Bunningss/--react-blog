import "../styles/Publish.css";
import FormInput from "../Components/FormInput";
import PrimayButton from "../Components/PrimayButton";

const Publish = () => {
  return (
    <>
      <main className="default publish">
        <div className="wrapper">
          <form className="publish_form">
            <div className="group">
              <label htmlFor="media" className="publish_label">
                Choose Media
              </label>
              <input
                type="file"
                name="Image"
                className="input publish_input"
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
            <div className="group">
              <label htmlFor="Category" className="publish_label">
                Select category
              </label>
              <select
                name="Category"
                id="category"
                className="input publish_input"
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
