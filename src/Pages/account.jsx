import "../styles/Account.css";
import { useState } from "react";
import { publicRequest } from "../utils/apiCalls";
import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../redux/userSlice";
import FormInput from "../Components/FormInput";
import PrimayButton from "../Components/PrimayButton";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });
  const [status, setStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [registrationErrorMessage, setRegistrationErrorMessage] = useState("");

  const registerInputs = [
    {
      label: "Name",
      name: "Name",
      type: "text",
      placeholder: "Enter Your Name",
      errorMessage: "Please enter full name",
      required: true,
      minLength: 5,
      maxLength: 40,
    },
    {
      label: "Enter Email Address",
      name: "Email",
      type: "email",
      placeholder: "Enter Your Email",
      errorMessage: "Please enter a valid email",
      required: true,
      minLength: 5,
      maxLength: 80,
    },
    {
      label: "Enter Your Password",
      name: "Password",
      type: "password",
      placeholder: "Enter Your Password",
      errorMessage:
        "Password must contain at least eight characters, one uppercase letter, one lowercase letter and one number",
      required: true,
      minLength: 8,
      maxLength: 256,
    },
    {
      label: "Confirm Password",
      name: "ConfirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords do not match",
      required: true,
      minLength: 8,
      maxLength: 256,
      pattern: values.Password,
    },
  ];

  const loginInputs = [
    {
      name: "Email",
      label: "Enter Email Address",
      type: "email",
      placeholder: "Enter Your Email",
      errorMessage: "Please enter a valid email",
      required: true,
      minLength: 8,
      maxLength: 80,
    },
    {
      name: "Password",
      label: "Enter Your Password",
      type: "password",
      placeholder: "Enter Your Password",
      errorMessage: "Password must be 8+ characters",
      required: true,
      minLength: 5,
      maxLength: 256,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setStatus(true);
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());
    const { Email, Password } = formData;
    dispatch(loginStart());
    try {
      setErrorMessage("");
      const res = await publicRequest.post("/auth/login", {
        Email: Email.toLowerCase(),
        Password,
      });
      dispatch(loginSuccess(res.data));
      navigate("/");
      window.location.reload();
    } catch (err) {
      setStatus(false);
      setErrorMessage(err.response.data);
      dispatch(loginFailure());
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setStatus(true);
    try {
      setRegistrationErrorMessage("");
      await publicRequest.post("/auth/register", values);
      navigate("/");
    } catch (err) {
      setStatus(false);
      setRegistrationErrorMessage(err.response.data);
    }
  };

  return (
    <>
      <main className="default fade_in account">
        <div className="wrapper">
          <div className="col">
            <h2 className="header account_header">Login</h2>
            <form className="account_form" onSubmit={handleLogin}>
              {loginInputs.map((input, indx) => (
                <FormInput key={indx} input={input} />
              ))}
              {errorMessage && (
                <p className="text_regular errorMessage">{errorMessage}</p>
              )}
              <PrimayButton text={"Login"} status={status} />
            </form>
          </div>
          <div className="col">
            <h2 className="header account_header">register</h2>
            <form className="account_form" onSubmit={handleRegister}>
              {registerInputs.map((input, indx) => (
                <FormInput key={indx} input={input} handleChange={onChange} />
              ))}
              {registrationErrorMessage && (
                <p className="text_regular errorMessage">
                  {registrationErrorMessage}
                </p>
              )}
              <PrimayButton text={"Register"} status={status} />
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Account;
