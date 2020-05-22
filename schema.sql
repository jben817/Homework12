CREATE DATABASE employee_trackerDB;
USE employee_trackerDB;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR (30),
    salary DECIMAL (10,2),
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);
 
 CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR (30),
    last_name VARCHAR (30),
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("Nursing");
INSERT INTO department (name)
VALUES ("Human Resources");
INSERT INTO department (name)
VALUES ("Patient Care Rep");
INSERT INTO department (name)
VALUES ("Physician");
INSERT INTO department (name)
VALUES ("Social Work");

INSERT INTO role (title, salary, department_id)
VALUES ("Nurse", 80000, 10);
INSERT INTO role (title, salary, department_id)
VALUES ("Doctor", 300000, 20);
INSERT INTO role (title, salary, department_id)
VALUES ("Social Worker", 55000, 30);
INSERT INTO role (title, salary, department_id)
VALUES ("Patient Care Rep", 36000, 40);
INSERT INTO role (title, salary, department_id)
VALUES ("Human Resource Associate", 40000, 50);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rick", "Grimes", 404, 444);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Frank", "Castle", 404, 444);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Steve", "Rogers", 505, 555);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Leslie", "Knope", 101);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Guster", "Burton", 101);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sarah", "Connor", 202, 222);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Liz", "Lemon", 202, 222);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Wick", 505, 555);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Raymond", "Holt", 303, 333);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jack", "Shephard", 303, 333);

