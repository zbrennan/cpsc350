require('dotenv').config()

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.set("port", 8080);
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const Pool = require("pg").Pool;
const config = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: "food_nutrition"
};

const pool = new Pool(config);

app.get("/api", async (req, res) => {
	try {
		const template = "SELECT * FROM entries WHERE description ILIKE $1 LIMIT 25";
		const response = await pool.query(template, [`%${req.query.q}%`]);
		res.json(response);
	} catch (err) {
		res.json({ status: "error" });
		console.log(err);
	}
});

app.listen(app.get("port"), () => {
	console.log(`Find the server at http://localhost:${app.get("port")}`);
});
