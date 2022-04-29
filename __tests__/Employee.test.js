const Employee = require('../lib/Employee');

describe("Employee tests", () => {
    describe('Initialisation', () => {
        test('Employee is created and assigned role: Employee', () => {
            const employee = new Employee();

            expect(employee).toEqual({role: 'Employee'});
        })
    })

})