function generateManagerSection(managers) {
    let managerSection = "";

    if (managers.length < 1) {
        managerSection += `<p>This team does not have any managers.<p>`
    } else {
        for (let i = 0; i < managers.length; i++) {
            const icon = `<i class="fa-solid fa-people-group"></i>`;
            const email = `<a href="mailto:${managers[i].email}" target:"_blank">${managers[i].email}</a>`;
        
            managerSection += `<!-- MANAGER CARD -->
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
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
            const icon = `<i class="fa-solid fa-robot"></i>`;
            const email = `<a href="mailto:${engineers[i].email}" target:"_blank">${engineers[i].email}</a>`;
            const github = `<a href="${engineers[i].github}">${engineers[i].github}</a>`;
        
            engineerSection += `<!-- ENGINEER CARD -->
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card border-secondary mb-3" style="width: auto;">
                    <div class="card-header">
                        <h3>${engineers[i].name}</h3>
                        <h4>${icon} ${engineers[i].role}</h4>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${engineers[i].id}</li>
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

function generateInternSection(interns) {
    let internSection = "";

    if (interns.length < 1) {
        internSection += `<p>This team does not have any interns.</p>`
    } else {
        for (let i = 0; i < interns.length; i++) {
            const icon = `<i class="fa-solid fa-graduation-cap"></i>`;
            const email = `<a href="mailto:${interns[i].email}" target:"_blank">${interns[i].email}</a>`;
        
            internSection += `<!-- INTERN CARD -->
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
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

module.exports = {
    generateManagerSection,
    generateEngineerSection,
    generateInternSection
}