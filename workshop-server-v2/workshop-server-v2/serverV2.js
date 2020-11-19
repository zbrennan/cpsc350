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
    database: "workshop1v2"
};

const pool = new Pool(config);

app.post("/create-user", async (req, res) => {
    const uname = req.body.username;
    const fname = req.body.firstname;
    const lname = req.body.lastname;
    const email = req.body.email;
    try {
        const q1 = "SELECT username FROM users WHERE username = $1";
        const response1 = await pool.query(q1, [uname]);
        if (response1.rowCount == 0) {
            const q2 = "INSERT INTO users (username, firstname, lastname, email) VALUES ($1, $2, $3, $4)";
            const response2 = await pool.query(q2, [uname, fname, lname, email]);
            res.json({status: "user added"});
        } else {
            res.json({status: "username taken"});
        }
    } catch (err){
        console.log(err);
    }
});

app.delete("/delete-user", async (req, res) => {
    const uname = req.body.username;
    try {
        const q = "DELETE FROM users WHERE username = $1";
        const response = await pool.query(q, [uname]);
        res.json({status: "deleted"});
    } catch (err){
        console.log(err);
    }
});

app.get("/list-users", async (req, res) => {
    const type = req.query.type;
    try {
        const q = "SELECT * FROM users";
        const response = await pool.query(q);
        if (type == "full") {
            const results1 = response.rows.map((row) => {return {
                username: row.username,
                firstname: row.firstname,
                lastname: row.lastname,
                email: row.email
                }
            });
            res.json({users: results1});
        } else if (type == "summary") {
            const results2 = response.rows.map((row) => {return {
                firstname: row.firstname,
                lastname: row.lastname
                }
            });
            res.json({users: results2});
        }
    } catch (err){
        console.log(err);
    }
});

app.post("/add-workshop", async (req, res) => {
    const title = req.body.title;
    const date = req.body.date;
    const location = req.body.location;
    const maxseats = req.body.maxseats;
    const instructor = req.body.instructor;
    try {
        const q1 = "SELECT * FROM workshops WHERE title = $1 AND date = $2 AND location = $3";
        response1 = await pool.query(q1, [title, date, location]);
        if (response1.rowCount == 0) {
            const q2 = "INSERT INTO workshops (title, date, location, maxseats, instructor) VALUES ($1, $2, $3, $4, $5)";
            const response2 = await pool.query(q2, [title, date, location, maxseats, instructor]);
            res.json({status: "workshop added"});
        } else {
            res.json({status: "workshop already in database"});
        }
    } catch (err){
        console.log(err);
    }
});

app.post("/enroll", async (req, res) => {
    const title = req.body.title;
    const date = req.body.date;
    const location = req.body.location;
    const uname = req.body.username;
    try {
        let uid = 0;
        let wid = 0;
        let maxseats = 0;

        const q1 = "SELECT * FROM users WHERE username = $1";
        response1 = await pool.query(q1, [uname]);
        if (response1.rowCount != 0) {
            uid = response1.rows[0].uid;
        }

        const q2 = "SELECT * FROM workshops WHERE title = $1 AND date = $2 AND location = $3";
        response2 = await pool.query(q2, [title, date, location]);
        if (response2.rowCount != 0) {
            wid = response2.rows[0].wid;
            maxseats = response2.rows[0].maxseats;
        }

        const q3 = "SELECT * FROM enrolled WHERE wid = $1 AND uid = $2";
        response3 = await pool.query(q3, [wid, uid]);

        const q4 = "SELECT * FROM enrolled WHERE wid = $1";
        response4 = await pool.query(q4, [wid]);

        if (response1.rowCount == 0) {
            res.json({status: "user not in database"});
        } else if (response2.rowCount == 0) {
            res.json({status: "workshop does not exist"});
        } else if (response3.rowCount != 0) {
            res.json({status: "user already enrolled"});
        } else if (response4.rowCount >= maxseats) {
            res.json({status: "no seats available"});
        } else {
            const q5 = "INSERT INTO enrolled (wid, uid) VALUES ($1, $2)";
            const response5 = await pool.query(q5, [wid, uid]);
            res.json({status: "user added"});
        }
    } catch (err){
        console.log(err);
    }
});

app.get("/list-workshops", async (req, res) => {
    var dateFormat = require('dateformat');
    try {
        const q = "SELECT * FROM workshops";
        const response = await pool.query(q);
        const results = response.rows.map((row) => { return {
            title: row.title,
            date: dateFormat(row.date, "yyyy-mm-dd"),
            location: row.location
            }
        });
        res.json({workshops: results});
    } catch (err){
        console.log(err);
    }
});

app.get("/attendees", async (req, res) => {
    const title = req.query.title;
    const date = req.query.date;
    const location = req.query.location;
    try {
        const q1 = "SELECT * FROM workshops WHERE title = $1 AND date = $2 AND location = $3";
        const response1 = await pool.query(q1, [title, date, location]);
        if (response1.rowCount == 0) {
            res.json({error: "workshop does not exist"});
        } else {
            const q2 = "SELECT users.firstname, users.lastname FROM users JOIN enrolled ON users.uid = enrolled.uid JOIN workshops ON enrolled.wid = workshops.wid WHERE workshops.title = $1 AND workshops.date = $2 AND workshops.location = $3";
            const response2 = await pool.query(q2, [title, date, location]);
            const results = response2.rows.map((row) => { return {
                firstname: row.firstname,
                lastname: row.lastname
                }
            })
            res.json({attendees: results});
        }
    } catch (err){
        console.log(err);
    }
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); 
});
