import axios from "axios";

console.log("NODE ENV WHAT DO YOU MEAN?", process.env.NODE_ENV);

export default axios.create({
    // baseURL: "https://vast-brushlands-52387.herokuapp.com/api",
    baseURL: `http://localhost:${process.env.PORT}/api`,
    headers: {
        "Content-type": "application/json",
    },
});