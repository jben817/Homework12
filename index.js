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
        "Update Employee Role"
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
  var query = "SELECT * FROM employee_trackerdb.employee";
  connection.query(query, function(err, res) {
    if(err) throw err;
    console.log(res);
    trackEmployees();
  });
}

function viewDepartment() {
  var query = "SELECT * FROM employee_trackerdb.department";
  connection.query(query, function(err, res) {
    if(err) throw err;
    console.log(res);
    trackEmployees();
  });
}
function viewRoles() {
  var query = "SELECT * FROM employee_trackerdb.role;";
  connection.query(query, function(err, res) {
    if(err) throw err;
    console.log(res);
    trackEmployees();
  });
}

