const Employee = require('../lib/Employee');
jest.mock('../lib/Employee.js');


test('creates employee object', () => {
    const employee = new Employee('Chloe');
  
    expect(employee.name).toBe('Chloe');
    expect(employee.id.toEqual(expect.any(Number)));
    expect(employee.email).toEqual(expect.arrayContaining([expect.any(Object)]));

  });
  
  test("gets data for employee role", () => {
      const employee = new Employee('Chloe');
    
      expect(employee.getName()).toHaveProperty('name');
      expect(employee.getId()).toHaveProperty('id');
      expect(employee.getEmail()).toHaveProperty('email');
      expect(employee.getRole()).toHaveProperty('role');
    });
  

    test('test to get name', () => {
        expect(employee.getName()).toBe('Chloe');
    });
    
    test('test to get id', () => {
        expect(employee.getId()).toBe('12');
    });
    
    test('test to get email', () => {
        expect(employee.getEmail()).toBe('chloe@email.com');
    });
    
    test('test to get role', () => {
        expect(employee.getRole()).toBe('Employee');
    });
  