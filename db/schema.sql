CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers 
(
    id INTEGER AUTO_INCREMENT, 
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT TRUE,
    PRIMARY KEY(id)
);