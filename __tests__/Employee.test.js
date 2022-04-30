const Employee = require("../lib/Employee");

describe("Employee tests", () => {
    describe("Initialisation", () => {
        test("New Employee contains three parameters: name, ID, and email", () => {
            const validEmployee = new Employee("James McPerson", 2, "email@email.com");

            expect(validEmployee.getName()).toEqual("James McPerson");
            expect(validEmployee.getId()).toEqual(2);
            expect(validEmployee.getEmail()).toEqual("email@email.com");
        })        
        
        test("New Employee is assigned the role 'Employee'", () => {
            const validEmployee = new Employee("James McPerson", 2, "email@email.com");

            expect(validEmployee.role).toEqual("Employee");
        })
    })

    describe("Name validation", () => {
        // positive test
        test("Employee name is a string containing at least one (1) character", () => {
            const validEmployee = new Employee("James McPerson", 2, "email@email.com");

            expect(validEmployee.name.length).toBeGreaterThanOrEqual(1);
        })

        // exception test
        test("Should fail if Employee name is an empty string", () => {
            const invalidEmployee = new Employee("", 2, "email@email.com");
            const err = "Name cannot be an empty string.";

            expect(() => {
                invalidEmployee.getName();
            }).toThrow(err);
        })
        test("Should fail if Employee name contains special characters", () => {
            const invalidEmployee = new Employee("James # McPerson", 2, "email@email.com");
            const err = "Name can only contain alphanumeric characters (including spaces and underscores).";

            expect(() => {
                invalidEmployee.getName();
            }).toThrow(err);
        })
    })

    describe("ID validation", () => {
        // positive test
        test("Employee ID is a number greater than or equal to 1", () => {
            const validEmployee = new Employee("James McPerson", 5, "email@email.com");

            expect(validEmployee.id).toBeGreaterThanOrEqual(1);
        })

        // exception
        test("Should fail if no ID is inputted", () => {
            const invalidEmployee = new Employee("James McPerson", "", "email@email.com");
            const err = "Please input an ID number.";

            expect(() => {
                invalidEmployee.getId();
            }).toThrow(err);
        })
        test("Should fail if Employee ID type is not a Number", () => {
            const invalidEmployee = new Employee("James McPerson", "15", "email@email.com");
            const err = "ID must be a Number (not a string)."

            expect(() => {
                invalidEmployee.getId();
            }).toThrow(err);
        })

        test("Should fail if Employee ID is less than 1", () => {
            const invalidEmployee = new Employee("James McPerson", -1, "email@email.com");
            const err = "ID cannot be a number less than 1"

            expect(() => {
                invalidEmployee.getId();
            }).toThrow(err);
        })
    })

    describe("Email validation", () => {
        // positive test
        test("Email should be a string containing one '@' symbol and at least one dot '.'", () => {
            const validEmployee = new Employee("James McPerson", 2, "email@email.com");
            const validEmail = validEmployee.getEmail();

            const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

            expect(regexEmail.test(validEmail)).toBe(true);
        })

        //exception test
        test("Should fail if Employee email is an empty string", () => {
            const invalidEmployee = new Employee("James McPerson", 2, "");
            const err = "Email cannot be an empty string.";

            expect(() => {
                invalidEmployee.getEmail();
            }).toThrow(err);
        })

        test("Should fail if Employee email does not contain one '@' symbol and at least one dot '.'", () => {
            const invalidEmployee = new Employee("James McPerson", 2, "@.com");
            const err = "Email must contain one '@' symbol and at least one dot '.'.";

            expect(() => {
                invalidEmployee.getEmail();
            }).toThrow(err);
        })

    })

})


// describe("Employee tests", () => {
//     describe("Initialisation", () => {
//         test("Employee is created and assigned the role 'Employee'", () => {
//             const validEmployee = new Employee();

//             expect(validEmployee).toEqual({role: "Employee"});
//         })
//         test("Employee contains three parameters: name, ID, and email", () => {
//             let validEmployee = new Employee();
//             validEmployee.getName("Sushan Yue");
//             validEmployee.getId(5);
//             validEmployee.getEmail("email@email.com");

//             expect(validEmployee).toEqual({
//                 name: "Sushan Yue",
//                 id: 5,
//                 email: "email@email.com",
//                 role: "Employee"
//             })
//         })
//     })

//     describe("Name validation", () => {
//         // positive test
//         test("Employee name is a string containing at least one (1) character", () => {
//             const validEmployee = new Employee();
//             validEmployee.getName("Sushan Yue");

//             expect(validEmployee.name.length).toBeGreaterThanOrEqual(1);
//         })
//         // exception test
//         test("Name must be a non-empty string", () => {
//             const cb = () => {
//                 invalidEmployee = new Employee();
//                 invalidEmployee.getName(""); 
//             }
//             const InvalidNameError = "Name must be a non-empty string.";

//             expect(cb).toThrowError(InvalidNameError);
//         })
//     })

//     describe("ID validation", () => {
//         // positive test
//         test("Employee ID is a number greater than or equal to 1", () => {
//             const validEmployee = new Employee();
//             validEmployee.getId(1);

//             expect(validEmployee.id).toBeGreaterThanOrEqual(1);
//         })
//         // exception
//         test("Employee ID input type must be a number (not a string)", () => {
//             const cb = () => {
//                 invalidEmployee = new Employee();
//                 invalidEmployee.getId("5");
//             } 
//             const InvalidIdError = "ID input must be a number greater than or equal to 1.";

//             expect(cb).toThrowError(InvalidIdError);
//         })
//     })

// })