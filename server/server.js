//require("dotenv").config();
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });
/* ==== External Modules ==== */
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const users = require("./routes/api/users");

/* ==== Internal Modules ==== */
//const routes = require("./routes/api/users");

/* ==== Instanced Modules  ==== */
const app = express(); // create express app
/* ====  Configuration  ==== */
const PORT = process.env.PORT || 5000;


/* ====  Middleware  ==== */
// Passport middleware
app.use(passport.initialize());
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
//Mongoose Connection import
require("./mongoose-connection");
// Passport config
require("./passport")(passport);
// Routes
app.use("/api/users", users);

//Cors
app.use(cors());
// to serve static files and to serve the react build
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
// JSON parsing middleware
app.use(express.json());

// MongoDB connection

//custom logger to show the url and req.body if one exists
app.use((req, res, next) => {
  console.log(req.url);
  // is there an auth header
  console.log("AUTH HEADER: ", req.headers.authorization);
  if (req.body) {
    console.log("BODY BEING SENT: ", req.body);
  }
  next();
});

/* ====  Routes & Controllers  ==== */
// All of our routes will start with "/api", we're going to route them through index.js
// app.use("/api", routes);

//This is to catch anything that's trying to hit an api route that isn't made
app.all("/api/*", function (req, res, next) {
  res.send("THIS IS NOT AN API ROUTE");
});

//IS THE REACT FULL STACK MAGIC MIDDLEWARE
/*
ANY REQUEST not covered by routes express makes -- will get piped to this middleware
and this middleware's job is to handover control to react
*/
app.use((req, res, next) => {
  console.log(req.headers);
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

/* ====  Server Listener / Connection ==== */
// start express server on port 5000
app.listen(PORT, () => {
  console.log("Successfully connected to Alley-Scoop!");
});