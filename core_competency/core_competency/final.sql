\c postgres
DROP DATABASE IF EXISTS final;
CREATE DATABASE final;
\c final

CREATE TABLE restaurant (
	resid SERIAL PRIMARY KEY,
	name TEXT,
	city TEXT,
	state TEXT,
	zip INTEGER,
	type TEXT,
	dollars TEXT
);

CREATE TABLE review (
	revid SERIAL PRIMARY KEY,
	name TEXT,
	zip INTEGER,
	reviewer TEXT,
	rating INTEGER,
	review TEXT,
	date TEXT
);

CREATE TABLE connected (
	resid SERIAL REFERENCES restaurant(resid),
	revid SERIAL REFERENCES review(revid),
	PRIMARY KEY (resid, revid)
);
