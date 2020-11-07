require('dotenv').config()

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("port", 3000);

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));

const Pool = require("pg").Pool;
const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "workshopone"
};

const pool = new Pool(config);

app.get('/hello', (req, res) => {
  // console log the request query json object
  console.log(req.query);
  // console log the person parameter
  console.log(req.query.person);
  // now send a response back to the client
  res.json({response: `Hello, ${req.query.person}`});
});

app.get("/api", async (req, res) => {
	let name = req.query.workshop;
    try {
    	if (!name) {
        	const template1 = "SELECT DISTINCT name FROM workshops";
        	const response1 = await pool.query(template1);
        	const results1 = response1.rows.map((row) => {return row.name});
        	res.json({workshops: results1});
    	} else {
    		const template2 = "SELECT name FROM workshops WHERE name = $1";
        	const response2 = await pool.query(template2, [name]);
        	if (response2.rowCount == 0){
            	res.json({error: "workshop not found"});
        	} else {
        		const template3 = "SELECT attendee FROM workshops WHERE name = $1";
        		const response3 = await pool.query(template3, [name]);
        		const results3 = response3.rows.map((row) => {return row.attendee});
        		res.json({attendees: results3});
        	}
    	}
    } catch (err){
        console.log(err);
    }
});

app.post("/api", async (req, res) => {
    const name = req.body.workshop;
    const attendee = req.body.attendee;
    try {
    	if (!name || !attendee) {
    		res.json({error: "parameters not given"});
    	} else {
    		const template1 = "SELECT * FROM workshops WHERE name = $1 AND attendee = $2";
    		const response1 = await pool.query(template1, [name, attendee]);
    		const results1 = response1.rows.map((row) => {return row.attendee});
    		const template2 = "SELECT attendee FROM workshops WHERE name = $1";
    		const response2 = await pool.query(template2, [name]);
    		if (response1.rowCount != 0){
            	res.json({error: "attendee already enrolled"});
        	} else {
        		const template3 = "INSERT INTO workshops (name, attendee) VALUES ($1, $2)";
        		const response3 = await pool.query(template3, [name, attendee]);
        		res.json({attendee: attendee, workshop: name});
        	}
    	}
    } catch (err){
        console.log(err);
    }
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); 
});
