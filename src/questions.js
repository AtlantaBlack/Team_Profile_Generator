// questions for each team role

// manager questions
function managerQuestions() {
    return [
        {
            type: "input",
            name: "name",
            message: "Name of Manager/Team Lead:",
            validate(answer) {
                let name = answer.trim(); // trim to get rid off white spaces
                if (!name || !Boolean(name)) { // if undefined in any way
                    return "Please enter a name."; // ask user to redo
                }
                return true;
            }
        },
        {
            type: "input",
            name: "id",
            message: "ID number of Manager/Team Lead:",
            validate(answer) {
                if (!parseInt(answer) || answer < 1) { // make sure input is a number over 0
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
                // email format to follow this regex: string@string.str
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
            message: "Office number of Manager/Team Lead (if not applicable, enter '---'):",
            default: "---",
            validate(answer) {
                // office numbers can be any combo of letters, special chars and numbers
                let office = answer.trim();
                if (!office || !Boolean(office)) {
                    return "Please enter an office number. If not applicable, enter '---'";
                }
                return true;
            }
        }
    ];
} 

// engineer questions
function engineerQuestions() {
    return [
        {
            type: "input",
            name: "name",
            message: "Name of Engineer:",
            validate(answer) {
                let name = answer.trim(); // make sure there is something
                if (!name || !Boolean(name)) { // input can't be undefined
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
                // github must include github and a user profile
                const gitRegex = /^(http(s?):\/\/)?(www\.)?github\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$/i;
                if (!gitRegex.test(answer)) {
                    return "Please enter a valid GitHub URL.";
                }
                return true;
            }
        }
    ];
} 

// intern questions
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
            message: "School of Intern (if not applicable, enter '---'):",
            default: "---",
            validate(answer) {
                // school can only accept some special characters, plus letters and numbers
                const schoolRegex = /[^a-zA-Z0-9 :&-]+/g;
                let school = answer.trim();

                if (!school || !Boolean(school)) {
                    return "Please enter a school name. If not applicable, enter '---'";
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