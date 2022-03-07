const express = require('express');
// Import and require mysql2
// const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


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
  console.log(`Connected to the employee_tracker_db database.`)
  
);

async function startServer() {
  try {
      await app.listen(PORT);
      console.log(`Server ready at ${PORT}`);
      const inquirerIndex = require("./public/js/index.js");

  } catch(e) {
      // handle errors
      console.log(e);
  }
}

startServer();



// db.query(`SELECT * FROM employee`, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.table(result);
// });

