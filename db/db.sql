CREATE DATABASE IF NOT EXISTS FUT21 ;

USE FUT21;

CREATE TABLE players (
id INT(11) NOT NULL auto_increment,
name varchar(45),
position varchar(45),
nation varchar(45),
team varchar(45),
primary key(id)
);