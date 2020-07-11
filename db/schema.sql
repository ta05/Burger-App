### Schema

CREATE DATABASE IF NOT EXISTS burgers_db;

use burgers_db;

CREATE TABLE IF NOT EXISTS burgers(
	id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE
);