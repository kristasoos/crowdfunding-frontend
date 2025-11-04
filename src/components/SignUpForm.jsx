import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postLogin from "../api/post-login.js";
import postSignup from "../api/post-users.js";
import { useAuth } from "../hooks/use-auth.js";
import "./LoginSignUpForm.css";

function SignUpForm() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (credentials.email && credentials.username && credentials.password) {
      postSignup(
        credentials.username,
        credentials.email,
        credentials.password
      ).then((response) => {
        window.localStorage.setItem("token", response.token);
        setAuth({
          token: response.token,
        });
        navigate("/");
      });
    }
  };

  return (
    <form>
      <div className="signup-form">
        <div>
          <input
            type="email"
            id="email"
            placeholder="Enter Email Address"
            onChange={handleChange}
          />
        </div>
        <div className="signup-form">
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
      </div>
      <button className="signup-button" type="submit" onClick={handleSubmit}>
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
