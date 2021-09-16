const mongoose = require("mongoose");
const db = mongoose.connection;
const configs = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
};

module.exports = {
    User: require("./User"),
    Post: require("./Post"),
};