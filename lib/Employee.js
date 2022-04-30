class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = this.getRole();
    }

    getName() {
        if (!this.name) {
            throw new Error("Name cannot be an empty string.");
        } else {
            return this.name;
        }
    }

    getId() {
        // if (!id || isNaN(id)) {
        //     throw new Error('ID input must be a number greater than or equal to 1.');
        // } else {
        //     this.id = id;

        // }
        if (Number.isInteger(this.id) === false) {
            throw new Error("ID must be a Number (not a string).");
        } else if (this.id < 1) {
            throw new Error("ID cannot be a number less than 1.");
        } else {
            return this.id;
        }

    }

    getEmail() {
        // this.email = email;
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;