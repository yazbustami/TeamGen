const Engineer = require("../Lib/Enj");
const engineer = new Engineer("Yasmin", "1234", "bustamiyasmin@gmail.com", "yazbustami");

describe("Engineer", () => {
    it("Create constructor class from Engineer object", () => {
        expect(engineer.name).toBe("Yasmin");
        expect(engineer.id).toBe("1234");
        expect(engineer.email).toBe("bustamiyasmin@gmail.com");
        expect(engineer.github).toBe("yazbustami");
    });
    it("Confirm name from getName method", () => {
        expect(engineer.getName()).toBe("Yasmin");
    })
    it("Confirm ID from getID method", () => {
        expect(engineer.getID()).toBe("1234");
    })
    it("Confirm email from getEmail method", () => {
        expect(engineer.getEmail()).toBe("bustamiyasmin@gmail.com");
    })
    it("Confirm Github from getGithub method", () => {
        expect(engineer.getGithub()).toBe("yazbustami");
    });
    it("Confirm role from getRole method", () => {
        expect(engineer.getRole()).toBe("Engineer");
    });
});