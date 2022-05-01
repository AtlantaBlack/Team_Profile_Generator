const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const q = require("./lib/questions");

const fs = require("fs");
const inquirer = require("inquirer");

let team = [];
let questions = [];

const askManagerQuestions = () => {
    questions = q.managerQuestions();

    return inquirer.prompt(questions);
}

const askEngineerQuestions = () => {
    questions = q.engineerQuestions();

    return inquirer.prompt(questions)
        .then(answers => {
            const engineer = new Engineer(
                `${answers.name}`,
                `${answers.id}`,
                `${answers.email}`,
                `${answers.github}`
            )
            team.push(engineer);

            console.log(team);

            addTeamMember();
        })
}

const askInternQuestions = () => {
    questions = q.internQuestions();

    return inquirer
        .prompt(questions)
        .then(answers => {
            const intern = new Intern(
                `${answers.name}`,
                `${answers.id}`,
                `${answers.email}`,
                `${answers.school}`
            )
            team.push(intern);

            console.log(team);

            addTeamMember();
        });
}

const addTeamMember = () => {
    inquirer
        .prompt(
        {
            type: "list",
            name: "role",
            message: "Add a team member?",
            choices: ["Engineer", "Intern", "I do not want to add a team member."]
        })
        .then(answers => {
            // console.log("add team member answer:");
            console.log(answers)
            switch (answers.role) {
                case "Engineer":
                    askEngineerQuestions();
                    break;
                case "Intern":
                    askInternQuestions();
                    break;
                default:
                    exitAndGeneratePage();
            };
        })
}


const exitAndGeneratePage = () => {
    console.log("exit");
}

const init = () => {
    askManagerQuestions()
        .then(answers => {
            const manager = new Manager(
                `${answers.name}`,
                `${answers.id}`,
                `${answers.email}`,
                `${answers.officeNumber}`)

            team.push(manager);
            addTeamMember();
        })
}

init();


