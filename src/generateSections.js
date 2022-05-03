// handy function to remove all the extra spaces on either side of names, emails, etc
function trim(string) {
    return string.trim();
}

// create a card for each manager
function generateManagerSection(managers) {
    let managerSection = ""; // empty so we can add the HTML for each person to it

    if (managers.length < 1) { // precaution in case there are no managers, display below message
        managerSection += `<p>This team does not have any managers.<p>`
    } else { 
        // if there ARE people, loop through each person and make a card for them
        for (let i = 0; i < managers.length; i++) {
            const icon = `<i class="fa-solid fa-people-group"></i>`;

            const email = `<a class="embolden" href="mailto:${trim(managers[i].email)}" target="_blank">${trim(managers[i].email)}</a>`;
        
            managerSection += `<!-- MANAGER CARD -->
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 pb-3">
                <div class="card h-100 border-secondary mb-3" style="width: auto;">
                    <div class="card-header manager-card-header">
                        <p class="h4 text-capitalize lightly-embold">${trim(managers[i].name)}</p>
                        <p class="h5 lightly-embold">${icon} ${managers[i].role}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${trim(managers[i].id)}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">Office: ${trim(managers[i].officeNumber)}</li>
                    </ul>
                </div>
            </div>
            <!-- / MANAGER CARD -->
            `
        }
    }
    return managerSection;
}

// make cards for each engineer
function generateEngineerSection(engineers) {
    let engineerSection = ""; // set the section to be empty

    if (engineers.length < 1) { // if no engineers, display the below line stating so
        engineerSection += `<p>This team does not have any engineers.</p>`
    } else {
        // loop through engineers and make a card for everyone
        for (let i = 0; i < engineers.length; i++) {
            const icon = `<i class="fa-solid fa-robot"></i>`;

            const email = `<a class="embolden" href="mailto:${trim(engineers[i].email)}" target="_blank">${trim(engineers[i].email)}</a>`;

            const github = `<a class="embolden" href="${trim(engineers[i].github)}" target="_blank">${trim(engineers[i].github)}</a>`;
        
            engineerSection += `<!-- ENGINEER CARD -->
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 pb-3">
                <div class="card h-100 border-secondary mb-3" style="width: auto;">
                    <div class="card-header engineer-card-header">
                        <p class="h4 text-capitalize lightly-embold">${trim(engineers[i].name)}</p>
                        <p class="h5 lightly-embold">${icon} ${engineers[i].role}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${trim(engineers[i].id)}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">GitHub: ${github}</li>
                    </ul>
                </div>
            </div>
            <!-- / ENGINEER CARD -->
            `
        }
    }
    return engineerSection;
}

// make the cards for each intern
function generateInternSection(interns) {
    let internSection = ""; // start with blank slate

    if (interns.length < 1) { // if no interns, display the following message
        internSection += `<p>This team does not have any interns.</p>`
    } else {
        // make cards for each intern
        for (let i = 0; i < interns.length; i++) {
            const icon = `<i class="fa-solid fa-graduation-cap"></i>`;

            const email = `<a class="embolden" href="mailto:${trim(interns[i].email)}" target="_blank">${trim(interns[i].email)}</a>`;
        
            internSection += `<!-- INTERN CARD -->
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 pb-3">
                <div class="card h-100 border-secondary mb-3" style="width: auto;">
                    <div class="card-header intern-card-header">
                        <p class="h4 text-capitalize lightly-embold">${trim(interns[i].name)}</p>
                        <p class="h5 lightly-embold">${icon} ${interns[i].role}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${trim(interns[i].id)}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">School: ${trim(interns[i].school)}</li>
                    </ul>
                </div>
            </div>
            <!-- / INTERN CARD -->
            `
        }
    }
    return internSection;
}

module.exports = {
    generateManagerSection,
    generateEngineerSection,
    generateInternSection
}