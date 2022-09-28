const creatTeam = (team) => {
    // empty array html
    const html = [];
    // manager card
    const createManager = manager => {

        let managerHTML = `<div class="card m-2 p-2 col-4" style="width: 18rem;">
            <div class="card-header bg-danger">
                <h4 class="card-title text-decoration-underline">${manager.name}</h4>
                <h6>Manager</h6>
            </div>
            <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-info">ID #: ${manager.id}</li>
                    <li class="list-group-item bg-info">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>"
                    <li class="list-group-item bg-info">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>`
            html.push(managerHTML);
}
// engineer card
const createEngineer = engineer => {
    let engineerHtml = `
    <div class="card m-2 p-2 col-4" style="width: 18rem;">
        <div class="card-header bg-success">
            <h4 class="card-title text-decoration-underline">${engineer.name}</h4>
            <h6>Engineer</h6>
        </div>
        <ul class= "list-group list-group-flush">
            <li class="list-group-item bg-info">ID #: ${engineer.id}</li>
            <li class="list-group-item bg-info">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>"
            <li class="list-group-item bg-info">Github Username: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                     </ul>
                </div>`
                html.push(engineerHtml);
}
// intern card
const createIntern = intern => {
    let internHtml =  `
    <div class="card m-2 p-2 col-4" style="width: 18rem;">
    <div class="card-header bg-secondary">
         <h4 class="card-title text-decoration-underline">${intern.name}</h4>
        <h6>Intern</h6>
        </div>
        <ul class= "list-group list-group-flush">
            <li class="list-group-item bg-info">ID #: ${intern.id}</li>
            <li class="list-group-item bg-info">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>"
            <li class="list-group-item bg-info">School: ${intern.school}</li>
         </ul>
    </div>`
    html.push(internHtml);
}

// loop team members for cards

for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager"){
        createManager(team[i]);
    }
    if (team[i].getRole() === "Engineer"){
        createEngineer(team[i]);
    }
    if (team[i].getRole() === "Intern"){
        createIntern(team[i]);
}
}
// html elements
return html.join("");
}

// output html

module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/boostrap@5.20/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHN1/vI1Bx" crossorigin="anonymous">
        <link rel="stylesheet" href="../Dist/team.css">
        <title>Engineering Team</title>
    </head>
    
    <body>
        <header>
            <h1 class="text-center m-2 p-2 header"> Engineering Team</h1>
        </header>
        <main class="row justify-content-center">"
        ${createTeam(team)}
        </main>
        </body>
        </html>`;
}
