
const s = require("./generateSections");

function generatePage(managers, engineers, interns) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <!-- Font Awesome v6 icons -->
        <link href="https://use.fontawesome.com/releases/v6.1.0/css/all.css" rel="stylesheet" integrity="sha384-eLT4eRYPHTmTsFGFAzjcCWX+wHfUInVWNm9YnwpiatljsZOwXtwV2Hh6sHM6zZD9" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>

    <body>
        <header class="jumbotron px-5 py-2">
            <h1 class="display-4">Team Profiles</h1>
            <p class="lead">The development team consists of the following talented people:</p>
        </header>
    
        <main> <!-- team cards will go in here -->
            
        <!-- MANAGEMENT -->
        <section class="container-fluid px-5 py-2">
            <div class="row justify-content-start">

            <h2>Managers / Team Leads</h2>
            <hr>

            ${s.generateManagerSection(managers)}
            </div> <!-- end of row (management) -->
        </section> <!-- end of container (management) -->
    
        <!-- ENGINEERS -->

        <section class="container-fluid px-5 py-2">
            <div class="row justify-content-start">
    
            <h2>Engineers</h2>
            <hr>

            ${s.generateEngineerSection(engineers)}
            </div> <!-- end of row (engineers) -->
        </section> <!-- end of container (engineers) -->
    
        <!-- INTERNS -->
    
        <section class="container-fluid px-5 py-2">
            <div class="row justify-content-start">
    
            <h2>Interns</h2>
            <hr>
    
            ${s.generateInternSection(interns)}
            </div> <!-- end of row (interns) -->
        </section> <!-- end of container (interns) -->
    
        </main>
    
        <footer class="container-fluid px-5 py-2 text-center">
            <h5>&copy; 2022 Sushan Yue</h5>
        </footer>
    </body>
    </html>`;
}

module.exports = generatePage;