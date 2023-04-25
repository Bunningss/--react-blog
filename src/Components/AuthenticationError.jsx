import "../styles/ComingSoon.css";

const AuthenticationError = () => {
  return (
    <div className="coming_soon default_padding fade_in">
      <h2 className="header">
        You must be authenticated to access this resource
      </h2>
    </div>
  );
};

export default AuthenticationError;
