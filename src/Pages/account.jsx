import styles from "../styles/Account.module.css";
import Head from "next/head";
import { useState } from "react";
import FormInput from "@/Components/FormInput";
import PrimayButton from "@/Components/PrimayButton";

const Account = () => {
  const [values, setValues] = useState({
    Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const [loginValues, setLoginValues] = useState({
    Email: "",
    Passord: "",
  });

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
      errorMessage: "Password must be 8+ characters",
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
      minLength: 5,
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

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());

    try {
      // Login Logic
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>Inner Thoughts - Login or Register</title>
        <meta name="description" content="Blog posts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`default ${styles.account}`}>
        <div className={styles.wrapper}>
          <div className={styles.col}>
            <h2 className={`header ${styles.account_header}`}>Login</h2>
            <form className={styles.account_form} onSubmit={handleLogin}>
              {loginInputs.map((input, indx) => (
                <FormInput key={indx} input={input} />
              ))}
              <PrimayButton text={"Login"} />
            </form>
          </div>
          <div className={styles.col}>
            <h2 className={`header ${styles.account_header}`}>register</h2>
            <form className={styles.account_form}>
              {registerInputs.map((input, indx) => (
                <FormInput key={indx} input={input} />
              ))}
              <PrimayButton text={"Register"} />
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Account;
