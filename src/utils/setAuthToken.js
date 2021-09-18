import axios from "axios";
const setAuthToken = token => {
  if (token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};
function getToken() {
  let token = localStorage.getItem("jwtToken");
  if (token) {
      // Check if expired, remove if it is
      const payload = JSON.parse(atob(token.split(".")[1]));
      // JWT's exp is expressed in seconds, not milliseconds, so convert
      if (payload.exp < Date.now() / 1000) {
          localStorage.removeItem("jwtToken");
          token = null;
      }
  }
  return token;
}
function getUserFromToken() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
};
export { setAuthToken, getToken, getUserFromToken};