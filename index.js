// import frameworks
const fs = require("fs");
const inquirer = require("inquirer");

// import employee classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// import helper code modules
const q = require("./src/questions"); // questions module
const gen = require("./src/generateHTML"); // generate page module

// global variables
let team = []; // empty array to eventually fill with answers about the team
let questions = []; // empty array that will fill with questions based on employee role

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
            team.push(engineer); // add new engineer to the team
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
            team.push(intern); // add intern to the team
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

// exit inquirer and pass the answers on
const exitAndGeneratePage = () => {
    console.log(team);    
    console.log("exit");

    team.forEach(teamMember => {
        console.log(teamMember);
    })

    // fs.writeFileSync("./dist/index.html", gen.generatePage(team), (err) => {
    //     err ? console.error(err) : console.log("page generated!");
    // });
}

// initialise the app
const init = () => {
    askManagerQuestions() // start by asking questions about manager
        .then(answers => { // then using the answers, make a new manager
            const manager = new Manager(
                `${answers.name}`,
                `${answers.id}`,
                `${answers.email}`,
                `${answers.officeNumber}`
            )
            team.push(manager); // add manager to the team
            addTeamMember(); // ask to add more team members
        })
        .catch((err) => console.log(err));
}

// start the app!
init();


