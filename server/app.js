const express = require("express");
const cors = require("cors");

const userRoutes = require("./routers/user/userRoutes");
const dbConnect = require("./config/dbConnect");
dbConnect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/user", userRoutes);

app.listen(3000, () => {
	console.log("Example app listening on port 3000!");
});
