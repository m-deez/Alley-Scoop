import axios from "axios";

console.log("NODE ENV WHAT DO YOU MEAN?", process.env.NODE_ENV);

export default axios.create({
    baseURL: "http://localhost:5000/api/",
    // baseURL: "https://myflexspace.herokuapp.com/api/",
    headers: {
        "Content-type": "application/json",
    },
});