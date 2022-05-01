const Employee = require("../lib/Employee");

describe("Employee tests", () => {
    describe("Initialisation", () => {
        // positive test
        test("New Employee contains three parameters: name, ID, email", () => {
            const validEmployee = new Employee("James McPerson", 2, "email@email.com");

            expect(validEmployee.getName()).toEqual("James McPerson");
            expect(validEmployee.getId()).toEqual(2);
            expect(validEmployee.getEmail()).toEqual("email@email.com");
        })        
        // positive test
        test("New Employee should get assigned role = Employee", () => {
            const validEmployee = new Employee("James McPerson", 2, "email@email.com");

            expect(validEmployee.role).toEqual("Employee");
        })
    })

    // validation for name input
    describe("Name validation", () => {
        // positive test
        test("Employee name is a string containing at least one (1) alphanumeric character", () => {
            const validEmployee = new Employee("James McPerson", 2, "email@email.com")

            expect(validEmployee.name.length).toBeGreaterThanOrEqual(1);
        })

        // exception test
        test("Should fail if Employee name is an empty string or a string of empty spaces", () => {
            const invalidEmployees = [
                new Employee("", 2, "email@email.com"),
                new Employee("     ", 3, "email@email.com")
            ];
            const err = "Name cannot be an empty string (must contain at least one alphanumeric character).";

            expect(() => {
                invalidEmployees.forEach(invalidEmployee => {
                    invalidEmployee.getName();
                })
            }).toThrow(err);
        })
        // exception test
        test("Should fail if Employee name contains special characters", () => {
            const invalidEmployee = new Employee("James # McPerson", 2, "email@email.com");
            const err = "Name can only contain alphanumeric characters (including spaces and underscores).";

            expect(() => {
                invalidEmployee.getName();
            }).toThrow(err);
        })
    })

    // validation for ID input
    describe("ID validation", () => {
        // positive test
        test("Employee ID should be a number greater than or equal to 1", () => {
            const validEmployee = new Employee("James McPerson", 5, "email@email.com");

            expect(validEmployee.id).toBeGreaterThanOrEqual(1);
        })

        // exception test
        test("Should fail if no ID is inputted", () => {
            const invalidEmployees = [
                new Employee("James McPerson", "", "email@email.com"),
                new Employee("Jiminy McCricket", "    ", "email@email.com")
            ];
            const err = "Please enter an ID number (ID must be a number greater than 1).";

            expect(() => {
                invalidEmployees.forEach(invalidEmployee => {
                    invalidEmployee.getId();                    
                })
            }).toThrow(err);
        })
        // exception test
        test("Should fail if Employee ID type is not a Number", () => {
            const invalidEmployees = [
                new Employee("James McPerson", "12", "email@email.com"),
                new Employee("Jiminy McCricket", "abc", "email@email.com")
            ];
            const err = "Please enter an ID number (ID must be a number greater than 1)."

            expect(() => {
                invalidEmployees.forEach(invalidEmployee => {
                    invalidEmployee.getId();
                })
            }).toThrow(err);
        })
        // exception test
        test("Should fail if Employee ID is less than 1", () => {
            const invalidEmployee = new Employee("James McPerson", -1, "email@email.com");
            const err = "ID cannot be a number less than 1"

            expect(() => {
                invalidEmployee.getId();
            }).toThrow(err);
        })
    })

    // validation for email input
    describe("Email validation", () => {
        // positive test
        test("Email should be a string containing one '@' symbol and at least one dot '.'", () => {
            const validEmployee = new Employee("James McPerson", 2, "email@email.com");
            const validEmail = validEmployee.getEmail();

            // regex to make sure the format is "string@string.str"
            const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

            expect(regexEmail.test(validEmail)).toEqual(true);
        })

        // exception test
        test("Should fail if Employee email is an empty string", () => {
            const invalidEmployee = new Employee("James McPerson", 2, "");
            const err = "Email cannot be an empty string.";

            expect(() => {
                invalidEmployee.getEmail();
            }).toThrow(err);
        })
        // exception test
        test("Should fail if Employee email does not contain one '@' symbol and at least one dot '.'", () => {
            const invalidEmployees = [
                new Employee("James McPerson", 2, "@.com"),
                new Employee("Alfred Hitchcock", 3, "email"),
                new Employee("Sandra Manfield", 5, "email.com"),
                new Employee("King Hyrule", 6, "email@email")
            ];
            const err = "Email must contain one '@' symbol and at least one dot '.'.";

            expect(() => {
                invalidEmployees.forEach(invalidEmployee => {
                    invalidEmployee.getEmail();
                })
            }).toThrow(err);
        })
    })
})