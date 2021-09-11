const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect(
    process.env.DB_URL,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));