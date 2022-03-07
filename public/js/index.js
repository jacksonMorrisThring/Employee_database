const inquirer = require('inquirer');

const nodeMan = () => {
    //Prompts to specify which object should be created
    const askQuestion = () => {
        inquirer.prompt([
        {
            type: 'list',
            name: 'Action',

            message: 'What would you like to do?',
            choices: ["View all Departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an Employee", "Update an employee"],
        }

        // {
        //     type: 'input',
        //     name: 'name',

        //     message: 'Enter the name of the team member!',
        // },

        // {
        //     type: 'input',
        //     name: 'employeeID',
        //     message: 'Enter their employee ID',
        // },
        // {

        //     type: 'email',
        //     name: 'email',
    
        //     message: 'Enter their email',
        // },
        // {
    
        //     type: 'input',
        //     name: 'officeNumber',
    
        //     message: 'Enter their office number ',

        // },
        // {
        //     type: "list",
        //     name: 'nextSelection',

        //     message: "What do you want to do next?",
        //     choices: ["Add another team member", "Thats all!"]
        // }
])
    
        .then((answers) => {
            handleAnswers(answers);
        });                                                                                                             
    };
    askQuestion() 
}
nodeMan();


const handleAnswers = ({Action}) => {
    console.log(Action);
    // console.log("Creating employee... email:" + email + " and officeNumber: "+officeNumber);
    // if (position === "Manager") {
    //     console.log("Creating a manager");
    //     var tempEmployee = new Manager(name, employeeID, email, officeNumber);
    // }
    // else if(position === "Engineer"){
    //     console.log("Creating a Engineer");
    //     var tempEmployee = new Engineer(name, employeeID, email, officeNumber);
    // }
    // else if(position === "Intern"){
    //     console.log("Creating a Intern");
    //     var tempEmployee = new Intern(name, employeeID, email, officeNumber);
    // }
    // else{
    //     console.log("error")
    // }
    // //var tempEmployee = new Employee(position, name, employeeID, email, officeNumber);
    
    // console.log(`New employee created with name ${tempEmployee.name}`);
    // employeeArray[index] = tempEmployee;
    // index++;

    
    // console.log("employee array is now");
    // console.log(employeeArray);

    // //RUNS FUNCTION AGAIN IF ADD TEAM MEMEBER IS SPECIFIED AT END
    // if (nextSelection === "Add another team member") {
    //     nodeMan();
    // }
    // else{
    //     console.log("all done!");
    //     console.log(`total employees are...`)
    //     console.log(employeeArray);
    //     //generate html
    //     //defining string for all key values

        
    //     const HTMLpageContent = generateHTML(employeeArray);

    //     fs.writeFile('index.html', HTMLpageContent, (err) => {
    //         err ? console.log(err) : console.log('Successfully created html')
    //     });
    //     // console.log(HTMLpageContent);
    // }
}