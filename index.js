// =============================
//       IMPORTING MODULES
// =============================

// import frameworks
const fs = require("fs");
const inquirer = require("inquirer");

// import employee classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// import helper code modules
const q = require("./src/questions"); // questions module
const generatePage = require("./src/generatePage"); // generate page module

// =============================
//        GLOBAL VARIABLES
// =============================

let employees = []; // empty array to eventually fill with answers about the team
let questions = []; // empty array that will fill with questions based on employee role

// =============================
//           FUNCTIONS
// =============================

// --- FUNCTIONS: Questions ----

// asking questions for the manager
const askManagerQuestions = () => {
    questions = q.managerQuestions(); // get manager questions
    return inquirer.prompt(questions); // ask the questions
}

// ask questions for engineer
const askEngineerQuestions = () => {
    questions = q.engineerQuestions(); // get engineer questions
    return inquirer.prompt(questions) // ask the questions
        .then(answers => { // with the answers, create a new engineer
            const engineer = new Engineer(
                `${answers.name}`,
                `${answers.id}`,
                `${answers.email}`,
                `${answers.github}`
            )
            employees.push(engineer); // add new engineer to the team
            addTeamMember(); // ask to add another team member
        })
        .catch((err) => console.error(err));
}

// ask questions for intern
const askInternQuestions = () => {
    questions = q.internQuestions(); // get intern questions
    return inquirer.prompt(questions) // ask the questions
        .then(answers => { // with the answers, make a new intern
            const intern = new Intern(
                `${answers.name}`,
                `${answers.id}`,
                `${answers.email}`,
                `${answers.school}`
            )
            employees.push(intern); // add intern to the team
            addTeamMember(); // ask if you want to add more people
        })
        .catch((err) => console.error(err));
}

// ask to add new team member
const addTeamMember = () => {
    inquirer
        .prompt(
        { // ask whether to add a new engineer or intern to team; else, exit
            type: "list",
            name: "role",
            message: "Add a team member?",
            choices: ["Engineer", "Intern", "I do not want to add a team member"]
        })
        .then(answers => {
            switch (answers.role) { // use the role to determine which questions to ask
                case "Engineer":
                    askEngineerQuestions();
                    break;
                case "Intern":
                    askInternQuestions();
                    break;
                default: // default will save the team answers and go to generate page
                    exitAndGeneratePage();
            };
        })
        .catch((err) => console.error(err));
}

// --- FUNCTIONS: Exiting / Writing To File ----

// exit inquirer and pass the answers on
const exitAndGeneratePage = () => {
    const managers = filterEmployeeByRole("Manager");
    const engineers = filterEmployeeByRole("Engineer");
    const interns = filterEmployeeByRole("Intern");

    // note to self: writeFile ??? writeFileSync
    fs.writeFile("./dist/index.html", generatePage(managers, engineers, interns), (err) => {
        // log the success message in magenta and add empty line above and below for visibility
        err ? console.error(err) : console.log("\n \x1b[35m Page generated! \x1b[30m \n");
    });
}

// --- FUNCTIONS: General / Utility ----

// filter employees by their role (make it easier to send data on later)
const filterEmployeeByRole = (role) => {
    switch (role) {
        case "Manager":
            return employees.filter(employees => employees.role === "Manager");
        case "Engineer":
            return employees.filter(employees => employees.role === "Engineer");
        case "Intern":
            return employees.filter(employees => employees.role === "Intern");
        default:
            break;
    }
}

// welcome message when starting the generator
const welcomeMessage = () => {
    // log welcome message in magenta, add empty line above and below for visibility
    console.log("\n \x1b[35m Welcome to the team profile generator. Let's get started! \x1b[30m \n");
}

// main function for generator, which will start by first asking manager questions
const startGenerator = () => {
    askManagerQuestions() // start by asking questions about manager
        .then(answers => { // then using the answers, make a new manager
            const manager = new Manager(
                `${answers.name}`,
                `${answers.id}`,
                `${answers.email}`,
                `${answers.officeNumber}`
            )
            employees.push(manager); // add manager to the team
            addTeamMember(); // ask to add more team members
        })
        .catch((err) => console.log(err));
}

// =============================
//       INITIALISATION
// =============================

// initialise the app
const init = () => {
    welcomeMessage();
    startGenerator();
}

// start the app!
init();