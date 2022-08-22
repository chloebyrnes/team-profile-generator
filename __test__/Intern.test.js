const Intern = require('../lib/Intern');
const intern = new Intern('chloe', '12', 'chloebyrnesash@gmail.com', 'Coding School');

test('test for intern info', () => {
    expect(intern.name).toBe('chloe');
    expect(intern.id).toBe('12');
    expect(intern.email).toBe('chloebyrnesash@gmail.com')
});

test('test if we can get name from getName()', () => {
    expect(intern.getName()).toBe('chloe');
});

test('test if we can get ID from getId()', () => {
    expect(intern.getId()).toBe('12');
});

test('test if we can get email from getEmail()', () => {
    expect(intern.getEmail()).toBe('chloebyrnesash@gmail.com');
});

test('test if we can get email from getSchool()', () => {
    expect(intern.getSchool()).toBe('Coding School');
});

test('test if we can get role from getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
});