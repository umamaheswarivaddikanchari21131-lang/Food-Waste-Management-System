import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await API.post("/users/login", {
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(res.data));
      alert("Login success");
    } catch (err) {
      setError("Login failed. Please check your email and password.");
    }
  };

  return (
    <form className="form" onSubmit={handleLogin}>
      <h2>Login</h2>

      <label>
        Email
        <input
          type="email"
          value={email}
          placeholder="you@example.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Password
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      {error && <small>{error}</small>}

      <div className="form-footer">
        <small>
          New to the platform? <Link to="/register">Register now</Link>
        </small>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default Login;
