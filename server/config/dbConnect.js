const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL);
		console.log("DB connected");
	} catch (err) {
		console.log(err);
	}
};

module.exports = dbConnect;
