const inquirer = require("inquirer");
const fs = require("fs");
const team = require("./SRC/team");
const Manager = require("./Lib/Man");
const Engineer = require("./Lib/Enj");
const Intern = require("./Lib/Intern");

const members = [];

const InitialManager = () => {
        inquirer.prompt([
            {
                type: "input",
                name:"name",
                message: "Manager name?",
            },
            {
                type: "input",
                name:"id",
                message: "Manager ID?",
            },
            {
                type: "input",
                name:"email",
                message: "Manager email?",
            },
            {
                type: "input",
                name:"officeLevel",
                message: "What floor is the Manager's office on?",
            },
        ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeLevel);
            members.push(manager);
            menu();
        })
};

const InitialEngineer = () => {
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
const InitialIntern = () => {
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
            message: "Do you want to add another team member or create the team?",
            choices: ["Add an Engineer", "Add an Intern", "Create Team"],
            name: "select",

        }])
        .then((answers) => {
        switch(answers.select){
            case "Add an Engineer":
            InitialEngineer();
            break;

        case "Add an Intern":
            InitialIntern();
            break;

        default:
            InitiateTeam();
            break;
        }})
};

const InitiateTeam = () => {
    fs.writeFile("./Dist/index.html", team(members), (err) =>
    err ? console.log(err) : console.log ("succes!")); 
};

InitialManager();