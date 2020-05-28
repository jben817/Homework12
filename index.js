const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootpass",
  database: "employee_trackerDB"
});

connection.connect(function (err) {
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
  connection.query(queryEm, function (err, res) {
    if (err) throw err;
    console.table(res);
    trackEmployees();
  });
}

function viewDepartment() {
  var queryDe = "SELECT * FROM employee_trackerdb.department";
  connection.query(queryDe, function (err, res) {
    if (err) throw err;
    console.table(res);
    trackEmployees();
  });
}
function viewRoles() {
  var queryRo = "SELECT * FROM employee_trackerdb.role;";
  connection.query(queryRo, function (err, res) {
    if (err) throw err;
    console.table(res);
    trackEmployees();
  });
}

function addDepartment() {
  inquirer
    .prompt([{
      name: "addDepartID",
      type: "input",
      message: "Please add ID"
    },
    {
      name: "addDepart",
      type: "input",
      message: "Please add Department id"
    }])
    .then(function (answer) {
      console.log(answer.addDepart);
      connection.query("INSERT INTO employee_trackerdb.department SET ?",
        {
          id: answer.addDepartID,
          name: answer.addDepart
        },
        function (err, res) {
          if (err) throw err;
          console.table(res);
          trackEmployees();
        });
    });
}

function addEmployee() {
  inquirer
    .prompt([{
      name: "addFirst",
      type: "input",
      message: "Please add first_name."
    },
    {
      name: "addLast",
      type: "input",
      message: "Please add last_name."
    },
    {
      name: "addRoleId",
      type: "input",
      message: "Please add role_id"
    },
    {
      name: "addManager",
      type: "input",
      message: "Please add manager_id"
    }])
    .then(function (answer) {
      connection.query("INSERT INTO employee SET ?",
        {
          first_name: answer.addFirst,
          last_name: answer.addLast,
          role_id: answer.addRoleId,
          manager_id: answer.addManager
        },
        function (err, res) {
          if (err) throw err;
          console.table(res);
          trackEmployees();
        });
    });
}
function addRole() {
  inquirer
    .prompt([
      {
        name: "addTitle",
        type: "input",
        message: "Please add title",
      },
      {
        name: "addSalary",
        type: "input",
        message: "Please add salary",
      },
      {
        name: "addDepartment",
        type: "input",
        message: "Please add department_id"
      },
    ])
    .then(function (answer) {
      console.log(answer.addRo);
      connection.query("INSERT INTO employee_trackerdb.role SET ?",
        {
          title: answer.addTitle,
          salary: answer.addSalary,
          department_id: answer.addDepartment
        },
        function (err, res) {
          if (err) throw err;
          console.table(res);
          trackEmployees();
        });
    });
}


// function updateEmployee() {
//   inquirer
//     .prompt([{
//       name: "updateRole",
//       type: "input",
//       message: "Update Employee Role"
//     }

//   ])
//     .then(function (answer) {
//              connection.query("UPDATE employee_trackerdb.role SET ?, 
//        {title:answer.updateRole}, 
//       function(err, res) {
//       if (err) throw err;
//       console.table(res);
//       trackEmployees();
//     });
// }
