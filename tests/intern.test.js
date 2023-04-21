const Intern = require("../lib/Intern");

test("setting school via the constructor argument", () => {
    const testValue = "KSU";
    const employee = new Intern("Brittany", 1, "grace@fakemail.com", testValue);
    expect(employee.school).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Intern";
    const employee = new Intern("Brittany", 1, "grace@fakemail.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get School", () => {
    const testValue = "KSU";
    const employee = new Intern("Brittany", 1, "grace@fakemail.com", testValue);
    expect(employee.getSchool()).toBe(testValue);
});