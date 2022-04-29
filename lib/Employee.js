class Employee {
    constructor() {
        this.name;
        this.id;
        this.email;
        this.role = this.getRole();
    }

    getName(name) {
        return this.name;
    }

    getId(id) {
        return this.id;
    }

    getEmail(email) {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;