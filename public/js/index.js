const inquirer = require('inquirer');

const db = require('../../server.js');

tempId = 0;
// const inquirerIndex = () => {
//Prompts to specify which object should be created
const handleAnswers = ({ Action }) => {
    console.log(Action);

    const expr = Action;
    switch (expr) {
        case 'View all departments':
            db.query(`SELECT name, id FROM department`, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.table(result);
                interface();

            });

            break;

        case 'View all roles':
            db.query(`SELECT * FROM role`, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.table(result);
                interface();
            });
            break;

        case 'View all employees':
            db.query(`SELECT * FROM employee INNER JOIN role ON employee.id = role.id`, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.table(result);
                interface();
            });
            break;

        case 'Add a department':
            const handleAddDepartment = ({ newDepartment }) => {
                db.query(`INSERT INTO department (name) VALUES (?)`, newDepartment, (err, result) => {
                    if (err) {
                        console.log(err);
                    }

                    db.query(`SELECT name FROM department`, (err, result) => {

                        if (err) {
                            console.log(err);
                        }
                        console.table(result);
                        interface();
                    });
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

            const handleAddRole = ({ departmentOfRole, newTitle, newSalary }) => {


                db.query(`SELECT id FROM department WHERE name = (?)`, departmentOfRole, (err, result) => {

                    if (err) {
                        console.log(err);
                    }
                    console.log(result);

                    function f(object) {
                        const [key, value] = Object.entries(object)[0];
                        // console.log('key is ' + key);
                        // console.log('value is ' + value);

                        return value;
                    }

                    dep_id = f(result[0]);
                    // console.log(`id is ${dep_id}`);

                    db.query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`, [newTitle, newSalary, dep_id], (err) => {
                        if (err) {
                            console.log(err);
                        }

                    });

                    db.query(`SELECT * FROM role WHERE department_id = ?`, dep_id, (err, result) => {

                        if (err) {
                            console.log(err);
                        }
                        console.table(result);
                        interface();
                    });

                });

                // console.log("temp id passed along is");
                // console.log(dep_id);


            }

            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'departmentOfRole',
                        message: 'What department do you want to add the new role to?',

                    },
                    {
                        type: 'input',
                        name: 'newTitle',
                        message: 'What title do you want for the new role?',

                    },
                    {
                        type: 'input',
                        name: 'newSalary',
                        message: 'What salary do you want for the new role?',

                    }


                ])

                .then((answers) => {
                    handleAddRole(answers);
                });
            break;

        case 'Add an employee':
            const handleAddEmployee = ({ first_name, last_name, role_id, manager_id }) => {

                db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [first_name, last_name, role_id, manager_id], (err) => {
                    if (err) {
                        console.log(err);
                    }
                });

                db.query(`SELECT * FROM employee`, (err, result) => {

                    if (err) {
                        console.log(err);
                    }
                    console.table(result);
                    interface();
                });
            }
        

            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'first_name',
                        message: 'What is there first name?',

                    },
                    {
                        type: 'input',
                        name: 'last_name',
                        message: 'What is there last name?',

                    },
                    {
                        type: 'input',
                        name: 'role_id',
                        message: 'What is there role id?',

                    },
                    {
                        type: 'input',
                        name: 'manager_id',
                        message: 'What is there managers_id?',

                    }
                ])

                .then((answers) => {
                    handleAddEmployee(answers);
                });
            break;

        case 'Update an employee role':
            case 'Add an employee':
                const handleUpdateEmployee = ({ first_name, last_name, role_id, manager_id }) => {
    
                    db.query(`UPDATE employee SET first_name = (?), last_name = (?), role_id = (?), manager_id) = (?) WHERE role_id = (?)`, [first_name, last_name, role_id, manager_id, role_id], (err) => {
                        if (err) {
                            console.log(err);
                        }

                    });
    
                    db.query(`SELECT * FROM employee`, (err, result) => {
    
                        if (err) {
                            console.log(err);
                        }
                        console.table(result);
                        interface();
                    });
                }
            
    
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'first_name',
                            message: 'What is there first name?',
    
                        },
                        {
                            type: 'input',
                            name: 'last_name',
                            message: 'What is there last name?',
    
                        },
                        {
                            type: 'input',
                            name: 'role_id',
                            message: 'What is there role id?',
    
                        },
                        {
                            type: 'input',
                            name: 'manager_id',
                            message: 'What is there managers_id?',
    
                        }
                    ])
    
                    .then((answers) => {
                        handleUpdateEmployee(answers);
                    });
            break;
        default:
            console.log(`Error`);
    }
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

module.exports = interface();

