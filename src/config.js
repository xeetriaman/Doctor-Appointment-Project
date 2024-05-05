// config.js
export const BASE_URL = "http://localhost:8000";
export const token = localStorage.getItem("token").replace(/['"]+/g, ''); // Remove double quotes from the token
