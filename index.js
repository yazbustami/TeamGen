const inquirer = require("inquirer");
const fs = require("fs");
const team = require("./SRC/team");
const Manager = require("./Lib/Man");
const Engineer = require("./Lib/Enj");
const Intern = require("./Lib/Intern")

const members = [];

const startManager = () => {
        inquirer.prompt([
            {
                type: "input",
                name:"name",
                message: "what is the Manager's name?",
            },
            {
                type: "input",
                name:"id",
                message: "what is the Manager's ID?",
            },
            {
                type: "input",
                name:"email",
                message: "what is the Manager's email?",
            },
            {
                type: "input",
                name:"officeNumber",
                message: "what is the Manager's office number?",
            },
        ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            members.push(manager);
            menubar();
        })
}
