const Manager = require("../Lib/Man");
const manager = new Manager("Yasmin", "1234", "bustamiyasmin@gmail.com", "99");

describe("Manager", () => {
    it("Create constructor class from manager object", () => {
        expect(manager.name).toBe("Yasmin");
        expect(manager.id).toBe("1234");
        expect(manager.email).toBe("bustamiyasmin@gmail.com");
        expect(manager.officeNumber).toBe("99");
    });
    it("Confirm name from getName method", () => {
        expect(manager.getName()).toBe("Yasmin");
    })
    it("Confirm ID from getID method", () => {
        expect(manager.getID()).toBe("1234");
    })
    it("Confirm email from getEmail method", () => {
        expect(manager.getEmail()).toBe("bustamiyasmin@gmail.com");
    })
    it("Confirm Github from getOfficeNumber method", () => {
        expect(manager.getOfficeNumber()).toBe("99");
    });
    it("Confirm role from getRole method", () => {
        expect(manager.getRole()).toBe("Manager");
    });
});