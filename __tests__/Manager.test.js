const Manager = require("../lib/Manager");

describe("Manager tests", () => {
    describe("Initialisation", () => {
        // positive test
        test("New Manager should contain four parameters: name, ID, email, officeNumber", () => {
            const validManager = new Manager("George Bush", 1, "email@email.com", "504-A");

            expect(validManager.getName()).toEqual("George Bush");
            expect(validManager.getId()).toEqual(1);
            expect(validManager.getEmail()).toEqual("email@email.com");
            expect(validManager.getOfficeNumber()).toEqual("504-A");
        })
        // positive test
        test("New Manager should get assigned role = Manager", () => {
            const validManager = new Manager("George Bush", 1, "email@email.com", "504-A");

            expect(validManager.role).toEqual("Manager");
        })
    })

    describe("Office Number validation", () => {
        // positive test
        test("Office Number should contain at least one (1) character", () => {
            const validManager = new Manager("George Bush", 1, "email@email.com", 56732);
            const officeNumber = validManager.getOfficeNumber();

            expect(officeNumber.length).toBeGreaterThanOrEqual(1);
        })

        // exception test
        test("Should fail if Office Number is undefined", () => {
            const invalidManager = new Manager("George Bush", 1, "email@email.com", "");
            const err = "Please input Manager's Office Number. If none, input 'N/A' or '---'.";

            expect(() => {
                invalidManager.getOfficeNumber();
            }).toThrow(err);
        })
    })
})