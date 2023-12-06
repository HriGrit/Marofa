const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		minlength: 3,
		maxlength: 255,
	},
});

const Employer = mongoose.model("Employer", employerSchema);

module.exports = Employer;
