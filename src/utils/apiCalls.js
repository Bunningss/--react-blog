import axios from "axios";

const base_url = "https://innthtapi.herokuapp.com/api/v1/";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const token = currentUser && currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: base_url,
  headers: { token: `Bearer ${token}` },
});
