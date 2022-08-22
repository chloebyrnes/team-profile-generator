const Manager = require('../lib/Manager');
const manager = new Manager('chloe', '13', 'chloebyrnesash@gmail.com', '100-100-1000');

test('test for manager info', () => {
    expect(manager.name).toBe('chloe');
    expect(manager.id).toBe('13');
    expect(manager.email).toBe('chloebyrnesash@gmail.com')
});

test('test if we can get name from getName()', () => {
    expect(manager.getName()).toBe('chloe');
});

test('test if we can get ID from getId()', () => {
    expect(manager.getId()).toBe('13');
});

test('test if we can get email from getEmail()', () => {
    expect(manager.getEmail()).toBe('chloebyrnesash@gmail.com');
});

test('test if we can get number from getNumber()', () => {
    expect(manager.getNumber()).toBe('100-100-1000');
});


test('test if we can get role from getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
});