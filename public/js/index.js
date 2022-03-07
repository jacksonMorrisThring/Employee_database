const inquirer = require('inquirer');
// const inquirerIndex = () => {
        //Prompts to specify which object should be created
        const handleAnswers = ({Action}) => {
            if (Action === "View all Departments"){
                console.log('Success!');
            }
        }

        const main = (inquirer
        .prompt([
            {
                type: 'list',
                name: 'Action',
                default: "View all Departments",
                message: 'What would you like to do?',
                choices: ["View all Departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an Employee", "Update an employee"],
            }
        ])

        .then((answers) => {
            handleAnswers(answers);
    }));


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

module.exports = main;
