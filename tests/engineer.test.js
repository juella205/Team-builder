const Engineer = require('../lib/Engineer');

test("setting up github via constructor", () => {
    const testValue = "juella205";
    const employee = new Engineer("Grace", 1, "grace@fakegmail.com", testValue);
    expect(employee.github).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Grace", 1, "grace@fakegmail.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get gitHub", () => {
    const testValue = "juella205";
    const employee = new Engineer("Grace", 1, "grace@fakegmail.com", testValue);
    expect(employee.getGitHub()).toBe(testValue);
})