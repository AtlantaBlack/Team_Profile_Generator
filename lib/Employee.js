class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = this.getRole();
    }

    getName() {
        // match characters EXCLUDING a-z, A-Z, 0-9, _ (underscore), " " (space)
        const nameRegex = /[^a-zA-Z0-9 ]+/g;

        this.name.trim(); // trim the whitespaces

        if (!this.name || !Boolean(this.name)) {
            // !Boolean(x) <-- this is to catch any string that is just a bunch of empty spaces
            throw new Error("Name cannot be an empty string (must contain at least one alphanumeric character).");
        } else if (nameRegex.test(this.name)) {
            // if name includes special characters other than underscore & space, reject the name
            throw new Error("Name can only contain alphanumeric characters (including spaces and underscores).");
        }
        return this.name;
    }

    getId() {
        // make the id a Number in case it was passed in as a string
        const id = parseInt(this.id);

        if (!id) {
            throw new Error("Please enter an ID number (ID must be a number greater than 1).");
        } else if (id < 1) {
            throw new Error("ID cannot be a number less than 1.");
        }
        return id;
    }

    getEmail() {
        // email validation that includes @ and .
        const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

        if (!this.email) {
            throw new Error("Email cannot be an empty string.");
        } else if (!regexEmail.test(this.email)) {
            throw new Error("Email must contain one '@' symbol and at least one dot '.'.");
        }
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;