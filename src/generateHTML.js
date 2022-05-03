
function generateManagerSection(managers) {
    let managerSection = "";

    if (managers.length < 1) {
        managerSection += `<p>This team does not have any managers.<p>`
    } else {
        for (let i = 0; i < managers.length; i++) {
            const icon = `<i class="fa-solid fa-people-group"></i>`;
            const email = `<a href="mailto:${managers[i].email}" target:"_blank">${managers[i].email}</a>`;
        
            managerSection += `
            <!-- MANAGER CARD -->
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="border:1px solid green;">
                <div class="card border-secondary mb-3" style="width: auto;">
                    <div class="card-header">
                        <p>${managers[i].name}</p>
                        <p>${icon} ${managers[i].role}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${managers[i].id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">Office: ${managers[i].officeNumber}</li>
                    </ul>
                </div>
            </div>
            <!-- / MANAGER CARD -->
        `
        }
    }
    return managerSection;
}

function generateEngineerSection(engineers) {
    let engineerSection = "";

    if (engineers.length < 1) {
        engineerSection += `<p>This team does not have any engineers.</p>`
    } else {
        for (let i = 0; i < engineers.length; i++) {
            const icon = `<i class="fa-solid fa-user-robot"></i>`;
            const email = `<a href="mailto:${engineers[i].email}" target:"_blank">${engineers[i].email}</a>`;
        
            engineerSection += `
            <!-- ENGINEER CARD -->
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="border:1px solid green;">
                <div class="card border-secondary mb-3" style="width: auto;">
                    <div class="card-header">
                        <p>${engineers[i].name}</p>
                        <p>${icon} ${engineers[i].role}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${engineers[i].id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">GitHub: ${engineers[i].github}</li>
                    </ul>
                </div>
            </div>
            <!-- / ENGINEER CARD -->
        `
        }
    }
    return engineerSection;
}

function generateInternSection(interns) {
    let internSection = "";

    if (interns.length < 1) {
        internSection += `<p>This team does not have any interns.</p>`
    } else {
        for (let i = 0; i < interns.length; i++) {
            const icon = `<i class="fa-solid fa-graduation-cap"></i>`;
            const email = `<a href="mailto:${interns[i].email}" target:"_blank">${interns[i].email}</a>`;
        
            internSection += `
            <!-- INTERN CARD -->
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="border:1px solid green;">
                <div class="card border-secondary mb-3" style="width: auto;">
                    <div class="card-header">
                        <p>${interns[i].name}</p>
                        <p>${icon} ${interns[i].role}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${interns[i].id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">School: ${interns[i].school}</li>
                    </ul>
                </div>
            </div>
            <!-- / INTERN CARD -->
        `
        }
    }
    return internSection;
}

function generatePage(managers, engineers, interns) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <!-- font awesome icons -->
        <link href="https://use.fontawesome.com/releases/v6.1.0/css/all.css" rel="stylesheet" integrity="sha384-eLT4eRYPHTmTsFGFAzjcCWX+wHfUInVWNm9YnwpiatljsZOwXtwV2Hh6sHM6zZD9" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
    
        <header class="jumbotron px-5 py-2">
            <h1 class="display-4">Team Profiles</h1>
            <p class="lead">The development team consists of the following talented people:</p>
        </header>
    
        <main>
            
        <!-- MANAGEMENT -->
    
        <section class="container-fluid px-5 py-2" style="border:1px solid blue;">
            <div class="row justify-content-start" style="border:1px solid red;">

            <h2>Managers / Team Leads</h2>
            <hr>

            ${generateManagerSection(managers)}

            </div> <!-- end of row -->
        </section> <!-- end of container -->
    
    
        <!-- ENGINEERS -->
    
        <section class="container-fluid px-5 py-2" style="border:1px solid blue;">
            <div class="row justify-content-start" style="border:1px solid red;">
    
            <h2>Engineers</h2>
            <hr>

            ${generateEngineerSection(engineers)}
    
            </div> <!-- end of row -->
        </section> <!-- end of container -->
    
        <!-- INTERNS -->
    
        <section class="container-fluid px-5 py-2" style="border:1px solid blue;">
            <div class="row justify-content-start" style="border:1px solid red;">
    
            <h2>Interns</h2>
            <hr>
    
            ${generateInternSection(interns)}
    
            </div> <!-- end of row -->
        </section> <!-- end of container -->
    
        </main>
    
        <footer class="container-fluid px-5 py-2 text-center">
            <h5>&copy; 2022 Sushan Yue</h5>
        </footer>
    </body>
    </html>`;
}

module.exports = generatePage;



/*
function generateManagerSection(team) {
    let teamMember = team;


    if (teamMember.role === "Manager") {

    let role = `<i class="fa-solid fa-people-group"></i> ${teamMember.role}`;
    let detail = `Office number: ${teamMember.officeNumber}`;
    const email = `Email: <a href="mailto:${teamMember.email}" target:"_blank">${teamMember.email}</a>`

    const managerSection = `<div class="card" style="width: 18rem;">
<div class="card-header">
    <p>${teamMember.name}</p>
    <p>${role}</p>
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">${teamMember.id}</li>
    <li class="list-group-item">${email}</li>
    <li class="list-group-item">${detail}</li>
</ul>
</div>`;

return managerSection;
    }
}

*/

// function generateTeamCards() {
//     return `<div class="card" style="width: 18rem;">
// <div class="card-header">
//     Featured
// </div>
// <ul class="list-group list-group-flush">
//     <li class="list-group-item">Cras justo odio</li>
//     <li class="list-group-item">Dapibus ac facilisis in</li>
//     <li class="list-group-item">Vestibulum at eros</li>
// </ul>
// </div>`;
// }