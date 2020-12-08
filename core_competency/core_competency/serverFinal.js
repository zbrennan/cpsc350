require('dotenv').config()

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("port", 8080);

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));

const Pool = require("pg").Pool;
const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "final"
};

const pool = new Pool(config);

app.post("/restaurant", async (req, res) => {
	const name = req.body.name;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const type = req.body.type;
    const dollars = req.body.dollars;
    try {
    	const q1 = "SELECT name, zip FROM restaurant WHERE name = $1 AND zip = $2";
    	const resp1 = await pool.query(q1, [name, zip]);
    	if (resp1.rowCount == 0) {
    		const q2 = "INSERT INTO restaurant (name, city, state, zip, type, dollars) VALUES ($1, $2, $3, $4, $5, $6)";
    		const resp2 = await pool.query(q2, [name, city, state, zip, type, dollars]);
    		res.json({status: "OK"});
    	} else {
    		res.json({status: "restaurant already in database"});
    	}
    } catch (err) {
    	console.log(err);
    }
});

app.post("/review", async (req, res) => {
	const name = req.body.name;
	const zip = req.body.zip;
    const reviewer = req.body.reviewer;
    const rating = req.body.rating;
    const review = req.body.review;
    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getDate() + 1).padStart(2, '0');
    let year = today.getFullYear();
    today = year + '-' + month + '-' + day;
    try {
    	let resid = 0;
    	let revid = 0;
    	const q1 = "SELECT name, zip, resid FROM restaurant WHERE name = $1 AND zip = $2";
    	const resp1 = await pool.query(q1, [name, zip]);
    	if (resp1.rowCount != 0) {
    		resid = resp1.rows[0].resid;
    		const q2 = "INSERT INTO review (name, zip, reviewer, rating, review, date) VALUES ($1, $2, $3, $4, $5, $6)";
    		const resp2 = await pool.query(q2, [name, zip, reviewer, rating, review, today]);
    		const q3 = "SELECT revid FROM review WHERE review = $1";
    		const resp3 = await pool.query(q3, [review]);
    		revid = resp3.rows[0].revid;
    		const q4 = "INSERT INTO connected (resid, revid) VALUES ($1, $2)";
    		const resp4 = await pool.query(q4, [resid, revid]);
    		res.json({status: "OK"});
    	} else {
    		res.json({status: "restaurant is not in database"});
    	}
    } catch (err) {
    	console.log(err);
    }
});

app.get("/restaurant", async (req, res) => {
	const name = req.query.name;
	const zip = req.query.zip;
	try {
		const q1 = "SELECT restaurant.*, COUNT(review.name) AS reviews, Round(AVG(review.rating), 2) AS stars FROM review JOIN connected ON review.revid = connected.revid JOIN restaurant ON connected.resid = restaurant.resid Where review.name = $1 AND review.zip = $2 GROUP BY restaurant.resid";
		const resp1 = await pool.query(q1, [name, zip]);
		if (resp1.rowCount != 0) {
			const reslt1 = resp1.rows.map((row) => {return {
				name: row.name,
				city: row.city,
				state: row.state,
				zip: row.zip,
				dollars: row.dollars,
				type: row.type,
				stars: row.stars,
				reviews: row.reviews
				}
			});
			res.json({status: "OK", result: reslt1});
		} else {
			res.json({status: "restaurant is not in database"});
		}
	} catch (err) {
		console.log(err);
	}
});
app.get("/reviews", async (req, res) => {
	const name = req.query.name;
	const zip = req.query.zip;
	try {
		const q1 = "SELECT * FROM review WHERE review.name = $1 AND review.zip = $2";
		const resp1 = await pool.query(q1, [name, zip]);
		if (resp1.rowCount != 0) {
			const reslt1 = resp1.rows.map((row) => {return {
				reviewer: row.reviewer,
				review_date: row.date,
				stars: row.rating,
				review: row.review
				}
			});
			res.json({status: "OK", result: reslt1});
		} else {
			res.json({status: "restaurant is not in database"});
		}
	} catch (err) {
		console.log(err);
	}
});

app.get("/find", async (req, res) => {
	const type = req.query.type;
	try {
		const q1 = "SELECT restaurant.*, COUNT(review.name) AS reviews, Round(AVG(review.rating), 2) AS stars FROM review JOIN connected ON review.revid = connected.revid JOIN restaurant ON connected.resid = restaurant.resid Where type ILIKE $1 GROUP BY restaurant.resid ORDER BY Round(AVG(review.rating), 2) DESC";
		const resp1 = await pool.query(q1, [`%${type}%`]);
		if (resp1.rowCount != 0) {
			const reslt1 = resp1.rows.map((row) => {return {
				restaurant: row.name,
				rating: row.stars,
				reviews: row.reviews,
				dollars: row.dollars,
				city: row.city,
				state: row.state,
				zip: row.zip
				}
			});
			res.json({status: "OK", result: reslt1});
		} else {
			res.json({status: "this type is not in database"});
		}
	} catch (err) {
		console.log(err);
	}
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); 
});


