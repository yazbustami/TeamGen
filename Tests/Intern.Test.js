const Intern = require("../Lib/Intern");
const intern = new Intern("Yasmin", "1234", "bustamiyasmin@gmail.com", "Northwestern University");

describe("Intern", () => {
    it("Create constructor class from intern object", () => {
        expect(intern.name).toBe("Yasmin");
        expect(intern.id).toBe("1234");
        expect(intern.email).toBe("bustamiyasmin@gmail.com");
        expect(intern.school).toBe("Northwestern University");
    });
    it("Confirm name from getName method", () => {
        expect(intern.getName()).toBe("Yasmin");
    })
    it("Confirm ID from getID method", () => {
        expect(intern.getID()).toBe("1234");
    })
    it("Confirm email from getEmail method", () => {
        expect(intern.getEmail()).toBe("bustamiyasmin@gmail.com");
    })
    it("Confirm school from getSchool method", () => {
        expect(intern.getSchool()).toBe("Northwestern University");
    });
    it("Confirm role from getRole method", () => {
        expect(intern.getRole()).toBe("Intern");
    });
});