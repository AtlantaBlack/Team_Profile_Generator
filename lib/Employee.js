class Employee {
    constructor() {
        this.name;
        this.id;
        this.email;
        this.role = this.getRole();
    }

    getName(name) {
        if (!name) {
            throw new Error('Name must be a non-empty string.');
        } else {
            this.name = name;        
            return name;
        }
    }

    getId(id) {
        if (!id || isNaN(id)) {
            throw new Error('ID input must be a number greater than or equal to 1.');
        } else {
            this.id = id;
            return this.id;
        }

    }

    getEmail(email) {
        this.email = email;
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;