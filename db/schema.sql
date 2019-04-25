CREATE DATABASE burgers
USE burgers
CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    PRIMARY KEY id,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN
);