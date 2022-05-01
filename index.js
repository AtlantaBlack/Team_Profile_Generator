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
        // .then(answers => {
        //     console.log("engineer");
        //     console.log(answers);

        //     addTeamMember();
        // })
}

const askInternQuestions = () => {
    questions = q.internQuestions();
    return inquirer
        .prompt(questions)
        // .then(answers => {
        //     console.log(answers);

        //     addTeamMember();
        // });
}

const addTeamMember = () => {
    questions = {
        type: "list",
        name: "role",
        message: "Add a team member?",
        choices: ["Engineer", "Intern", "I do not want to add a team member."]
    }

    return inquirer.prompt(questions)
        .then(answers => {
            // console.log("add team member answer:");
            console.log(answers)
            
            teamMemberDetails(answers.role);
        })
}

const teamMemberDetails = (role) => {
    switch (role) {
        case "Engineer":
            askEngineerQuestions();
            break;
        case "Intern":
            askInternQuestions();
            break;
        default:
            exitAndGeneratePage();
    }
}

const exitAndGeneratePage = () => {
    console.log("exit");
}

const init = () => {
    askManagerQuestions()
        .then(answers => {
            // console.log("the answers object:");
            // console.log(answers);

            const manager = new Manager(
                `${answers.manager.name}`,
                `${answers.manager.id}`,
                `${answers.manager.email}`,
                `${answers.manager.officeNumber}`)

            team.push(manager);
            
            // console.log("the team array:");
            // console.log(team);

            addTeamMember();
        })
}

init();


