const Intern = require('../lib/Intern');

describe("Intern tests", () => {
    describe("Initialisation", () => {
        // positive test
        test("New Intern should contain four parameters: name, ID, email, school", () => {
            const validIntern = new Intern("Sally Mae", 10, "email@email.com", "The Coding Bootcamp");

            expect(validIntern.getName()).toEqual("Sally Mae");
            expect(validIntern.getId()).toEqual(10);
            expect(validIntern.getEmail()).toEqual("email@email.com");
            expect(validIntern.getSchool()).toEqual("The Coding Bootcamp");
        })
        // positive test
        test("New Intern should be assigned role = Intern", () => {
            const validIntern = new Intern("Sally Mae", 10, "email@email.com", "The Coding Bootcamp");

            expect(validIntern.role).toEqual("Intern");
        })
    })

    describe("School validation", () => {
        // positive test
        test("School should contain at least one (1) alphanumeric character", () => {
            const validIntern = new Intern("Sally Mae", 10, "email@email.com", "The Coding Bootcamp");

            expect(validIntern.school.length).toBeGreaterThanOrEqual(1);
        })

        // exception test
        test("Should fail if Intern School is undefined or a string of empty spaces", () => {
            const invalidInterns = [
                new Intern("Sally Mae", 10, "email@email.com", ""),
                new Intern("Violet Chan", 11, "email@email.com", "    ")
            ];
            const err = "Please enter Intern's school. If not applicable, enter 'N/A' or '---'.";

            expect(() => {
                invalidInterns.forEach(invalidIntern => {
                    invalidIntern.getSchool();
                })
            }).toThrow(err);
        })
        // exception test
        test("Should fail if Intern School contains special characters other than underscores, spaces, colons, dashes, and ampersands", () => {
            const invalidInterns = [
                new Intern("Sally Mae", 10, "email@email.com", "The *Coding* Bootcamp School"),
                new Intern("Violet Chan", 11, "email@email.com", "%%%%"),
                new Intern("Cordelia Leona", 12, "email@email.com", "1337 $choolß")
            ];
            const err = "School name can only contain alphanumeric characters, underscores (_), spaces, colons (:), dashes (-), and/or ampersands (&).";

            expect(() => {
                invalidInterns.forEach(invalidIntern => {
                    invalidIntern.getSchool();
                })
            }).toThrow(err);
        })
    })
})