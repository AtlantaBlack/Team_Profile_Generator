const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        // match characters EXCLUDING a-z, A-Z, 0-9, _ (underscore), " " (space), : (colon), - (dash), & (ampersand)
        const schoolRegex = /[^a-zA-Z0-9 :&-]+/g;

        this.school.trim(); // trim whitespaces

        if (!this.school || !Boolean(this.school)) {
            // !Boolean(x) <-- make sure a string of empty spaces doesn't go through
            throw new Error("Please enter Intern's school. If not applicable, enter '---'.");
        } else if (schoolRegex.test(this.school)) {
            // if name includes special characters other than underscore & space, reject the name
            throw new Error("School name can only contain alphanumeric characters, underscores (_), spaces, colons (:), dashes (-), and/or ampersands (&).");
        }
        return this.school;
    }
}

module.exports = Intern;