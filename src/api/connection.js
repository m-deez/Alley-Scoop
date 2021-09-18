import axios from "axios";

console.log("NODE ENV WHAT DO YOU MEAN?", process.env.NODE_ENV);

export default axios.create({
    // baseURL: "https://vast-brushlands-52387.herokuapp.com/api",
    baseURL: `http://localhost:5000/api`,
    headers: {
        "Content-type": "application/json",
    },
});