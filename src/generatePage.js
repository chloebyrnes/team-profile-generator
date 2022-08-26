// creates HTML

const htmlelements = function(team) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../src/style.css" rel="stylesheet">
    
    <title>Team Profile</title>
</head>
<body>

<section>
<h1>Employee Team</h1>
    ${team}
</section>

    
</body>
</html>
    `;
};




// sections

function appendManager(manager){
    return `
    <div class="card">
    <div class="container">
    <h2>Manager</h2>
    <h4><b>Name: ${manager.name}</b></h4></p>
    <h4><b>Employee ID: ${manager.id}</b></h4>
    <h4><b>Email: <a href="mailto:${manager.email}">${manager.email}</a></b></h4>
    <h4><b>Office Number: ${manager.number}</b></h4>
    </div>
    </div>
    `
}

function appendEngineer(engineer){
    return `
    <div class="card">
    <div class="container">
    <h2>Engineer</h2>
    <h4><b>Name: ${engineer.name}</b></h4>
    <h4><b>Employee ID: ${engineer.id}</b></h4>
    <h4><b>Email: <a href="mailto:${engineer.email}">${engineer.email}}</a></b></h4>
    <h4><b>GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></b></h4>
    </div>
    </div>
    `
}

function appendIntern(intern){
    return `
    <div class="card">
    <div class="container">
    <h2>Intern</h2>
    <h4><b>Name: ${intern.name}</b></h4>
    <h4><b>Employee ID: ${intern.id}</b></h4>
    <h4><b>Email: <a href="mailto:${intern.email}">${intern.email}</a></b></h4>
    <h4><b>School: ${intern.school}</b></h4>
    </div>
    </div>
    `
}



// JS 


function generatePage(teamMembers){

    
    const teamMemberCard = [];
    for(let i=0; i < teamMembers.length; i++){
        const role = teamMembers[i].getRole();
        const member = teamMembers[i]
        if(role === 'Manager') teamMemberCard.push(appendManager(member))
        else if (role === 'Engineer') teamMemberCard.push(appendEngineer(member))
        else if (role === 'Intern') teamMemberCard.push(appendIntern(member))
    }
    return htmlelements(teamMemberCard.join(''));

};

module.exports = generatePage;