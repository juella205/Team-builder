const Employee = require('../lib/employee');

test('creates employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test('Set Employee Name', () => {
    const name = "Grace"
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
    
});
test('Set ID', () => {
    const testId = 1;
    const employee = new Employee("Grace", testId);
    expect(employee.id).toBe(testId);
});
test('Set Email', () => {
    const testEmail = "grace@fakegmail.com"
    const employee = new Employee("Grant", 1, testEmail);
    expect(employee.email).toBe(testEmail);
});
test('get name from getName', () => {
    const testName = "Grace"
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});
test('get ID from getId', () => {
    const testId = "1"
    const employee = new Employee("Grace", testId);
    expect(employee.getId()).toBe(testId);
});
test('get email from getEmail', () => {
    const testEmail = "grace@fakegmail.com"
    const employee = new Employee("Grace", 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});
test('getRole function', () => {
    const testRole = "Employee"
    const employee = new Employee("Grace", 1, "grace@fakegmail.com");
    expect(employee.getRole()).toBe(testRole);
});