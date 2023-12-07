const mongoose = require("mongoose");

const helperSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 64,
	},
});

const Helper = mongoose.model("Helper", helperSchema);

module.exports = Helper;
