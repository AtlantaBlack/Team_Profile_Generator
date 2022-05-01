function generateTeamCards() {
    return `<div class="card" style="width: 18rem;">
<div class="card-header">
    Featured
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
</ul>
</div>`;
}

function generatePage(teamCards) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
</head>
<body>

    ${teamCards}
    
</body>
</html>`;
}

module.exports = {
    generateTeamCards,
    generatePage
};