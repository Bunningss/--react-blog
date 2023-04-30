import { Suspense, lazy, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";
import Preloader from "./Components/Preloader";
const ComingSoon = lazy(() => import("./Components/ComingSoon"));
const AuthenticationError = lazy(() =>
  import("./Components/AuthenticationError")
);
const Menu = lazy(() => import("./Components/Menu"));
const Popup = lazy(() => import("./Components/Popup.jsx"));

// Pages
const Index = lazy(() => import("./Pages/index"));
const Account = lazy(() => import("./Pages/account"));
const Publish = lazy(() => import("./Pages/publish"));
const Articles = lazy(() => import("./Pages/articles"));
const Article = lazy(() => import("./Pages/article"));
const Profile = lazy(() => import("./Pages/profile"));

function App() {
  const [error, setError] = useState("");
  // Fetch logged in user
  const user = useSelector((state) => state.user?.currentUser?.userData);

  // Reset error popup
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 10000);
    }
  }, [error]);

  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Preloader />}>
        <Menu />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        {error && <Popup error={error} />}
      </Suspense>
      <Routes>
        <Route
          exact
          path="*"
          element={
            <Suspense fallback={<Preloader />}>
              <ComingSoon />
            </Suspense>
          }
        />
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<Preloader />}>
              <Index />
            </Suspense>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <Suspense fallback={<Preloader />}>
              <Profile setError={setError} />
            </Suspense>
          }
        />
        <Route
          path="/articles"
          element={
            <Suspense fallback={<Preloader />}>
              <Articles />
            </Suspense>
          }
        />
        {!user && (
          <Route
            path="/account"
            element={
              <Suspense fallback={<Preloader />}>
                <Account setError={setError} />
              </Suspense>
            }
          />
        )}
        <Route
          path="/publish"
          element={
            <Suspense fallback={<Preloader />}>
              {user ? <Publish setError={setError} /> : <AuthenticationError />}
            </Suspense>
          }
        />
        <Route
          path="/article/:id"
          element={
            <Suspense fallback={<Preloader />}>
              <Article setError={setError} />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
