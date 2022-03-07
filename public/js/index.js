const inquirer = require('inquirer');

const db = require('../../server.js');
// const inquirerIndex = () => {
//Prompts to specify which object should be created
const handleAnswers = ({ Action }) => {
    console.log(Action);

    const expr = Action;
    switch (expr) {
        case 'View all departments':
            db.query(`SELECT name FROM department`, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.table(result);
                interface();

            });

            break;

        case 'View all roles':
            db.query(`SELECT title, salary FROM role`, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.table(result);
                interface();
            });
            break;

        case 'View all employees':
            db.query(`SELECT first_name, last_name FROM employee`, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.table(result);
                interface();
            });
            break;

        case 'Add a department':
            const handleAddDepartment = ({ newDepartment }) => {
                db.query(`INSERT INTO department (name) VALUES ?`, newDepartment, (err, result) => {
                    if (err) {
                        console.log(err);
                    }
                    
                    // db.query(`SELECT name FROM department`, (err, result) => {
                     
                    //     if (err) {
                    //         console.log(err);
                    //     }
                    //     console.table(result);
                    // });

                })

                
            }



            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'newDepartment',
                        default: "Human Resources",
                        message: 'What department would you like to add?',

                    }
                ])

                .then((answers) => {
                    handleAddDepartment(answers);
                });
            break;

        case 'Add a role':
            db.query(`SELECT title, salary FROM role`, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.table(result);
            });
            break;

        case 'Add an employee':
            db.query(`SELECT first_name, last_name FROM employee`, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.table(result);
            });
            break;

        case 'Update an employee role':
            db.query(`SELECT title FROM role`, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.table(result);
            });
            break;
        default:
            console.log(`Error`);
    }



    // if (Action === "View all departments") {
    //     db.query(`SELECT * FROM department`, (err, result) => {
    //         if (err) {
    //             console.log(err);
    //         }
    //         console.table(result);
    //     });

    //     if (Action === "View all roles") {
    //         db.query(`SELECT * FROM role`, (err, result) => {
    //             if (err) {
    //                 console.log(err);
    //             }
    //             console.table(result);
    //         });
    //     }

    // if (condition) {

    // }

    // if (condition) {

    // }

    // if (condition) {

    // }

}

const interface = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'Action',
                default: "View all Departments",
                message: 'What would you like to do?',
                choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"],
            }
        ])
    
        .then((answers) => {
            handleAnswers(answers);
        });
}

//interface();



//     async function main() {


//         const askQuestion = (await inquirer.prompt([
//             {
//                 type: 'list',
//                 name: 'Action',
//                 default: "View all Departments",
//                 message: 'What would you like to do?',
//                 choices: ["View all Departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an Employee", "Update an employee"],
//             }

//         ]))

//         .then((answers) => {
//             handleAnswers(answers);
//         });                                                                                                             
//     };

//     main();


// const handleAnswers = ({Action}) => {
//     console.log(Action);
//     if (Action === "View all Departments"){

//     }


// }
// inquirerIndex();

module.exports = interface();

