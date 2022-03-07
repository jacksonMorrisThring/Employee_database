const express = require('express');
// Import and require mysql2
// const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');

const inquirer = require('inquirer');
// const sequelize = require('./config/connection');

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password
    password: 'Tyrojones2000',
    database: 'employee_tracker_db'
  },
  console.log(`Connected to the books_db database.`)
);
// const routes = require("./routes");

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const inquirerIndex = require("./public/js/index.js");
app.use(inquirerIndex);


// app.use(routes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




const askQuestion = () => {
  inquirer.prompt([
  {
      type: 'list',
      name: 'Action',

      message: 'What would you like to do?',
      choices: ["View all Departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an Employee", "Update an employee"],
  }])
        
  .then((answers) => {
      handleAnswers(answers);
  });                                                                                                             
};
// askQuestion() 



const handleAnswers = ({Action}) => {
console.log(Action);
if (Action === "View all Departments"){
  db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
  });
}
}



// // Query database
// db.query('SELECT * FROM favorite_books', function (err, results) {
//   console.log(results);
// });

// // Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT);
// });

