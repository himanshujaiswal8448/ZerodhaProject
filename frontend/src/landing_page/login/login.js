import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Please wait for a while");

    try {
      const res = await fetch(
        "https://zerodha-himans.onrender.com/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      // console.log("Login Response:", data);

      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("isAuthenticated", "true");

        if (data.user) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              username: data.user.username,
              email: data.user.email,
            })
          );
        }

        setMessage("Login successful, Redirecting you to Kite.");
        setTimeout(() => {
          const params = new URLSearchParams({
            token: data.token,
            username: data.user.username,
            email: data.user.email,
          });
          window.location.href = `https://zerodha-himansh.onrender.com/?${params.toString()}`;
        }, 1500);
      } else {
        setMessage(data.message || "Login failed.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setMessage("Login failed. Please try again.");
    }
  };

  return (
    <div className="row">
      <div className="col-6 offset-3">
        <br />
        <h2>
          <b>Login to Zerodha</b>
        </h2>
        <br />

        {message && <div className="alert alert-info">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              className="form-control"
              required
            />
          </div>

          <br />
          <button type="submit" className="btn btn-dark">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
