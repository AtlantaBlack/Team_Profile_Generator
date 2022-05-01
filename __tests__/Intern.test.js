const Intern = require('../lib/Intern');

describe("Intern tests", () => {
    describe("Initialisation", () => {
        test("New Intern should contain four parameters: name, ID, email, school", () => {
            const validIntern = new Intern("Sally Mae", 10, "email@email.com", "The Coding Bootcamp");

            expect(validIntern.getName()).toEqual("Sally Mae");
            expect(validIntern.getId()).toEqual(10);
            expect(validIntern.getEmail()).toEqual("email@email.com");
            expect(validIntern.getSchool()).toEqual("The Coding Bootcamp");
        })

        test("New Intern should be assigned role = Intern", () => {
            const validIntern = new Intern("Sally Mae", 10, "email@email.com", "The Coding Bootcamp");

            expect(validIntern.role).toEqual("Intern");
        })
    })

    describe("School validation", () => {
        test("School should contain at least one (1) alphanumeric character", () => {
            const validIntern = new Intern("Sally Mae", 10, "email@email.com", "The Coding Bootcamp");

            expect(validIntern.school.length).toBeGreaterThanOrEqual(1);
        })

        test("Should fail if Intern School is an empty string or a whitespace", () => {
            const invalidInterns = [
                new Intern("Sally Mae", 10, "email@email.com", ""),
                new Intern("Sally Mae", 10, "email@email.com", " ")
            ];
            const err = "Please input Intern's school. If none, input 'N/A' or '---'.";

            expect(() => {
                invalidInterns.forEach(invalidIntern => {
                    invalidIntern.getSchool();
                })
            }).toThrow(err);
        })
    })
})