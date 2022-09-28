const inquirer = require("inquirer");
const fs = require("fs");
const team = require("./SRC/team");
const Manager = require("./Lib/Man");
const Engineer = require("./Lib/Enj");
const Intern = require("./Lib/Intern");

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
            menu();
        })
};
const startEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name:"name",
            message: "what is the Engineer's name?",
        },
        {
            type: "input",
            name:"id",
            message: "what is the Engineer's ID?",
        },
        {
            type: "input",
            name:"email",
            message: "what is the Engineer's email?",
        },
        {
            type: "input",
            name:"github",
            message: "what is the Engineer's Github?",
        },
    ])
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        members.push(engineer);
        menu();
    })
};
const startIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name:"name",
            message: "what is the Intern's name?",
        },
        {
            type: "input",
            name:"id",
            message: "what is the Intern's ID?",
        },
        {
            type: "input",
            name:"email",
            message: "what is the Intern's email?",
        },
        {
            type: "input",
            name:"school",
            message: "what is the Intern's School?",
        },
    ])
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        members.push(intern);
        menu();
    })
};

const menu = () => {
    inquirer.prompt([
        {
            type:"list",
            message: "Do you want to add another team member or creat the team?"
            choices: ["Add an Engineer", "Add an Intern", "Create Team"],
            name: "select",

        }])
        .then((answers) => {
        switch(answers.select){
            case "Add an Engineer":
            startEngineer();
            break;

        case "Add an Intern":
            startIntern();
            break;

        default:
            generateTeam();
            break;
        }})
};

const generateTeam = () => {
    fs.writeFile("./Dist/index.html", team(members), (err) =>
    err ? console.log(err) : console.log ("succes!")); 
};

startManager();