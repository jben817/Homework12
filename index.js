const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootpass",
  database: "employee_trackerDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  trackEmployees();
});

function trackEmployees() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View Employees",
        "View Departments",
        "View Roles",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Update Employee Role",
        "Exit"
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View Employees":
          viewEmpolyee() 
          break;

        case "View Departments":
          viewDepartment();
          break;

        case "View Roles":
          viewRoles();
          break;

        case "Add Department":
          addDepartment();
          break;

        case "Add Role":
          addRole();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Update Employee Role":
          updateEmployee();
          break;
      }
    });
}

function viewEmpolyee() {
  var queryEm = "SELECT * FROM employee_trackerdb.employee";
  connection.query(queryEm, function(err, res) {
    if(err) throw err;
    console.table(res);
    trackEmployees();
  });
}

function viewDepartment() {
  var queryDe = "SELECT * FROM employee_trackerdb.department";
  connection.query(queryDe, function(err, res) {
    if(err) throw err;
    console.table(res);
    trackEmployees();
  });
}
function viewRoles() {
  var queryRo = "SELECT * FROM employee_trackerdb.role;";
  connection.query(queryRo, function(err, res) {
    if(err) throw err;
    console.table(res);
    trackEmployees();
  });
}

function addDepartment() {
  inquirer
    .prompt({
      name: "addDepart",
      type: "input",
      message: "Please add Department"
    })
    .then(function(answer) {
      console.log(answer.addDepart);
       connection.query("INSERT INTO department (name) VALUES (?)", {addDepart:answer.addDepart}, function(err, res) {
        if(err) throw err;
        console.table(res);
        runSearch();
      });
    });
}

