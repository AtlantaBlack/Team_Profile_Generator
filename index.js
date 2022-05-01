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
    return inquirer.prompt(questions);
}

// const addTeamMemberQuestions = () => {
//     return [
//         {
//             type: "list",
//             name: "teamMember",
//             message: "Add a team member?",
//             choices: ["Engineer", "Intern", "I do not want to add a team member."]
//         }
//     ];
// }

const addTeamMember = () => {
    questions = [ 
        {
            type: "list",
            name: "teamMember",
            message: "Add a team member?",
            choices: ["Engineer", "Intern", "I do not want to add a team member."]
        }
    ]
    return inquirer.prompt(questions);
}

const init = () => {
    askManagerQuestions()
        .then(answers => {
            console.log(answers);

            const manager = new Manager(
                `${answers.manager.name}`,
                `${answers.manager.id}`,
                `${answers.manager.email}`,
                `${answers.manager.officeNumber}`)
                
            team.push(manager);

            console.log(team);
        })
}

init();


