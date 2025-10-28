import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postLogin from "../api/post-login.js";
import postSignup from "../api/post-users.js";

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
        credentials.email,
        credentials.username,
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email Address"
            onChange={handleChange}
          />
        </div>
        <div className="signup-form">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
