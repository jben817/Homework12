CREATE DATABASE employee_trackerDB;
USE employee_trackerDB;

CREATE TABLE department (
    id INT NOT NULL,
    name VARCHAR (30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL,
    title VARCHAR (30),
    salary DECIMAL (10,4),
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);
 
 CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR (30),
    last_name VARCHAR (30),
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id)
);
