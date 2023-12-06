const express = require("express");
const userRoutes = express.Router();

const {
	createUserController,
} = require("../../controllers/user/userController");

// GET route for reading data
userRoutes.get("/", createUserController);

module.exports = userRoutes;
