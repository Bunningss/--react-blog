import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB93W5YMX8kJyP9rurdGH4sJtRMx0zMzCM",
  authDomain: "theblog-7a0da.firebaseapp.com",
  projectId: "theblog-7a0da",
  storageBucket: "theblog-7a0da.appspot.com",
  messagingSenderId: "225896765494",
  appId: "1:225896765494:web:c16ba8a8b1377fca3e2097",
  measurementId: "G-51LMKKM9WS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
