const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        // turn office no. input into a string (this will catch office no.s that are only numbers)
        const officeNumber = this.officeNumber.toString();

        if (!officeNumber) {
            throw new Error("Please input Manager's Office Number. If none, input 'N/A' or '---'.");
        }
        return officeNumber;
    }
}

module.exports = Manager;