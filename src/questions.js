function managerQuestions() {
    return [
        {
            type: "input",
            name: "name",
            message: "Name of Manager/Team Lead:",
            validate(answer) {
                let name = answer.trim();
                if (!name || !Boolean(name)) {
                    return "Please enter a name.";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "id",
            message: "ID number of Manager/Team Lead:",
            validate(answer) {
                if (!parseInt(answer) || answer < 1) {
                    return "Please enter an ID number greater than 0.";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "email",
            message: "Email of Manager/Team Lead:",
            validate(answer) {
                const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
                if (regexEmail.test(answer)) {
                    return true;
                }
                return "Please enter a valid email address.";
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Office number of Manager/Team Lead (if not applicable, enter 'N/A' or '---'):",
            default: "---",
            validate(answer) {
                let office = answer.trim();
                if (!office || !Boolean(office)) {
                    return "Please enter an office number. If not applicable, enter 'N/A' or '---'";
                }
                return true;
            }
        }
    ];
} 

function engineerQuestions() {
    return [
        {
            type: "input",
            name: "name",
            message: "Name of Engineer:",
            validate(answer) {
                let name = answer.trim();
                if (!name || !Boolean(name)) {
                    return "Please enter a name.";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "id",
            message: "ID number of Engineer:",
            validate(answer) {
                if (!parseInt(answer) || answer < 1) {
                    return "Please enter an ID number (number must be greater than 0).";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "email",
            message: "Email of Engineer:",
            validate(answer) {
                const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
                if (regexEmail.test(answer)) {
                    return true;
                }
                return "Please enter a valid email address.";
            }
        },
        {
            type: "input",
            name: "github",
            message: "GitHub URL of Engineer:",
            default: "https://github.com/user",
            validate(answer) {
                const gitRegex = /^(http(s?):\/\/)?(www\.)?github\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$/i;
                if (!gitRegex.test(answer)) {
                    return "Please enter a valid GitHub URL.";
                }
                return true;
            }
        }
    ];
} 

function internQuestions() {
    return [
        {
            type: "input",
            name: "name",
            message: "Name of Intern:",
            validate(answer) {
                let name = answer.trim();
                if (!name || !Boolean(name)) {
                    return "Please enter a name.";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "id",
            message: "ID number of Intern:",
            validate(answer) {
                if (!parseInt(answer) || answer < 1) {
                    return "Please enter an ID number greater than 0.";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "email",
            message: "Email of Intern:",
            validate(answer) {
                const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
                if (regexEmail.test(answer)) {
                    return true;
                }
                return "Please enter a valid email address.";
            }
        },
        {
            type: "input",
            name: "school",
            message: "School of Intern (if not applicable, enter 'N/A' or '---'):",
            default: "N/A",
            validate(answer) {
                const schoolRegex = /[^a-zA-Z0-9 :&-]+/g;
                let school = answer.trim();

                if (!school || !Boolean(school)) {
                    return "Please enter a school name. If not applicable, enter 'N/A' or '---'";
                } else if (schoolRegex.test(school)) {
                    return "School name can only include alphanumeric characters, underscores, spaces, colons, dashes, and/or ampersands.";
                }
                return true;
            }
        }
    ];
} 


module.exports = {
    managerQuestions,
    engineerQuestions,
    internQuestions
};