const inquirer = require('inquirer');
// const inquirerIndex = () => {
        //Prompts to specify which object should be created

    async function main() {

        
        const askQuestion = (await inquirer.prompt([
            {
                type: 'list',
                name: 'Action',
    
                message: 'What would you like to do?',
                choices: ["View all Departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an Employee", "Update an employee"],
            }
        ])).askQuestion;
    }
    main();

        
    //         .then((answers) => {
    //             handleAnswers(answers);
    //         });                                                                                                             
    //     };
    //     askQuestion() 

    
    
    // const handleAnswers = ({Action}) => {
    //     console.log(Action);
    //     if (Action === "View all Departments"){

    //     }


// }
// inquirerIndex();

module.exports = main;
