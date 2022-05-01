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
        if (!this.school || this.school === " ") {
            throw new Error("Please input Intern's school.");
        }
        return this.school;
    }
}

module.exports = Intern;