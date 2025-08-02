import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Please wait for a while");

    try {
      const res = await fetch(
        "https://zerodha-himans.onrender.com/api/user/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();
      setMessage(data.message);

      if (res.ok) {
        setForm({ username: "", email: "", password: "" });

        setTimeout(() => {
          window.location.href = "https://zerodha-himanshu.onrender.com/login";
        }, 800);
      }
    } catch (err) {
      setMessage("Something went wrong!");
    }
  };

  return (
    <div className="row">
      <div className="col-6 offset-3">
        <br />
        <h2>
          <b>Signup on Zerodha</b>
        </h2>
        <br />

        {message && <div className="alert alert-info">{message}</div>}

        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              type="text"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
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
            <label htmlFor="password" className="form-label">
              Password
            </label>
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
          <button className="btn btn-dark add-btn">Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
