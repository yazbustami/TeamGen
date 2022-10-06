const Employee = require("./Emp");

class Manager extends Employee{
    constructor (name, id, email, officeLevel) {
        super(name, id, email);
        this.officeLevel = officeLevel;
    }
    getOfficeLevel() {
        return this.officeLevel;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;