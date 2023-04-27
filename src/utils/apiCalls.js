import axios from "axios";
import jwt_decode from "jwt-decode";

const base_url = "https://innthtapi.herokuapp.com/api/v1/";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const token = currentUser && currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: base_url,
  headers: { token: `Bearer ${token}` },
});

// Verify Session
const verifySession = () => {
  if (token) {
    const { exp } = jwt_decode(token);
    const expiry = exp * 1000 - 60000;
    if (Date.now() > expiry) {
      localStorage.clear();
    }
  } else return;
};

verifySession();
