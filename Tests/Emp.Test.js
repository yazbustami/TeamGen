const Employee = require("../Lib/Emp");
const employee = new Employee("Yasmin", "1234", "bustamiyasmin@gmail.com");

describe("Employee", () => {
    it("Create constructor class from employee object", () => {
        expect(employee.name).toBe("Yasmin");
        expect(employee.id).toBe("1234");
        expect(employee.email).toBe("bustamiyasmin@gmail.com");
    });
    it("Confirm name from getName method", () => {
        expect(employee.getName()).toBe("Yasmin");
    })
    it("Confirm ID from getID method", () => {
        expect(employee.getID()).toBe("1234");
    })
    it("Confirm email from getEmail method", () => {
        expect(employee.getEmail()).toBe("bustamiyasmin@gmail.com");
    })
    it("Confirm role from getRole method", () => {
        expect(employee.getRole()).toBe("Employee");
    });
});