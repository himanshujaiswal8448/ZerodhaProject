import { useEffect } from "react";

const TokenHandler = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const username = params.get("username");
    const email = params.get("email");

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("isAuthenticated", "true");
    }

    if (username && email) {
      localStorage.setItem("user", JSON.stringify({ username, email }));
    }

    const cleanUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);
  }, []);

  return null;
};

export default TokenHandler;
