import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postSignup from "../api/post-users.js";
import { useAuth } from "../hooks/use-auth.js";

import "./LoginSignUpForm.css";

function SignUpForm() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
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
    if (credentials.username && credentials.email && credentials.password) {
      postSignup(credentials.username, credentials.email, credentials.password)
        .then((response) => {
          const token = `Token ${response.token}`;
          window.localStorage.setItem("token", token);
          setAuth({
            token: token,
          });
          navigate("/");
        })
        .catch((error) => {
          // Handle errors (show to user)
          console.error("Signup failed:", error);
          alert("Signup failed. Please try again.");
        });
    }
  };

  return (
    <form>
      <div className="signup-form">
        <div>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            placeholder="Enter Email Address"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
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
