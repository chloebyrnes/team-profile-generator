const Employee = require('../lib/Employee');
const employee = new Employee('chloe', '10', 'chloebyrnesash@gmail.com');

test('test for employee info', () => {
    expect(employee.name).toBe('chloe');
    expect(employee.id).toBe('10');
    expect(employee.email).toBe('chloebyrnesash@gmail.com')
});

test('test if we can get name from getName()', () => {
    expect(exployee.getName()).toBe('chloe');
});

test('test if we can get ID from getId()', () => {
    expect(exployee.getId()).toBe('10');
});

test('test if we can get email from getEmail()', () => {
    expect(exployee.getEmail()).toBe('chloebyrnesash@gmail.com');
});

test('test if we can get role from getRole()', () => {
    expect(exployee.getRole()).toBe('Employee');
});