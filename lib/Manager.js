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

        officeNumber.trim(); // trim string to get rid of whitespaces

        if (!officeNumber || !Boolean(officeNumber)) {
            // !Boolean(x) <-- to reject an input that's a bunch of empty spaces
            throw new Error("Please enter Manager's Office Number. If none, enter '---'.");
        }
        return officeNumber;
    }
}

module.exports = Manager;