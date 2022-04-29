const Employee = require('../lib/Employee');

describe("Employee tests", () => {
    describe('Initialisation', () => {
        test('Employee is created and assigned the role "Employee"', () => {
            const validEmployee = new Employee();

            expect(validEmployee).toEqual({role: 'Employee'});
        })
        test('Employee contains three parameters: name, ID, and email', () => {
            let validEmployee = new Employee();
            validEmployee.getName('Sushan Yue');
            validEmployee.getId(5);
            validEmployee.getEmail("email@email.com");

            expect(validEmployee).toEqual({
                name: 'Sushan Yue',
                id: 5,
                email: 'email@email.com',
                role: 'Employee'
            })
        })
    })

    describe('Name validation', () => {
        // positive test
        test('Employee name is a string containing at least one (1) character', () => {
            const validEmployee = new Employee();
            validEmployee.getName('Sushan Yue');

            expect(validEmployee.name.length).toBeGreaterThanOrEqual(1);
        })
        // exception test
        test('Name must be a non-empty string', () => {
            const cb = () => {
                invalidEmployee = new Employee();
                invalidEmployee.getName(''); 
            }
            const InvalidNameError = 'Name must be a non-empty string.';

            expect(cb).toThrowError(InvalidNameError);
        })
    })

    describe('ID validation', () => {
        // positive test
        test('Employee ID is a number greater than or equal to 1', () => {
            const validEmployee = new Employee();
            validEmployee.getId(1);

            expect(validEmployee.id).toBeGreaterThanOrEqual(1);
        })
        // exception
        test('Employee ID input type must be a number (not a string)', () => {
            const cb = () => {
                invalidEmployee = new Employee();
                invalidEmployee.getId("5");
            } 
            const InvalidIdError = 'ID input must be a number greater than or equal to 1.';

            expect(cb).toThrowError(InvalidIdError);
        })
    })



})