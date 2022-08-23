const Engineer = require('../lib/Engineer');
const engineer = new Engineer('chloe', '11', 'chloebyrnesash@gmail.com', 'chloebyrnes');

test('test for engineer info', () => {
    expect(engineer.name).toBe('chloe');
    expect(engineer.id).toBe('11');
    expect(engineer.email).toBe('chloebyrnesash@gmail.com')
    expect(engineer.github)
});

test('test if we can get name from getName()', () => {
    expect(engineer.getName()).toBe('chloe');
});

test('test if we can get ID from getId()', () => {
    expect(engineer.getId()).toBe('11');
});

test('test if we can get email from getEmail()', () => {
    expect(engineer.getEmail()).toBe('chloebyrnesash@gmail.com');
});

test('test if we can get email from getGithub()', () => {
    expect(engineer.getGithub()).toBe('chloebyrnes');
});

test('test if we can get role from getRole()', () => {
    expect(engineer.getRole()).toBe('Engineer');
});