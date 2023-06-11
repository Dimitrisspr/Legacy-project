const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : "https://legac.onrender.com";

export default API_URL;