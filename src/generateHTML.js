
function generateManagerSection(managers) {
    // return `${JSON.stringify(managers)}`;

    if (!managers) {
        return `This team does not have any managers/team leads.`
    } else {
        managers.forEach(manager => {

            console.log("manager in generate manager section");
            console.log(manager);
            console.log(manager.name);

            const icon = `<i class="fa-solid fa-people-group"></i>`;
            const email = `Email: <a href="mailto:${manager.email}" target:"_blank">${manager.email}</a>`;
        
            return `<div class="col-12 col-sm-6 col-md-4 col-lg-3" style="border:1px solid green;">
            <div class="card border-secondary mb-3" style="width: auto;">
                <div class="card-header">
                    <p>${manager.name}</p>
                    <p>${icon} ${manager.role}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">Office: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>`
        });
    }
}

function generateEngineerSection(engineers) {
    return `${JSON.stringify(engineers)}`;
}

function generateInternSection(interns) {
    return `${JSON.stringify(interns)}`;
}

function generateIndex(managers, engineers, interns) {
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

module.exports = generateIndex;



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