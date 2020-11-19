\c postgres
DROP DATABASE IF EXISTS workshop1v2;
CREATE DATABASE workshop1v2;
\c workshop1v2

CREATE TABLE workshops (
	wid SERIAL PRIMARY KEY,
	title TEXT,
	date DATE,
	location TEXT,
	maxseats TEXT,
	instructor TEXT
);

CREATE TABLE users (
	uid SERIAL PRIMARY KEY,
	username TEXT,
	firstname TEXT,
	lastname TEXT,
	email TEXT
);

CREATE TABLE enrolled (
	wid SERIAL REFERENCES workshops(wid),
	uid SERIAL REFERENCES users(uid),
	PRIMARY KEY (wid, uid)
);