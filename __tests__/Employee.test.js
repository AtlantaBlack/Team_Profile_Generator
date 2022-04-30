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

        test("Employee name is a string containing alphanumeric characters (includes space and underscores)", () => {
            const validEmployee = new Employee("James McPerson", 2, "email@email.com");
            const validName = validEmployee.getName();

            const nameRegex = /[\w ]*/;

            expect(nameRegex.test(validName)).toBe(true);
        })

        // exception test
        test("Should fail if Employee name is an empty string", () => {
            const invalidEmployee = new Employee("", 2, "email@email.com");

            expect(() => {
                invalidEmployee.getName();
            }).toThrow("Name cannot be an empty string.");
        })
    })

    describe("ID validation", () => {
        // positive test
        test("Employee ID is a number greater than or equal to 1", () => {
            const validEmployee = new Employee("James McPerson", 1, "email@email.com");

            expect(validEmployee.id).toBeGreaterThanOrEqual(1);
        })
        // exception
        test("Should fail if Employee ID type is not a Number", () => {
            const invalidEmployee = new Employee("James McPerson", "1", "email@email.com");

            expect(() => {
                invalidEmployee.getId();
            }).toThrow("ID must be a Number (not a string).");
        })

        test("Should fail if Employee ID is less than 1", () => {
            const invalidEmployee = new Employee("James McPerson", -1, "email@email.com");

            expect(() => {
                invalidEmployee.getId();
            }).toThrow("ID cannot be a number less than 1.");
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