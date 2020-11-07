\c postgres
DROP DATABASE IF EXISTS workshopone;
CREATE DATABASE workshopone;
\c workshopone

CREATE TABLE workshops (
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	attendee TEXT
);

INSERT INTO workshops (name, attendee) VALUES
	('DevOps 101', NULL),
	('Docker Container Fundamentals', NULL),
	('Machine Learning', NULL),
	('Modern Javascript', NULL),
	('MongoDB', NULL),
	('React Fundamentals', NULL),
	('Self-Driving Cars', NULL);